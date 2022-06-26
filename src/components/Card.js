const Card = ({card, handleOpenCard}) => {

  const cardFrontClassName = (
    `card__inner card__inner_front ${card.isOpened ? 'card__inner_front_open' : ''}`
  );
  const cardBackClassName = (
    `card__inner card__inner_back ${card.isOpened ? 'card__inner_back_open' : ''}`
  );

  return (
    <div onClick={() => handleOpenCard(card)} className="card">
      <div className={cardFrontClassName}></div>
      <div className={cardBackClassName}>
        <p>{card.cardContent}</p>
      </div>
    </div>
  );
}

export default Card;