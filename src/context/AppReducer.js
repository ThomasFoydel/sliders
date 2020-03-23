export default (state, action) => {
  switch (action.type) {
    case 'ROTATE_X':
      return {
        ...state,
        rotateX: action.payload
      };
    default:
      return state;
  }
};
