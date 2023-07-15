import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import {
  additionCountAction,
  divisionCountAction,
  multiplicationCountAction,
  subtractionCountAction,
} from "../../store/caculate/action";
import { useState } from "react";

const Caculate = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);

  const handleAddition = () => {
    dispatch(additionCountAction(number1, number2));
  };

  const handleSubtraction = () => {
    dispatch(subtractionCountAction(number1, number2));
  };

  const handleMultiplication = () => {
    dispatch(multiplicationCountAction(number1, number2));
  };

  const handleDivision = () => {
    dispatch(divisionCountAction(number1, number2));
  };

  return (
    <div>
      <label htmlFor="number1">Số 1: </label>
      <input
        type="number"
        id="number1"
        placeholder="number 1"
        value={number1}
        onChange={(e) => setNumber1(Number(e.target.value))}
      />
      <label htmlFor="number2">Số 2: </label>
      <input
        type="number"
        id="number2"
        placeholder="number 2"
        value={number2}
        onChange={(e) => setNumber2(Number(e.target.value))}
      />
      <br />
      <button onClick={handleAddition}>Cộng</button>
      <button onClick={handleSubtraction}>Trừ</button>
      <button onClick={handleMultiplication}>Nhân</button>
      <button onClick={handleDivision}>Chia</button>
    </div>
  );
};

export default Caculate;
