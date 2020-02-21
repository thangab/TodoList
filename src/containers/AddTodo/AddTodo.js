import React, { useState } from "react";

const AddTodo = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        value={value}
        type="text"
        onChange={v => {
          setValue(v.target.value);
        }}
      />
      <button>Add Todo</button>
    </div>
  );
};

export default AddTodo;
