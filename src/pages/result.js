/** @jsx jsx */
import { jsx, Themed, Spinner } from "theme-ui";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";

export default function SuccessPage() {
  const [data, setData] = useState({ token: false });
  const getStatus = async () => {
    const response = await fetch("/api/status");
    const json = await response.json();
    setData(json);
  };
  useEffect(() => getStatus());
  return (
    <Layout>
      {data.token ? (
        <React.Fragment>
          <Themed.h1>Results</Themed.h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </React.Fragment>
      ) : (
        <Spinner sx={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
      )}
    </Layout>
  );
}
