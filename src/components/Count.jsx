import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        const newCount = count + Math.PI;        
        setCount(parseFloat(newCount.toFixed(2)))
        };

    const handleDecrement = () => {
      const newCount = count - Math.PI;        
       setCount(parseFloat(newCount.toFixed(2)))
       };

    

    return (
        <div>
            <p>voce clicou {count.toFixed(2)} vezes</p>
            <button onClick={handleIncrement}>Aumentar</button>
           <button onClick={handleDecrement}>Diminuir</button>
        </div>
    );
};

export default Counter;