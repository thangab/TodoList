const initialState = {
  todos: [
    { id: 1, text: "todo 1", completed: false },
    { id: 2, text: "todo 2", completed: true }
  ]
};

export const todo = (state = initialState, action) => {
  return state;
};
