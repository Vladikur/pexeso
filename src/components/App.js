import { useState, useEffect } from 'react';
import Card from "./Card";
import { shuffle } from '../utils/shuffle';
import { cards } from '../constants/cards';

const App = () => {

  const [random, setRandom] = useState(cards);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setRandom(shuffle(random))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setArr(random)
  }, [random])

  return (
    <div className="app">
      <div className="container">
        <div className="app__cards-container">
          {arr.map((card) => (
            <Card
              key={card.id}
              value={card.cardContent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
