import { useState } from "react";
import QuoteCard from "../layouts/QuoteCard";
import {
  clearFavorite,
  getFavorite,
} from "../component/Helpers/FavoriteManager";

const FavoriteQuotes = () => {
  const [favorite, setFavorite] = useState(getFavorite().reverse());

  const removeFavorite = () => {
    clearFavorite();
    setFavorite([]);
  };
  console.log(favorite);

  return (
    <div>
      {favorite.length > 0 ? (
        <div className='lg:flex lg:flex-wrap lg:justify-evenly rounded-3xl m-5 gap-3'>
          <button className='btn btn-primary' onClick={removeFavorite}>
            clear
          </button>

          {favorite.map((fav, index) => (
            <QuoteCard quotes={fav} key={index} />
          ))}
        </div>
      ) : (
        <h3 className='text-center text-3xl'>Favorite is empty...</h3>
      )}
    </div>
  );
};

export default FavoriteQuotes;
