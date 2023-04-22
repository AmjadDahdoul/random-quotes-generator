import { useState } from "react";
import QuoteCard from "../layouts/QuoteCard";
import {
  clearFavorite,
  getFavorite,
} from "../component/Helpers/FavoriteManager";

const FavoriteQuotes = () => {
  const [favorite, setFavorite] = useState(getFavorite());
  const favoriteCount = favorite.length;

  const removeFavorite = () => {
    if (
      window.confirm(
        `After clicking ok ${favoriteCount} quotes will be removed from your favorite.`
      )
    ) {
      clearFavorite();
      setFavorite([]);
    }
  };

  return (
    <div>
      {favorite !== null && favorite.length > 0 ? (
        <div className='lg:flex lg:flex-wrap lg:justify-evenly rounded-3xl m-5 gap-3'>
          <div className='text-center space-y-5'>
            <button className='btn btn-primary' onClick={removeFavorite}>
              clear
            </button>

            <p>{favoriteCount} Quote(s) in favorite</p>
          </div>

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
