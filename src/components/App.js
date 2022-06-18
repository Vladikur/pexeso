import { useState, useEffect } from 'react';
import Card from "./Card";

const App = () => {

  const [random, setRandom] = useState([1, 1, 2, 2, 3, 3]);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setRandom(shuffle(random))
  }, [])

  useEffect(() => {
    setArr(random)
  }, [random])

  function shuffle(arr) {
    let array = arr
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  return (
    <div className="app">
      <div className="container">
        <div className="app__cards-container">
          {arr.map((card, i) => (
            <Card
              key={i}
              value={card}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
