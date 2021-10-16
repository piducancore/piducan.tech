import React from "react";

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
    <h1>
      hello world{" "}
      <span style={{ cursor: "pointer" }} onClick={handleClick}>
        🤑
      </span>
    </h1>
  );
}
