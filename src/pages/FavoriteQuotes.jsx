import React, { useState, useEffect } from "react";
import QuoteCard from "../layouts/QuoteCard";
import {
  clearFavorite,
  getFavorite,
} from "../component/Helpers/FavoriteManager";

const FavoriteQuotes = () => {
  const [favorite, setFavorite] = useState(getFavorite());
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    if (favorite) {
      setFavoriteCount(favorite.length);
    }
  }, [favorite]);

  const removeFavorite = () => {
    if (
      window.confirm(
        `After clicking OK, ${favoriteCount} quote(s) will be removed from your favorites. Are you sure?`
      )
    ) {
      clearFavorite();
      setFavorite([]);
    }
  };

  return (
    <div>
      {favorite && favorite.length > 0 ? (
        <div>
          <div className='text-center space-y-5'>
            <button className='btn btn-primary' onClick={removeFavorite}>
              Clear
            </button>
            <p>{favoriteCount} Quote(s) in favorites</p>
          </div>
          <div className='lg:flex lg:flex-wrap lg:justify-evenly rounded-3xl m-5 gap-3'>
            {favorite.map((quote, index) => (
              <QuoteCard quotes={quote} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <h3 className='text-center text-3xl'>Favorites are empty...</h3>
      )}
    </div>
  );
};

export default FavoriteQuotes;
