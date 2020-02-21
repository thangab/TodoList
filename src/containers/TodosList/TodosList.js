import React from "react";
import { connect } from "react-redux";
import { toggleTodo, FiltersValue, deleteTodo } from "../../actions";
import { Todo } from "../../components/Todo";

const TodosList = ({ todos, filter, toggleTodo, deleteTodo }) => {
  const getFilteredTodos = filter => {
    switch (filter) {
      case FiltersValue.SHOW_ALL:
        return todos;
      case FiltersValue.SHOW_COMPLETED:
        return todos.filter(t => t.completed);
      case FiltersValue.SHOW_ACTIVE:
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  };

  return (
    <div>
      <ul>
        {getFilteredTodos(filter).map(todo => (
          <li key={todo.id}>
            <Todo text={todo.text} completed={todo.completed} />{" "}
            <button
              onClick={() => {
                toggleTodo(todo.id);
              }}
            >
              Done
            </button>
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ todos, filter }) => ({ todos, filter });
const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
