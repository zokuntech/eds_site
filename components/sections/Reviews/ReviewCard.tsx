import React from 'react';
import Rating from './Rating';

interface ReviewCardProps {
  rating: number;
  title: string;
  description: string;
  author: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ rating, title, description, author }) => {
  return (
    <article className="flex overflow-hidden flex-col px-10 py-8 bg-zinc-100 min-w-[240px] w-[367px] max-md:px-5">
      <Rating count={rating} />
      <div className="flex flex-col mt-5 max-w-full text-neutral-600 w-[287px]">
        <h3 className="text-xl font-bold leading-tight">{`“${title}”`}</h3>
        <p className="mt-2.5 text-xs leading-4">{description}</p>
      </div>
      <p className="mt-5 text-lg tracking-wider leading-none text-neutral-600">{author}</p>
    </article>
  );
};

export default ReviewCard;