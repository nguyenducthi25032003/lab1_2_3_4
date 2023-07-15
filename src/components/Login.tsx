import { useState } from "react";
const Login = () => {
    const [email, setEmail] = useState<String>('');
    //Khai báo 1 state có dạng 1 state error dạng mảng
    const [errors, setErrors] = useState<String[]>([]);
    const handleSubmit = () => {
        //Tạo 1 mảng lỗi mới
        let newErrors: string[] = [];
        if(!email || email.length === 0) {
            newErrors.push("Email is required");
    }else if(email.length < 6){//chiều dài email phải lơn hơn 6 kí tự
        newErrors.push("Email must be at least 6 character");
    }
    //set đống new errors vào trong state error
    setErrors((prevError) => {
        const uniqueErrors = new Set([...prevError,...newErrors]);
        return Array.from(uniqueErrors);
    })

}
  return (
<>
    <h1>Đăng nhập</h1>
    <form action="">
        <label htmlFor="">Email
        <input type="text" onChange={(event) => setEmail(event.target.value)}/>
        </label>
    <button type="button" onClick={handleSubmit}>GỬi</button>
    {
        errors.length>0 && (
            <ul>
                {
                    errors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))
                }
            </ul>
        )
    }
    </form>
</>
  )
}

export default Login
