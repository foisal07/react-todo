import React from "react";

export default function Button({ className, rest, text }) {
  return (
    <>
      <button className={className} {...rest}>{text}</button>
    </>
  );
}
