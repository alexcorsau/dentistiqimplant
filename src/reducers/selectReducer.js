const selectReducer = (state = false, action) => {
  switch (action.type) {
    case 'IS_SELECTED':
      return !state;
    default:
      return state;
  }
};

export default selectReducer;
