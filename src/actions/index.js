export const ADD_TODO = "ADD_TODO";
export const SET_FILTER = "SET_VISIBILITY_FILTER";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const FETCH_TODO = "FETCH_TODO";
export const INIT_TODO = "INIT_TODO";

// Redux-thunk
// export const fetchTodos = () => {
//   return dispatch => {
//     fetch("data.json")
//       .then(response => response.json())
//       .then(data => {
//         setTimeout(() => dispatch(initTodos(data)), 2000);
//       });
//   };
// };

export const fetchTodos = () => ({ type: FETCH_TODO });

export const initTodos = data => ({ type: INIT_TODO, data });

let nextTodoId = 1000;
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export const FiltersValue = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_UNCOMPLETED: "SHOW_UNCOMPLETED"
};
