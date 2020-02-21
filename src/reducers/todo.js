import { DELETE_TODO } from "../actions/todos";

const initialState = {
  todos: [
    { id: 1, text: "todo 1", completed: false },
    { id: 2, text: "todo 2", completed: true }
  ]
};

export const todo = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };

    default:
      return state;
  }
};
