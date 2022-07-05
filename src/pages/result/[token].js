import React from "react";

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
  });
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
