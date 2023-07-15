import { useSelector } from "react-redux";
import { IRootState } from "../../store";

const ShowInfo = () => {
  const countState = useSelector((state: IRootState) => state.count);

  return <div>
    Kết quả: {countState.count}
    </div>;
};

export default ShowInfo;