import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, INIT_TODO } from "../actions";

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case INIT_TODO:
      return action.data;
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
