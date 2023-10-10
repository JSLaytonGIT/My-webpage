import { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './FloatingCard.scss';

const FloatingCard = ({ children, url }) => {

    const ref = useRef();

    const [isHovered, setHovered] = useState(false);
  
    const [animatedProps, setAnimatedProps] = useSpring(() => {
      return {
        xys: [0, 0, 1],
        config: { mass: 10, tension: 400, friction: 40, precision: 0.001 }
      };
    });

    const openUrlInNewWindow = () => {
      window.open(url, '_blank');
  };
  
    return (
      <animated.div
        ref={ref}
        className={`card ${isHovered ? 'hovered' : ''}`}
        onClick={openUrlInNewWindow}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={({ clientX, clientY }) => {
          const x =
            clientX -
            (ref.current.offsetLeft -
              (window.scrollX || document.body.scrollLeft));
  
          const y =
            clientY -
            (ref.current.offsetTop -
              (window.scrollY || document.body.scrollTop));
  
          const dampen = 5000; // Lower the number the less rotation
          const xys = [
            0,
            0,
            1.07
          ];
  
          setAnimatedProps({ xys: xys });
        }}
        onMouseLeave={() => {
          setHovered(false);
          // Set xys back to original
          setAnimatedProps({ xys: [0, 0, 1] });
        }}
        style={{
          zIndex: isHovered ? 2 : 1,
          transform: animatedProps.xys.to(
            (x, y, s) =>
              `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
          )
        }}
      >
        {children}
      </animated.div>
    );
}

export default FloatingCard;