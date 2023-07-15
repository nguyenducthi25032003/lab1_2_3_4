import { CaculateAction } from "./action";
import * as actions from "./type";

interface ICaculateState {
  count: number;
}

const initialState: ICaculateState = {
  count: 0,
};

const caculateReducer = (
  state: ICaculateState = initialState,
  action: CaculateAction
): ICaculateState => {
  switch (action.type) {
    case actions.ADDITION:
      return {
        ...state,
        count: action.payload.number1 + action.payload.number2,
      };
    case actions.SUBTRACTION:
      return {
        ...state,
        count: action.payload.number1 - action.payload.number2,
      };
    case actions.MULTIPLICATION:
      return {
        ...state,
        count: action.payload.number1 * action.payload.number2,
      };
    case actions.DIVISION:
      return {
        ...state,
        count: action.payload.number1 / action.payload.number2,
      };
    default:
      return state;
  }
  return state;
};

export default caculateReducer;
