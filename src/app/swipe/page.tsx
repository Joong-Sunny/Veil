'use client';
import React, {useState} from 'react';
import {swipeableDummyUsers} from "@/app/swipe/dummy-user-info";
import TinderCard from "@/app/swipe/TinderCard";

const Swipe = () => {
  const [users, setUsers] = useState(swipeableDummyUsers);

  const handleSwipe = (id: number, direction: ('left' | 'right')) => {
    console.log(`Swiped ${direction} on user with id: ${id}`);
    // Remove the swiped user from the stack
    setUsers(currentUsers => currentUsers.filter(user => user.id !== id));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {users.map((user, index) => (
        <div
          key={user.id}
          className="absolute"
          style={{
            transform: `translateY(-${index * 4}px) scale(${1 - index * 0.05})`,
            zIndex: users.length - index,
          }}
        >
          <TinderCard
            name={user.name}
            age={user.age}
            imgUrl={user.mainImgUrl}
            onSwipe={(direction) => handleSwipe(user.id, direction)}
          />
        </div>
      ))}
    </div>
  );
};

export default Swipe;