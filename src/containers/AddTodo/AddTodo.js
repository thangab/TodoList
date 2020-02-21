import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions";
import { bindActionCreators } from "redux";

const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        value={value}
        onChange={v => {
          setValue(v.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          if (value.trim() !== "") {
            addTodo(value);
            setValue("");
          }
        }}
      >
        Add
      </button>
    </>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addTodo }, dispatch);

export default connect(null, mapDispatchToProps)(AddTodo);
