import { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [numDays, setNumDays] = useState("");
  const [staff, setStaff] = useState<string>('');
  const [totalPayment, setTotalPayment] = useState(0);
  const [errors, setErrors] = useState({});
  const isValidEmail = (email: string): boolean => {
    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const getRatePerDay = (level: string) => {
    const rateTable = {
      "bậc 1": 1200,
      "bậc 2": 2400,
      "bậc 3": 3600,
    };
    return rateTable[level] || 0;
  };

  const validateForm = () => {
    const errors = {};

    if (fullName.trim() === "") {
      errors.fullName = "Vui lòng nhập họ tên";
    }

    if (email.trim() === "") {
      errors.email = "Vui lòng nhập email";
    } else if (!isValidEmail(email)) {
      errors.email = "Email không hợp lệ";
    }

    if (gender === "") {
      errors.gender = "Vui lòng chọn giới tính";
    }

    if (selectedLevel === "") {
      errors.selectedLevel = "Vui lòng chọn cấp bậc";
    }

    if (typeof numDays === 'string' && numDays.trim() === '') {
      errors.numDays = "Vui lòng nhập số ngày nằm viện";
    } else if (isNaN(numDays)) {
      errors.numDays = "Số ngày nằm viện phải là một số";
    } else if (numDays <= 0) {
      errors.numDays = "Số ngày nằm viện phải lớn hơn 0";
    }

    if (staff === "") {
      errors.staff = "Vui lòng chọn cán bộ";
    }

    setErrors(errors);
  const calculatePayment = () => {
    const ratePerDay = getRatePerDay(selectedLevel);
    const payment = ratePerDay * numDays;
    setTotalPayment(payment);
  };
    if (Object.keys(errors).length === 0) {
      calculatePayment();
    }

    // const ratePerDay = getRatePerDay(selectedLevel);
    // const payment = ratePerDay * numDays;
    // setTotalPayment(payment);
  };

  return (
    <div  className= "border-2 p-5 rounded-lg">
      <form>
        <div>
          <label htmlFor="fullName" className="text-[20px]">Họ tên: </label>
          <input
            type="text"
            id="fullName"
            onChange={(e) => setFullName(e.target.value)}
            className={errors.fullName ? "error" : ""}
          />
          {errors.fullName && (
            <span className="error-message">{errors.fullName}</span>
          )}
        </div>
        <br />

        <div>
          <label htmlFor="email" className="text-[20px]">Email: </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "error" : ""}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <br />

        <div>
          <label className="text-[20px]">Giới tính: </label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="Nam"
            checked={gender === "Nam"}
            onChange={(e) => setGender(e.target.value)}
className={errors.gender ? "error" : ""}
          />
          <label htmlFor="male">Nam</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="Nữ"
            checked={gender === "Nữ"}
            onChange={(e) => setGender(e.target.value)}
            className={errors.gender ? "error" : ""}
          />
          <label htmlFor="female">Nữ</label>
          {errors.gender && (
            <span className="error-message">{errors.gender}</span>
          )}
        </div>
        <br />

        <div>
          <label htmlFor="level" className="text-[20px]">Cấp bậc: </label>
          <select
            id="level"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className={errors.selectedLevel ? "error" : ""}
          >
            <option value="bậc 1">bậc 1</option>
            <option value="bậc 2">bậc 2</option>
            <option value="bậc 3">bậc 3</option>
          </select>
          {errors.selectedLevel && (
            <span className="error-message">{errors.selectedLevel}</span>
          )}
        </div>
        <br />

        <div>
          <label htmlFor="numDays" className="text-[20px]">Số ngày nằm viện: </label>
          <input
            type="text"
            id="numDays"
            value={numDays}
            onChange={(e) => setNumDays(parseInt(e.target.value) || 0)}
            className={errors.numDays ? "error" : ""}
          />
          {errors.numDays && (
            <span className="error-message">{errors.numDays}</span>
          )}
        </div>
        <br />

        <div>
          <label htmlFor="staff" className="text-[20px]">Cán bộ: </label>
          <select
            id="staff"
            value={staff}
            onChange={(e) => setStaff(e.target.value)}
            className={errors.staff ? "error" : ""}
          >
            <option value="nhân viên">nhân viên</option>
            <option value="cán bộ">cán bộ</option>
            <option value="quản lý">quản lý</option>
          </select>
          {errors.staff && (
            <span className="error-message">{errors.staff}</span>
          )}
        </div>
        <br />

        <button type="button" onClick={validateForm}>
          Check
        </button>
      </form>
      <br />

      <div>
       <i> <p>Tiền được chi trả nằm viện: {totalPayment}</p></i>
      </div>
    </div>
  );
};

export default Form;