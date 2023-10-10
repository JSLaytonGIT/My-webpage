import Card from './Card';
import './Card.scss';

const CardSwiper = ({ cards }) => {
  return (
    <div id="swiper">
      {cards.map((card, index) => (
        <Card key={index} imageUrl={card.imageUrl} index={index} />
      ))}
    </div>
  );
};

export default CardSwiper;
