import { useState } from 'react';

const Card = ({value}) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleOpenCard = () => {
    if (isOpen) setIsOpen(false)
    else setIsOpen(true)
  }

  const cardFrontClassName = (
    `card__inner card__inner_front ${isOpen ? 'card__inner_front_open' : ''}`
  );
  const cardBackClassName = (
    `card__inner card__inner_back ${isOpen ? 'card__inner_back_open' : ''}`
  );

  return (
    <div onClick={handleOpenCard} className="card">
      <div className={cardFrontClassName}></div>
      <div className={cardBackClassName}>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default Card;