import { useState, useEffect } from 'react';
import Card from "./Card";
import { shuffle } from '../utils/shuffle';
import { cards } from '../constants/cards';

const App = () => {

  const [random, setRandom] = useState(cards);
  const [arr, setArr] = useState([]);
  const [openedCard1, setOpenedCard1] = useState({});
  const [openedCard2, setOpenedCard2] = useState({});
  const [isWinner, setIsWinner] = useState(false);

  useEffect(() => {
    setRandom(shuffle(random))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setArr(random)
    console.log('wdef')
  }, [random])

  // useEffect(() => {
  //   console.log('wdef')
  //   const arrCards = [...arr]
  //   const closedCards = arrCards.filter(card => card.isOpened = false);
  //   if (!closedCards) setIsWinner(true)
  // }, [arr])

  useEffect(() => {
    if (!openedCard1.id || !openedCard2.id) return
    
    setTimeout(() => {handleCloseCard(openedCard1, openedCard2)}, 700)

    setOpenedCard2(0)
    setOpenedCard1(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openedCard1, openedCard2])

  const handleOpenCard = (clickCard) => {
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
    }
  }

  const restart = () => {
    const arrCards = [...cards]
    arrCards.forEach(card => {
      card.isOpened = false
    })
    setArr(shuffle(arrCards))
  }

  return (
    <div className="app">
      <div className="container">
        <div className="app__cards-container">
          {arr.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleOpenCard={handleOpenCard}
            />
          ))}
        </div>
        {isWinner ? <span>Вы победили!</span> : ''}
        <button onClick={restart}>Начать заново</button>
      </div>
    </div>
  );
}

export default App;
