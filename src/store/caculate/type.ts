import { CaculateAction } from "./action";

export const ADDITION = "ADDITION";
export const SUBTRACTION = "SUBTRACTION";
export const MULTIPLICATION = "MULTIPLICATION";
export const DIVISION = "DIVISION";

export type DispatchType = (args: CaculateAction) => CaculateAction;
