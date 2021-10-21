const WebpayPlus = require("transbank-sdk").WebpayPlus;
const { serialize } = require("cookie");

if (process.env.WPP_CC && process.env.WPP_KEY) {
  WebpayPlus.configureForProduction(process.env.WPP_CC, process.env.WPP_KEY);
} else {
  WebpayPlus.configureWebpayPlusForTesting();
}

module.exports = async (req, res) => {
  let token = req.body.token_ws;

  const commitResponse = await WebpayPlus.Transaction.commit(token);

  console.log({ token, commitResponse });

  res.status(301);
  res.setHeader("Set-Cookie", serialize("token", token, { httpOnly: true, secure: true }));
  res.setHeader("Location", `/result`);
  res.end();
};
