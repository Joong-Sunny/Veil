import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import {useGesture} from 'react-use-gesture';

interface TinderCardProps {
  name: string;
  age: number;
  imgUrl: string;
  onSwipe: (direction: 'left' | 'right') => void;
}

const TinderCard: React.FC<TinderCardProps> = ({onSwipe, imgUrl, name, age}) => {
  const [isSwiped, setIsSwiped] = useState(false);

  const [{x, y, rot, scale}, api] = useSpring(() => ({x: 0, y: 0, rot: 0, scale: 1}));

  const bind = useGesture({
    onDrag: ({down, movement: [mx, my], velocity, direction: [xDir]}) => {
      const trigger = velocity > 0.5; // Swipe speed threshold
      const distanceThreshold = 10;
      const dir = xDir < 0 ? 'left' : 'right'; // Swipe direction

      if (!down && trigger && Math.abs(mx) > distanceThreshold && !isSwiped) {
        setIsSwiped(true);
        onSwipe(dir);
        api.start({x: (200 + window.innerWidth) * (dir === 'left' ? -1 : 1), rot: 0, scale: 1});
      } else {
        api.start({x: down ? mx : 0, y: down ? my : 0, rot: mx / 100, scale: down ? 1.1 : 1, immediate: down});
      }
    },
  });

  const cardStyle = {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transform: rot.to(r => `rotate(${r}deg)`),
    height: '600px',
    width: '500px',
    x,
    y,
    scale,
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
  }

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  }

  return (
    <animated.div {...bind()}
                  style={cardStyle}
                  onTouchStart={handleTouchStart}
                  onContextMenu={handleContextMenu}
    >
    </animated.div>
  );
};

export default TinderCard;
