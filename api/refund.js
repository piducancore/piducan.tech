const { WebpayPlus } = require("transbank-sdk");

if (process.env.WPP_CC && process.env.WPP_KEY) {
  WebpayPlus.configureForProduction(process.env.WPP_CC, process.env.WPP_KEY);
} else {
  WebpayPlus.configureForTesting();
}

module.exports = async function (request, response, next) {
  let { token, amount } = request.query;

  const refundResponse = await new WebpayPlus.Transaction().refund(token, amount);

  let viewData = {
    token,
    amount,
    refundResponse,
  };

  console.log("api/refund", {
    step: "Reembolso de Transacción",
    stepDescription:
      "Podrás pedir el reembolso del dinero al tarjeta habiente, dependiendo del monto " +
      "y el tiempo transacurrido será una Reversa, Anulación o Anulación parcial.",
    viewData,
  });
  response.json(viewData);
};
