const { WebpayPlus } = require("transbank-sdk");

if (process.env.WPP_CC && process.env.WPP_KEY) {
  WebpayPlus.configureForProduction(process.env.WPP_CC, process.env.WPP_KEY);
} else {
  WebpayPlus.configureForTesting();
}

module.exports = async function (req, res) {
  //Flujos:
  //1. Flujo normal (OK): solo llega token_ws
  //2. Timeout (más de 10 minutos en el formulario de Transbank): llegan TBK_ID_SESION y TBK_ORDEN_COMPRA
  //3. Pago abortado (con botón anular compra en el formulario de Webpay): llegan TBK_TOKEN, TBK_ID_SESION, TBK_ORDEN_COMPRA
  //4. Caso atipico: llega todos token_ws, TBK_TOKEN, TBK_ID_SESION, TBK_ORDEN_COMPRA
  let params = req.method === "GET" ? req.query : req.body;

  let token = params.token_ws;
  let tbkToken = params.TBK_TOKEN;
  let tbkOrdenCompra = params.TBK_ORDEN_COMPRA;
  let tbkIdSesion = params.TBK_ID_SESION;

  let step = null;
  let stepDescription = null;
  let viewData = {
    token,
    tbkToken,
    tbkOrdenCompra,
    tbkIdSesion,
  };

  if (token && !tbkToken) {
    //Flujo 1
    const commitResponse = await new WebpayPlus.Transaction().commit(token);
    viewData = {
      token,
      commitResponse,
    };
    step = "Confirmar Transacción";
    stepDescription =
      "En este paso tenemos que confirmar la transacción con el objetivo de avisar a " +
      "Transbank que hemos recibido la transacción ha sido recibida exitosamente. En caso de que " +
      "no se confirme la transacción, ésta será reversada.";

    console.log("api/commit", {
      step,
      stepDescription,
      viewData,
    });

    res.status(301);
    res.setHeader("Location", `/result/${token}`);
    res.end();
  } else {
    if (!token && !tbkToken) {
      //Flujo 2
      step = "El pago fue anulado por tiempo de espera.";
      stepDescription =
        "En este paso luego de anulación por tiempo de espera (+10 minutos) no es necesario realizar la confirmación ";
    } else if (!token && tbkToken) {
      //Flujo 3
      step = "El pago fue anulado por el usuario.";
      stepDescription = "En este paso luego de abandonar el formulario no es necesario realizar la confirmación ";
    } else if (token && tbkToken) {
      //Flujo 4
      step = "El pago es inválido.";
      stepDescription = "En este paso luego de abandonar el formulario no es necesario realizar la confirmación ";
    }
    console.log("api/commit", {
      step,
      stepDescription,
      viewData,
    });
    res.status(301);
    res.setHeader("Location", `/`);
    res.end();
  }
};
