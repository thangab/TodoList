import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../actions/todos";
const Todo = props => {
  return (
    <p>
      {props.text}
      <button>Done</button>{" "}
      <button onClick={() => props.deleteTodo(props.id)}>Delete</button>
    </p>
  );
};

// const mapDispatchToProps1 = dispatch => {
//   return { deleteTodo: dispatch(id => deleteTodo(id)) };
// };

const mapDispatchToProps = { deleteTodo };

export default connect(null, mapDispatchToProps)(Todo);
