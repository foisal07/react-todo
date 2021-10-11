import React from "react";

export default function Button({ className, onClick, rest, text }) {
  return (
    <>
      <button className={className} onClick={onClick} {...rest}>{text}</button>
    </>
  );
}
