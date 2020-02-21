export const ADD_TODO = "ADD_TODO";
export const SET_FILTER = "SET_VISIBILITY_FILTER";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

let nextTodoId = 3;
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
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
