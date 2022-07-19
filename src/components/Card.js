const Card = ({card, handleOpenCard}) => {

  const cardFrontClassName = (
    `card__inner card__inner_front ${card.isOpened ? 'card__inner_front_open' : ''}`
  );
  const cardBackClassName = (
    `card__inner card__inner_back ${card.isOpened ? 'card__inner_back_open' : ''}`
  );

  return (
    <div onClick={() => handleOpenCard(card)} className="card">
      <div className={cardFrontClassName}>
          <img src ='https://i.pinimg.com/originals/2d/0f/79/2d0f796f4655baeca812ed1b7af9abf7.jpg' alt='#'/>
      </div>
      <div className={cardBackClassName}>
          <img src ={card.cardContent} alt='#'/>
      </div>
    </div>
  );
}

export default Card;