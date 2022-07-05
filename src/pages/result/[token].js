import React from "react";
import Layout from "../../components/layout";

export default function ResultsByToken({ params }) {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    const getStatus = async () => {
      const response = await fetch("/api/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: params.token }),
      });
      const json = await response.json();
      setData(json);
    };
    getStatus();
  }, [params]);

  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  );
}
