const WebpayPlus = require("transbank-sdk").WebpayPlus;

module.exports = async (req, res) => {
  if (process.env.WPP_CC && process.env.WPP_KEY) {
    WebpayPlus.configureForProduction(process.env.WPP_CC, process.env.WPP_KEY);
  } else {
    WebpayPlus.configureWebpayPlusForTesting();
  }

  let token = req.body.token;

  const statusResponse = await WebpayPlus.Transaction.status(token);

  let viewData = {
    token,
    statusResponse,
  };

  res.json({ viewData });
};
