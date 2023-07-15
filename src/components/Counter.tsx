import { useState } from "react";

const  Counter = () => {
    // khởi tạo 1 state 
    const [counter,setCounter] = useState<number>(0); // khởi tạo 1 state có giá trị mặc định = 0 
    const [name,setName] = useState<string>('');
    const [namSinh,setNamSinh] = useState<number>(0);
    const [tuoi,setTuoi] = useState<number>(0);
    const [isDisplay,setDisplay] = useState(false); // set trạng thái hiển thị mặc định là false

    const handlerCounter = () => {
        setTuoi(new Date().getFullYear() - namSinh);
        setDisplay(true);
        setCounter(counter+1);
    }
    // const handleName = (event : any) => {
    //     setName(event.target.value);
    // }
    // khai 1 1 state ngày sinh và 1 input ngày sinh 
    // khi bấm vào nút hiển thị ra mành hình
    // tôi là ... tôi 20 tuổi (năm hiện tại - năm sinh ).
    // tạo 2 ô input số a và số b  tạo 1 input select (cộng + trừ + nhân + chia)
    // nếu chọn cộng thì state hiển thị kết quả a + b 
    // 
    return(
        <>
            <label htmlFor="">Tên:</label>
            <input type="text" onChange={(event)=>setName(event.target.value)}/>
            <br/>
            <label htmlFor="">Năm sinh:</label>
            <input type="text" onChange={(event)=>setNamSinh(+event.target.value)}/>
           { isDisplay ? <h1>Tên của tôi là {name} tuổi của tôi là {tuoi}</h1> : <></> }
            <h1>Đây là giá trị {counter} </h1>
            <input type="button" value={'count'} onClick={handlerCounter} />
        </>
    );
}

export default Counter;