const WebpayPlus = require("transbank-sdk").WebpayPlus;

module.exports = async (req, res) => {
  if (process.env.WPP_CC && process.env.WPP_KEY) {
    WebpayPlus.configureForProduction(process.env.WPP_CC, process.env.WPP_KEY);
  } else {
    WebpayPlus.configureWebpayPlusForTesting();
  }

  let { token, amount } = req.body;

  const refundResponse = await WebpayPlus.Transaction.refund(token, amount);

  let viewData = {
    token,
    amount,
    refundResponse,
  };

  res.json({ viewData });
};
