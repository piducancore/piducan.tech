const WebpayPlus = require("transbank-sdk").WebpayPlus;

if (process.env.WPP_CC && process.env.WPP_KEY) {
  WebpayPlus.configureForProduction(process.env.WPP_CC, process.env.WPP_KEY);
} else {
  WebpayPlus.configureWebpayPlusForTesting();
}

module.exports = async (req, res) => {
  let { token, amount } = req.body;

  const refundResponse = await WebpayPlus.Transaction.refund(token, amount);

  res.json({ token, amount, refundResponse });
};
