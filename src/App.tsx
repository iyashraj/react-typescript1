import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);
  const handleIncrese = (): void => {
    setCount(count + 1);
  };
  const handleDecrese = (): void => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
