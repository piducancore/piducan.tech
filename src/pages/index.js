/** @jsx jsx */
import { jsx, Themed, Button, Input, Flex, Label } from "theme-ui";
import Layout from "../components/layout";

export default function IndexPage() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await fetch("/api/create");
    const { url, token } = await response.json();
    window.location.assign(url + "?token_ws=" + token);
  };
  return (
    <Layout>
      <Themed.h1 sx={{}}>Welcome</Themed.h1>
      <Themed.p>This is the place where you pay for our services</Themed.p>
      <Flex sx={{ flexDirection: "column" }} as="form" onSubmit={handleSubmit}>
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="text" />
        <Button sx={{ mt: 3 }}>Proceed to Webpay Plus</Button>
      </Flex>
    </Layout>
  );
}
