/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { Link } from "gatsby";

export default function SuccessPage() {
  return (
    <div sx={{ height: "100vh", display: "flex" }}>
      <div sx={{ m: "auto", textAlign: "center" }}>
        <Themed.h1>Webpay Plus integration demo</Themed.h1>
        <Themed.p sx={{ fontSize: 6 }}>🥳 that was a succeess!</Themed.p>
        <Themed.a as={Link} to="/">
          Try again
        </Themed.a>
      </div>
    </div>
  );
}
