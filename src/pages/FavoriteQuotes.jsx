import { useState } from "react";
import QuoteCard from "../layouts/QuoteCard";

const FavoriteQuotes = () => {
  const favorite = JSON.parse(localStorage.getItem("fav"));
  return (
    <div className='flex'>{favorite && <QuoteCard quotes={favorite} />}</div>
  );
};

export default FavoriteQuotes;
