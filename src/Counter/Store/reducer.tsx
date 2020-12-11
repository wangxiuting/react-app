const actionTypes = (state:any, action:any) => {
    switch (action.type) {
      case action.ADD_COUNTER:
        state += 10;
        break;
      case action.REDUCE_COUNTER:
        state = state - 10;
        break;
      default:
        return state;
    }
  }

  export default actionTypes