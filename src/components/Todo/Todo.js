import React from "react";

export default function Todo({ text, completed }) {
  return (
    <div style={completed ? { textDecoration: "line-through" } : {}}>
      {text}
    </div>
  );
}
