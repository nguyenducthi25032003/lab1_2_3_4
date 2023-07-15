import { CounterAction } from "./action";
import * as actions from "./type";
//Tạo ra 1 khuôn state
export interface ICouterState {
    counter: number; //
  
}


//khởi tạo state couter=0
const initCouterState: ICouterState = {
    counter: 0
}

const counterReducer = (state: ICouterState= initCouterState, action:(CounterAction)): ICouterState => {
    switch (action.type) {
        case actions.INCREASE_COUNT:
            //xử lý logic tăng trong này
            state = {
                ...state,
                counter: state.counter + action.payload
            }
    }
    return state;
}
export default counterReducer;