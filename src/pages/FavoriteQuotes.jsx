import { useEffect, useState } from "react";
import QuoteCard from "../layouts/QuoteCard";
import { getFavorite } from "../component/Helpers/FavoriteManager";

const FavoriteQuotes = () => {
  const [favorite, setFavorite] = useState(getFavorite());

  return (
    <div className='lg:flex lg:flex-wrap lg:justify-evenly rounded-3xl m-5 gap-3'>
      <button
        className='btn btn-primary'
        onClick={() => setFavorite(localStorage.removeItem("favorite"))}
      >
        clear
      </button>
      {favorite &&
        favorite.map((fav, index) => <QuoteCard quotes={fav} key={index} />)}
    </div>
  );
};

export default FavoriteQuotes;
