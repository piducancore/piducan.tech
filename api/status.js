const WebpayPlus = require("transbank-sdk").WebpayPlus;

if (process.env.WPP_CC && process.env.WPP_KEY) {
  WebpayPlus.configureForProduction(process.env.WPP_CC, process.env.WPP_KEY);
} else {
  WebpayPlus.configureWebpayPlusForTesting();
}

module.exports = async (req, res) => {
  let token = req.body.token;

  const statusResponse = await WebpayPlus.Transaction.status(token);

  res.json({ token, statusResponse });
};
