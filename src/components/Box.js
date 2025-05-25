import React from "react";

export default function Box({className, title}) {
  console.log(className, title);
  return (
  <div className={className}>
    <p><b>{title}</b></p>
  </div>
  );
}