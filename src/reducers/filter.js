import { SET_FILTER, FiltersValue } from "../actions";

const filter = (state = FiltersValue.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filter;
