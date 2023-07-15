import { useState } from "react";

function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(0);

  const calculate = () => {
    const operations: { [key: string]: (a: number, b: number) => number } = {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => a / b,
    };

    setResult(operations[operation](number1, number2));
  };

  return (
    <div>
      <div>
        <label htmlFor="number1">Number 1:</label>
        <input
          type="number"
          id="number1"
          value={number1}
          onChange={(e) => setNumber1(parseFloat(e.target.value))}
        />
      </div>
      <br />
      <div>
        <label htmlFor="number2">Number 2:</label>
        <input
          type="number"
          id="number2"
          value={number2}
          onChange={(e) => setNumber2(parseFloat(e.target.value))}
        />
      </div>
      <br />
      <div>
        <label htmlFor="operation">Operation:</label>
        <select
          id="operation"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">Cộng</option>
          <option value="subtract">Trừ</option>
          <option value="multiply">Nhân</option>
          <option value="divide">Chia</option>
        </select>
      </div>
      <br />
      <button onClick={calculate}>Tính toán</button>
      <br />
      <p id="result">Kết quả: {result}</p>
    </div>
  );
}

export default Calculator;
