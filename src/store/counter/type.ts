import { CounterAction } from "./action";

//khai báo các type chung
export const INCREASE_COUNT = " INCREASE_COUNT";
//định nghĩa dispatch type
export type DispatchType = (args: CounterAction)  => CounterAction;




