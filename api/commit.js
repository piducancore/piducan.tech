const WebpayPlus = require("transbank-sdk").WebpayPlus;

module.exports = async (req, res) => {
  if (process.env.WPP_CC && process.env.WPP_KEY) {
    WebpayPlus.configureForProduction(process.env.WPP_CC, process.env.WPP_KEY);
  } else {
    WebpayPlus.configureWebpayPlusForTesting();
  }

  let token = req.body.token_ws;

  const commitResponse = await WebpayPlus.Transaction.commit(token);

  let viewData = {
    token,
    commitResponse,
  };

  res.json({
    viewData,
  });
};
