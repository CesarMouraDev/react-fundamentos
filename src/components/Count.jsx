import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => parseFloat((prevCount + Math.PI).toFixed(2)));
  };

  const handleDecrement = () => {
    setCount((prevCount) => parseFloat((prevCount - Math.PI).toFixed(2)));
  };

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={handleIncrement}>Aumentar</button>
      <button onClick={handleDecrement}>Diminuir</button>
    </div>
  );
};

export default Counter;