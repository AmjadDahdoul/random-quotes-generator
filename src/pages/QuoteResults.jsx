import { useContext, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import QuoteContext from "../component/context/QuoteContext";
import QuoteCard from "../layouts/QuoteCard";
import { checkFavorite } from "../component/Helpers/FavoriteManager";

const QuoteResults = () => {
  const { searchResults, allQuotes, setPages, hasMore } =
    useContext(QuoteContext);

  return (
    <div className='lg:flex lg:flex-wrap lg:justify-evenly rounded-3xl m-5 gap-3'>
      <InfiniteScroll
        dataLength={allQuotes.length}
        next={() => setPages((prev) => prev + 1)}
        hasMore={hasMore}
        loader={<h1 className='text-center py-3'>Loading...</h1>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className='lg:flex lg:flex-wrap lg:justify-evenly rounded-3xl m-5 gap-3'>
          {allQuotes.map((result, index) => (
            <QuoteCard quotes={result} key={index} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default QuoteResults;
