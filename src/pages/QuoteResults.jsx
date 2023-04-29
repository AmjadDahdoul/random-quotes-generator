import { useContext, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import QuoteContext from "../component/context/QuoteContext";
import QuoteCard from "../layouts/QuoteCard";
import SkeletonCard from "../layouts/SkeletonCard";

const QuoteResults = () => {
  const { searchResults, allQuotes, setPages, hasMore } =
    useContext(QuoteContext);

  return (
    <div className='lg:flex lg:flex-wrap lg:justify-evenly rounded-3xl m-5 gap-3'>
      <InfiniteScroll
        dataLength={allQuotes.length}
        next={() => setPages((prev) => prev + 1)}
        hasMore={hasMore}
        loader={
          <div className='m-5'>
            <SkeletonCard />
          </div>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            {allQuotes.length == 0 ? (
              <b>There are no search results.</b>
            ) : (
              <b>You have seen it all</b>
            )}
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
