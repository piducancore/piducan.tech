/** @jsx jsx */
import { jsx, Spinner } from "theme-ui";
import React from "react";
import Layout from "../../components/layout";

export default function SuccessPage() {
  return (
    <Layout>
      <Spinner sx={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
    </Layout>
  );
}
