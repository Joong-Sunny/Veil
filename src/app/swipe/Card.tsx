import React from 'react';
import Image from "next/image";

type InstagramCardProps = {
  imageUrl: string;
  caption: string;
}

const Card = ({imageUrl, caption}: InstagramCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        src={imageUrl}
        alt="celebrity"
        width={350}
        height={350}
        priority
      />
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">
          {caption}
        </p>
      </div>
      <div className="flex flex-row justify-between">
        <button>
          <Image
            src="/like.svg"
            alt="like"
            width={40}
            height={40}
            priority
          />
        </button>
        <button>
          <Image
            src="/message.svg"
            alt="message"
            width={40}
            height={40}
            priority
          />
        </button>
      </div>
    </div>
  );
};

export default Card;