import React, { useState, useEffect } from 'react';
import './Card.scss';

const Card = ({ imageUrl, onDismiss, onLike, onDislike }) => {
  const [startPoint, setStartPoint] = useState(null);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const isTouchDevice = () => (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));

  const handleMove = (x, y) => {
    if (!startPoint) return;
    const offsetX = x - startPoint.x;
    const offsetY = y - startPoint.y;
    const rotate = offsetX * 0.1;
    setOffsetX(offsetX);
    setOffsetY(offsetY);
    const cardElement = document.getElementById('card');
    cardElement.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${rotate}deg)`;
    // dismiss card
    if (Math.abs(offsetX) > cardElement.clientWidth * 0.7) {
      dismissCard(offsetX > 0 ? 1 : -1);
    }
  };

  const dismissCard = (direction) => {
    setStartPoint(null);
    document.removeEventListener('mouseup', handleMoveUp);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('touchend', handleTouchEnd);
    document.removeEventListener('touchmove', handleTouchMove);
    const cardElement = document.getElementById('card');
    cardElement.style.transition = 'transform 1s';
    cardElement.style.transform = `translate(${direction * window.innerWidth}px, ${offsetY}px) rotate(${90 * direction}deg)`;
    cardElement.classList.add('dismissing');
    setTimeout(() => {
      cardElement.remove();
    }, 1000);
    if (typeof onDismiss === 'function') {
      onDismiss();
    }
    if (typeof onLike === 'function' && direction === 1) {
      onLike();
    }
    if (typeof onDislike === 'function' && direction === -1) {
      onDislike();
    }
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (!startPoint) return;
    const { clientX, clientY } = e;
    handleMove(clientX, clientY);
  };

  const handleMoveUp = () => {
    setStartPoint(null);
    document.removeEventListener('mousemove', handleMouseMove);
    const cardElement = document.getElementById('card');
    cardElement.style.transform = '';
  };

  const handleTouchMove = (e) => {
    if (!startPoint) return;
    const touch = e.changedTouches[0];
    if (!touch) return;
    const { clientX, clientY } = touch;
    handleMove(clientX, clientY);
  };

  const handleTouchEnd = () => {
    setStartPoint(null);
    document.removeEventListener('touchmove', handleTouchMove);
    const cardElement = document.getElementById('card');
    cardElement.style.transform = '';
  };

  useEffect(() => {
    const cardElement = document.getElementById('card');
    if (isTouchDevice()) {
      cardElement.addEventListener('touchstart', (e) => {
        const touch = e.changedTouches[0];
        if (!touch) return;
        const { clientX, clientY } = touch;
        setStartPoint({ x: clientX, y: clientY });
        document.addEventListener('touchmove', handleTouchMove);
        cardElement.style.transition = 'transform 0s';
      });

      document.addEventListener('touchend', handleTouchEnd);
      document.addEventListener('cancel', handleTouchEnd);
    } else {
      cardElement.addEventListener('mousedown', (e) => {
        const { clientX, clientY } = e;
        setStartPoint({ x: clientX, y: clientY });
        document.addEventListener('mousemove', handleMouseMove);
        cardElement.style.transition = 'transform 0s';
      });

      document.addEventListener('mouseup', handleMoveUp);
      cardElement.addEventListener('dragstart', (e) => {
        e.preventDefault();
      });
    }

    return () => {
      document.removeEventListener('mouseup', handleMoveUp);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div id="card" className="card">
      <img src={imageUrl} alt="Card" />
    </div>
  );
};

export default Card;
