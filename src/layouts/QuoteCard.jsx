import { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const QuoteCard = ({ quotes }) => {
  const tags = [...quotes.tags];
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = (e) => {
    setIsFavorite(!isFavorite);
    localStorage.setItem("fav", JSON.stringify(quotes));
  };
  return (
    <div className='shadow-xl rounded-3xl border-t-2 m-5 text-center p-5 grow lg:w-1/3 flex flex-col justify-between t'>
      <div>
        <h2 className='text-2xl font-serif p-2'>~{quotes.author}</h2>
        <div className='divider'></div>
      </div>
      <div>
        <p className='font-mono p-2'>{quotes.content}</p>
      </div>
      <div>
        <div className='divider'></div>
        <div className='flex items-center justify-between'>
          <div className='justify-items-end'>
            {tags.map((tag, index) => (
              <div
                className='badge badge-primary badge-lg m-1 p-3 font-semibold'
                key={index}
              >
                {tag}
              </div>
            ))}
          </div>

          <div className='self-end'>
            <button onClick={handleFavorite}>
              {!isFavorite ? (
                <MdFavoriteBorder size={30} />
              ) : (
                <MdFavorite
                  size={30}
                  color='red'
                  className='shadow-2xl shadow-red-700'
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
