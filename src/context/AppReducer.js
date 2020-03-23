export default (state, action) => {
  switch (action.type) {
    case 'ROTATE_X':
      return {
        ...state,
        xVal: action.payload
      };
    case 'ROTATE_Y':
      return {
        ...state,
        yVal: action.payload
      };
    case 'ROTATE_Z':
      return {
        ...state,
        zVal: action.payload
      };
    default:
      return state;
  }
};
