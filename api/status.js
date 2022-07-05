const { WebpayPlus } = require("transbank-sdk");

if (process.env.WPP_CC && process.env.WPP_KEY) {
  WebpayPlus.configureForProduction(process.env.WPP_CC, process.env.WPP_KEY);
} else {
  WebpayPlus.configureForTesting();
}

module.exports = async function (req, res) {
  let token = req.body.token;

  const statusResponse = await new WebpayPlus.Transaction().status(token);

  let viewData = {
    token,
    statusResponse,
  };

  console.log("api/status", {
    step: "Estado de Transacción",
    stepDescription:
      "Puedes solicitar el estado de una transacción hasta 7 días despues de que haya sido" +
      " realizada. No hay limite de solicitudes de este tipo, sin embargo, una vez pasados los " +
      "7 días ya no podrás revisar su estado.",
    viewData,
  });

  res.json(viewData);
};
