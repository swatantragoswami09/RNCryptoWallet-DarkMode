import * as tabActions from "./tabActions";
const intialState = {
  isTradeModalVisible: false,
};

const tabReducer = (state = intialState, action) => {
  switch (action.type) {
    case tabActions.SET_TRADE_MODAL_VISIBILITY:
      return {
        ...state,
        isTradeModalVisible: action.payload.isVisible,
      };
    default:
      return state;
  }
};

export default tabReducer;
