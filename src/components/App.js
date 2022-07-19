import { useState, useEffect } from 'react';
import Card from "./Card";
import Timer from "./Timer";
import { shuffle } from '../utils/shuffle';
import { cards } from '../constants/cards';

const App = () => {

  const [random, setRandom] = useState(cards);
  const [arr, setArr] = useState([]);
  const [openedCard1, setOpenedCard1] = useState({});
  const [openedCard2, setOpenedCard2] = useState({});
  const [openedCards, setOpenedCards] = useState([]);

  useEffect(() => {
    setRandom(shuffle(random))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setArr(random)
  }, [random])

  useEffect(() => {
    if (!openedCard1.id || !openedCard2.id) return
    
    setTimeout(() => {handleCloseCard(openedCard1, openedCard2)}, 700)

    setOpenedCard2(0)
    setOpenedCard1(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openedCard1, openedCard2])

  const handleOpenCard = (clickCard) => {
    if (openedCard1.id === clickCard.id) return
    if (!openedCard1.id) setOpenedCard1(clickCard)
    else setOpenedCard2(clickCard)

    const arrWithOpenedCard = [...arr]
    arrWithOpenedCard.forEach(card => {
      if (card.id === clickCard.id) card.isOpened = true
    })

    setArr(arrWithOpenedCard)
  }

  const handleCloseCard = (openedCard1, openedCard2) => {
    if (openedCard1.cardsPare !== openedCard2.cardsPare) {
      const arrCards = [...arr]
      arrCards.forEach(card => {
        if (card.id === openedCard1.id) card.isOpened = false
        if (card.id === openedCard2.id) card.isOpened = false
      })

      setArr(arrCards)
    } else {
      setOpenedCards([...openedCards, openedCard1.id, openedCard2.id])
    }
  }

  const restart = () => {
    const arrCards = [...cards]
    arrCards.forEach(card => {
      card.isOpened = false
    })
    setArr(shuffle(arrCards))
    setOpenedCards([])
  }

  return (
    <div className="app">
      <div className="container">
        <div className="app__cards-wrapper">
          <div className="app__cards-container">
            {arr.map((card) => (
              <Card
                key={card.id}
                card={card}
                handleOpenCard={handleOpenCard}
              />
            ))}
          </div>
        </div>
        {openedCards.length === arr.length ? <span>Вы победили!</span> : ''}
        <Timer
            restart={restart}
        />
      </div>
    </div>
  );
}

export default App;
