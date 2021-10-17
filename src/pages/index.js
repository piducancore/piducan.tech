/** @jsx jsx */
import { jsx, Themed, Button } from "theme-ui";

export default function IndexPage() {
  const handleClick = async (event) => {
    event.preventDefault();
    try {
      let response = await fetch("/api/create");
      const { url, token } = await response.json();
      window.location.assign(url + "?token_ws=" + token);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div sx={{ height: "100vh", display: "flex", p: 3 }}>
      <div sx={{ m: "auto", textAlign: "center" }}>
        <Themed.h1>Webpay Plus integration demo</Themed.h1>
        <Button onClick={handleClick}>Pay me 🤑</Button>
      </div>
    </div>
  );
}
