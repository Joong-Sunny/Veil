'use strict';

import React from 'react';
import Card from './Card';

const Swipe = () => {
  const celebrities = [
    {
      imageUrl: 'https://github.com/VEIL-findSomeone/app/assets/63194662/8f0fd1e5-b64f-4974-8b03-244deb72894b',
      caption: '멋있는 남자 1'
    },
    {
      imageUrl: 'https://github.com/VEIL-findSomeone/app/assets/63194662/8f0fd1e5-b64f-4974-8b03-244deb72894b',
      caption: '잘생긴 남자 2'
    },
    {
      imageUrl: 'https://github.com/VEIL-findSomeone/app/assets/63194662/8f0fd1e5-b64f-4974-8b03-244deb72894b',
      caption: '괜찮은 남자 3'
    },
    {
      imageUrl: 'https://github.com/VEIL-findSomeone/app/assets/63194662/8f0fd1e5-b64f-4974-8b03-244deb72894b',
      caption: '이상한 남자 4'
    },
    {
      imageUrl: 'https://github.com/VEIL-findSomeone/app/assets/63194662/8f0fd1e5-b64f-4974-8b03-244deb72894b',
      caption: '나쁜남자 5'
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {celebrities.map((celebrity, index) => (
          <Card key={index} imageUrl={celebrity.imageUrl} caption={celebrity.caption} />
        ))}
      </div>
    </div>
  );
};

export default Swipe;
