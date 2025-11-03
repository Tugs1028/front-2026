import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);
  const [max, setMax] = useState(0);
  const [avg, setAvg] = useState(0);
  const [name, setName] = useState("");

  const [sumA, setSumA] = useState("");
  const [sumB, setSumB] = useState("");

  const [maxA, setMaxA] = useState("");
  const [maxB, setMaxB] = useState("");
  const [maxC, setMaxC] = useState("");

  const [avgA, setAvgA] = useState("");
  const [avgB, setAvgB] = useState("");
  const [avgC, setAvgC] = useState("");

  const addName = () => {
    if (name.trim() === "") {
      alert("Нэрээ оруулна уу!");
      return;
    }
    setData([...data, name]);
    setName("");
  };

  const calculateSum = () => {
    if (sumA === "" || sumB === "") {
      alert("Sum-ийн 2 тоог оруулна уу!");
      return;
    }
    setSum(Number(sumA) + Number(sumB));
  };

  const calculateMax = () => {
    if (maxA === "" || maxB === "" || maxC === "") {
      alert("Max-ийн 3 тоог оруулна уу!");
      return;
    }
    let maximum = Number(maxA);
    if (Number() > maximum) {
      maximum = Number(maxB);
    }
    if (Number(maxC) > maximum) {
      maximum = Number(maxC);
    }
    setMax(maximum);
  };

  const calculateAvg = () => {
    if (avgA === "" || avgB === "" || avgC === "") {
      alert("Avg-ийн 3 тоог оруулна уу!");
      return;
    }
    setAvg((Number(avgA) + Number(avgB) + Number(avgC)) / 3);
  };

  return (
    <div>
      <h1>Нэр оруулна уу</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Нэр ээ оруулна уу"
      />
      <button onClick={addName}>Add name</button>

      <h2>Names</h2>
      <ul>
        {data.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>

      <h2>Sum (a + b)</h2>
      <input
        type="number"
        value={sumA}
        onChange={(e) => setSumA(e.target.value)}
        placeholder="a"
      />
      <input
        type="number"
        value={sumB}
        onChange={(e) => setSumB(e.target.value)}
        placeholder="b"
      />
      <button onClick={calculateSum}>Calculate Sum</button>
      <p>
        Sum: <span>{sum}</span>
      </p>

      <h2>Max (a, b, c)</h2>
      <input
        type="number"
        value={maxA}
        onChange={(e) => setMaxA(e.target.value)}
        placeholder="a"
      />
      <input
        type="number"
        value={maxB}
        onChange={(e) => setMaxB(e.target.value)}
        placeholder="b"
      />
      <input
        type="number"
        value={maxC}
        onChange={(e) => setMaxC(e.target.value)}
        placeholder="c"
      />
      <button onClick={calculateMax}>Calculate Max</button>
      <p>
        Max: <span>{max}</span>
      </p>

      <h2>Average (a, b, c)</h2>
      <input
        type="number"
        value={avgA}
        onChange={(e) => setAvgA(e.target.value)}
        placeholder="a"
      />
      <input
        type="number"
        value={avgB}
        onChange={(e) => setAvgB(e.target.value)}
        placeholder="b"
      />
      <input
        type="number"
        value={avgC}
        onChange={(e) => setAvgC(e.target.value)}
        placeholder="c"
      />
      <button onClick={calculateAvg}>Calculate Avg</button>
      <p>
        Avg: <span>{avg}</span>
      </p>
    </div>
  );
}
