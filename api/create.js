const WebpayPlus = require("transbank-sdk").WebpayPlus;

if (process.env.WPP_CC && process.env.WPP_KEY) {
  WebpayPlus.configureForProduction(process.env.WPP_CC, process.env.WPP_KEY);
} else {
  WebpayPlus.configureWebpayPlusForTesting();
}

module.exports = async (req, res) => {
  let buyOrder = "O-" + Math.floor(Math.random() * 10000) + 1;
  let sessionId = "S-" + Math.floor(Math.random() * 10000) + 1;
  let amount = req.query.amount || Math.floor(Math.random() * 1000) + 1001;
  let returnUrl = process.env.BASE_URL + "/api/commit";

  const createResponse = await WebpayPlus.Transaction.create(buyOrder, sessionId, amount, returnUrl);

  let token = createResponse.token;
  let url = createResponse.url;

  res.json({ buyOrder, sessionId, amount, returnUrl, token, url });
};
