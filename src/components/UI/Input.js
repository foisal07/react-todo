import React from "react";

export default function Input({ className, placeholder, rest }) {
  return (
    <>
      <input className={className} placeholder={placeholder} {...rest}/>
    </>
  );
}
