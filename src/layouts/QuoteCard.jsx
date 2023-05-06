import { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import {
  addToFavorite,
  checkFavorite,
  removeFromFavorite,
} from "../component/Helpers/FavoriteManager";

const QuoteCard = ({ quotes }) => {
  const [isFavorite, setIsFavorite] = useState(checkFavorite(quotes));
  const tags = [...quotes.tags];

  const handleFavorite = (quotes) => {
    if (isFavorite) {
      removeFromFavorite(quotes);
    } else {
      addToFavorite(quotes);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='shadow-xl rounded-3xl border-t-2 m-5 text-center p-5 grow lg:w-1/3 flex flex-col justify-between'>
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
            <button onClick={() => handleFavorite(quotes)}>
              {isFavorite ? (
                <MdFavorite
                  size={30}
                  color='#DC4731'
                  className='shadow-2xl shadow-red-700'
                />
              ) : (
                <MdFavoriteBorder size={30} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
