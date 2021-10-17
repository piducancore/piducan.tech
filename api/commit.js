const WebpayPlus = require("transbank-sdk").WebpayPlus;

if (process.env.WPP_CC && process.env.WPP_KEY) {
  WebpayPlus.configureForProduction(process.env.WPP_CC, process.env.WPP_KEY);
} else {
  WebpayPlus.configureWebpayPlusForTesting();
}

module.exports = async (req, res) => {
  let token = req.body.token_ws;

  if (token) {
    const commitResponse = await WebpayPlus.Transaction.commit(token);
    // res.json({ token, commitResponse });
    const { response_code, status } = commitResponse;
    const success = response_code === 0 && status === "AUTHORIZED";
    res.status(301);
    res.setHeader("Location", success ? "/success" : "/fail");
    res.end();
  } else {
    res.status(301);
    res.setHeader("Location", "/fail");
    res.end();
  }
};
