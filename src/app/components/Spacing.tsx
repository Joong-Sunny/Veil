'use client'

import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: never;
  direction?: 'horizontal' | 'vertical';
  size: number;
}

const Spacing: React.FC<Props> = ({direction = 'vertical', size, ...props}) => {
  const className = `flex-none ${direction === 'horizontal' ? `w-${size} h-auto` : `h-${size} w-auto`}`;

  return <div className={className} {...props}></div>;
};

export default Spacing;
