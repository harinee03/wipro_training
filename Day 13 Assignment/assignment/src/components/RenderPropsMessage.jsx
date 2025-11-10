import React from "react";

function RenderPropsMessage({ render }) {
  const userName = "Harinee";
  return <div className="mt-4">{render(userName)}</div>;
}

export default RenderPropsMessage;
