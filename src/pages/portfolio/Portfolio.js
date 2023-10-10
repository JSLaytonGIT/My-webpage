import { useState } from 'react';
import FloatingCard from "../../components/floatingCard/FloatingCard";
import cards from "./cards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import './Portfolio.scss';

const Portfolio = ({ handleClick }) => {
  const [visibleCards, setVisibleCards] = useState([0, 1, 2]);
  const [rightSlideAnimation, setRightSlideAnimation] = useState(0);
  const [leftSlideAnimation, setLeftSlideAnimation] = useState(0);
  const [hiddenCards, setHiddenCards] = useState([2, 0])

  const handleRightSlide = () => {
    const newStartIndex = (visibleCards[0] + 2) % cards.length;
    const newMiddleIndex = (visibleCards[1] + 2) % cards.length;
    const newEndIndex = (visibleCards[2] + 2) % cards.length;
    const newHiddenLeftCard = (visibleCards[0] + 1) % cards.length;
    const newHiddenRightCard = (visibleCards[2]) % cards.length;
    setVisibleCards([newStartIndex, newMiddleIndex, newEndIndex]);
    setHiddenCards([newHiddenLeftCard, newHiddenRightCard]);
  };

  const handleLeftSlide = () => {
    const newStartIndex = (visibleCards[0] + 4)  % cards.length;
    const newMiddleIndex = (visibleCards[1] + 4) % cards.length;
    const newEndIndex = (visibleCards[2] + 4) % cards.length;
    const newHiddenLeftCard = (visibleCards[0] ) % cards.length;
    const newHiddenRightCard = (visibleCards[2] + 2 ) % cards.length;
    setVisibleCards([newStartIndex, newMiddleIndex, newEndIndex]);
    setHiddenCards([newHiddenLeftCard, newHiddenRightCard]);
  };
  
  return (
    <div className="container portfolio-page">
      <div className='carousel-container'>
        <div className="row">
          {[cards[hiddenCards[0]],cards[visibleCards[0]], cards[visibleCards[1]], cards[visibleCards[2]], cards[hiddenCards[1]]].map((card, index) => (
            <div
              className="column"
              onAnimationEnd={() => {
                if(rightSlideAnimation === 1){
                  handleRightSlide()
                  setRightSlideAnimation(0);
                } else {
                  handleLeftSlide()
                  setLeftSlideAnimation(0);
                };
              }}
              rightSlideAnimation={rightSlideAnimation}
              leftSlideAnimation={leftSlideAnimation}
            >
              <FloatingCard url={card.url}>
                <div className="card-title">{card.title}</div>
                <div className="card-body">{card.description}</div>
                <div className="image-container">
                  <div className="image-inner-container">
                    <div className="ratio" style={{ paddingTop: '61%' }}>
                      <div className="ratio-inner">
                        <img src={card.image} alt='Card' />
                      </div>
                    </div>
                  </div>
                </div>
              </FloatingCard>
            </div>
          ))}
        </div>
        <div className="navigation-buttons">
          <FontAwesomeIcon icon={faAnglesLeft} className='arrow' size="5x" onClick={() => {setLeftSlideAnimation(1); setRightSlideAnimation(0);}} />
          <FontAwesomeIcon icon={faAnglesRight} className='arrow' size="5x" onClick={() => {setRightSlideAnimation(1); setLeftSlideAnimation(0)}} />
        </div>
      </div>
      <div className="up-arrow">
          <FontAwesomeIcon icon={faAngleDoubleUp}  size="2xl" onClick={handleClick}/>
      </div>
    </div>
  )
}

export default Portfolio;