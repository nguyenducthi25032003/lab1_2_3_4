import * as actionType from "./type";

export type CaculateAction = {
  type: string;
  payload: {
    number1: number;
    number2: number;
  };
};

export function additionCountAction(number1: number, number2: number) {
  const action: CaculateAction = {
    type: actionType.ADDITION,
    payload: {
      number1,
      number2,
    },
  };
  return (dispatch: actionType.DispatchType) => {
    dispatch(action);
  };
}

export function subtractionCountAction(number1: number, number2: number) {
  const action: CaculateAction = {
    type: actionType.SUBTRACTION,
    payload: {
      number1,
      number2,
    },
  };
  return (dispatch: actionType.DispatchType) => {
    dispatch(action);
  };
}

export function multiplicationCountAction(number1: number, number2: number) {
  const action: CaculateAction = {
    type: actionType.MULTIPLICATION,
    payload: {
      number1,
      number2,
    },
  };
  return (dispatch: actionType.DispatchType) => {
    dispatch(action);
  };
}

export function divisionCountAction(number1: number, number2: number) {
  const action: CaculateAction = {
    type: actionType.DIVISION,
    payload: {
      number1,
      number2,
    },
  };
  return (dispatch: actionType.DispatchType) => {
    dispatch(action);
  };
}
