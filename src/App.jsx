import { useMemo, useState } from "react";

export function App() {
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(0);

  const result = useMemo(() => heavyCalculation(number), [number]);

  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };

  const onClick = () => setCounter(counter + 1);

  return (
    <div>
      <div>
        Méga calcul sur
        <input type="number" value={number} onChange={onChange} />
        Résultat : {result}
      </div>
      <div>
        <button onClick={onClick}>Augmenter compteur</button>
        Compteur : {counter}
      </div>
    </div>
  );
}

function heavyCalculation(value) {
  console.log("heavyCalculation()");
  let newResult = 0;
  for (let i = 0; i < 1000; i++) {
    console.log("Loop");
    newResult += i * value;
  }
  return newResult;
}
