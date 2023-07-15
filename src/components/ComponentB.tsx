import { useSelector } from "react-redux";
import { IRootState } from "../store";
import { UseSelector } from "react-redux/es/hooks/useSelector";
const ComponentB = () => {
  const counterState = useSelector((state: IRootState) => state.counter);
  return (
    <>
      <h1>Giá trị tăng là: </h1>
    </>
  );
};

export default ComponentB;
