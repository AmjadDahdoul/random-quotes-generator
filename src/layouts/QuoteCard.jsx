import { useState } from "react";

const QuoteCard = ({ quotes }) => {
  const tags = [...quotes.tags];
  return (
    <div className='p-5 rounded-3xl shadow-2xl m-5 lg:w-1/3 grow '>
      <h2 className='text-2x font-serif  m-5'>~{quotes.author}</h2>
      <p className='font-mono m-5'>{quotes.content}</p>
      {tags.map((tag, index) => (
        <div className='badge badge-outline mr-2 p-3' key={index}>
          {tag}
        </div>
      ))}
    </div>
  );
};

export default QuoteCard;
