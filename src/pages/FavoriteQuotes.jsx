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
    clearFavorite();
    setFavorite([]);
  };

  return (
    <div>
      {favorite && favorite.length > 0 ? (
        <div>
          <div className='text-center space-y-5'>
            <label htmlFor='my-modal' className='btn btn-primary'>
              Clear
            </label>
            <input type='checkbox' id='my-modal' className='modal-toggle' />
            <div className='modal modal-bottom sm:modal-middle'>
              <div className='modal-box'>
                <label
                  htmlFor='my-modal'
                  className='btn btn-sm btn-circle absolute right-2 top-2'
                >
                  ✕
                </label>

                <h3 className='font-bold text-lg'>Clear All favorite quotes</h3>
                <p className='py-4'>
                  Are you sure you want to clear {favoriteCount} quote(s)?
                </p>
                <div className='modal-action'>
                  <label
                    htmlFor='my-modal'
                    className='btn'
                    onClick={removeFavorite}
                  >
                    yes
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:flex lg:flex-wrap lg:justify-evenly rounded-3xl m-5 gap-3'>
            {favorite.map((quote, index) => (
              <QuoteCard quotes={quote} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <h3 className='text-center text-3xl'>Favorite is empty...</h3>
      )}
    </div>
  );
};

export default FavoriteQuotes;
