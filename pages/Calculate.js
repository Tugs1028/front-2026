import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);
  const [max, setMax] = useState(0);
  const [average, setAverage] = useState(0);
  const [name, setName] = useState("");
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const calculateSum = (a, b) => {
    setSum(Number(a) + Number(b));
  };

  const calculateMax = (a, b, c) => {
    let maximum = Number(a);
    if (Number(b) > maximum) {
      maximum = Number(b);
    }
    if (Number(c) > maximum) {
      maximum = Number(c);
    }
    setMax(maximum);
  };

  const calculateAverage = (a, b, c) => {
    const average = Number(a) + Number(b) + Number(c);
    const result = average / 3;
    setAverage(result);
  };

  const handleSubmit = () => {
    calculateSum(a, b);
    calculateMax(a, b, c);
    calculateAverage(a, b, c);
  };

  const addName = () => {
    setData([...data, name]);
    setName("");
  };

  return (
    <div>
      <h2>Нэр оруулах</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Нэр ээ оруулна уу"
      ></input>
      <button onClick={addName}>Add name</button>

      <h3>Names:</h3>
      <ul>
        {data.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>

      <h2>Тоонууд оруулах</h2>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="a"
      ></input>
      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="b"
      ></input>
      <input
        type="number"
        value={c}
        onChange={(e) => setC(e.target.value)}
        placeholder="c"
      ></input>

      <button onClick={handleSubmit}>Submit</button>

      <h3>Үр Дүн</h3>

      <p>
        Sum: <span>{sum}</span>
      </p>
      <p>
        Max: <span>{max}</span>
      </p>
      <p>
        Avg: <span>{average}</span>
      </p>
    </div>
  );
}
