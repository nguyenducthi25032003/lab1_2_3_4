import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer, {ICouterState} from "./counter/reduce";
import thunk from "redux-thunk";
import caculateReducer, {ICaculateState} from "./caculate/reduce";

// định nghĩa 1 cái rootstate chung

export interface IRootState {
  counter: ICounterState;
  count: ICaculateState;
}
const rootReducer = combineReducers({
  counter: counterReducer,
  count: caculateReducer,
});

// tạo ra store
export const store = createStore(rootReducer, applyMiddleware(thunk));
