const { WebpayPlus } = require("transbank-sdk");

if (process.env.WPP_CC && process.env.WPP_KEY) {
  WebpayPlus.configureForProduction(process.env.WPP_CC, process.env.WPP_KEY);
} else {
  WebpayPlus.configureForTesting();
}

module.exports = async function (req, res) {
  let buyOrder = "O-" + Math.floor(Math.random() * 10000) + 1;
  let sessionId = "S-" + Math.floor(Math.random() * 10000) + 1;
  let amount = Math.floor(Math.random() * 1000) + 1001;
  let returnUrl = "http://localhost:3000" + "/api/commit";

  const createResponse = await new WebpayPlus.Transaction().create(buyOrder, sessionId, amount, returnUrl);

  let token = createResponse.token;
  let url = createResponse.url;

  let viewData = {
    buyOrder,
    sessionId,
    amount,
    returnUrl,
    token,
    url,
  };

  console.log("api/create", {
    step: "Crear Transacción",
    stepDescription:
      "En este paso crearemos la transacción con el objetivo de obtener un identificador unico y " +
      "poder en el siguiente paso redirigir al Tarjetahabiente hacia el formulario de pago",
    viewData,
  });

  res.status(301);
  res.setHeader("Location", `${url}?token_ws=${token}`);
  res.end();
};
