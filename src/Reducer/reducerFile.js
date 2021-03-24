const MyReducer = (state, action) => {
  switch (action.type) {
    case "SPACE_X_DATA":
      return { ...state, list: action.payload, loader: action.loaders };

    case "ALL_FILTER":
      return { ...state, list: action.payload };

    case "LAUNCH_LAND__FILTER":
      return { ...state, list: action.payload };

    case "LAUNCH_FILTER":
      return { ...state, list: action.payload };

    default:
      return state;
  }
};

export default MyReducer;
