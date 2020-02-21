import React from "react";
import { connect } from "react-redux";
import { Todo } from "../Todo";
const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => {
        return <Todo key={todo.id} text={todo.text} id={todo.id} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(TodoList);
