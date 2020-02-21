import React from "react";
import { connect } from "react-redux";
import { setFilter, FiltersValue } from "../../actions";

const Filters = ({ setFilter }) => {
  return (
    <div>
      <button
        onClick={() => {
          setFilter(FiltersValue.SHOW_ALL);
        }}
      >
        ALL
      </button>
      /
      <button
        onClick={() => {
          setFilter(FiltersValue.SHOW_COMPLETED);
        }}
      >
        Done
      </button>
      /
      <button
        onClick={() => {
          setFilter(FiltersValue.SHOW_ACTIVE);
        }}
      >
        Undone
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter))
});

export default connect(null, mapDispatchToProps)(Filters);
