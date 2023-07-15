import { useDispatch } from "react-redux";
import { increaseCountAction } from "../store/counter/action";
import { Dispatch } from "redux";
const ComponentA = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const increase = () => {
    dispatch(increaseCountAction(1));
  };
  return (
    <>
      <button onClick={increase}>increase</button>
    </>
  );
};

export default ComponentA;
