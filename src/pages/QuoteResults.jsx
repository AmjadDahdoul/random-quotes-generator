import { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import QuoteContext from "../component/context/QuoteContext";
import QuoteCard from "../layouts/QuoteCard";
import SkeletonCard from "../layouts/SkeletonCard";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";

const QuoteResults = () => {
  const { allQuotes, setPages, hasMore } = useContext(QuoteContext);

  return (
    <InfiniteScroll
      dataLength={allQuotes.length}
      next={() => setPages((prev) => prev + 1)}
      hasMore={hasMore}
      loader={
        <div className='lg:flex'>
          <SkeletonCard />
          <SkeletonCard />
        </div>
      }
      endMessage={
        <p style={{ textAlign: "center" }}>
          {allQuotes.length === 0 ? (
            <b>There are no search results.</b>
          ) : (
            <b>You have seen it all</b>
          )}
        </p>
      }
    >
      <ScrollToTop
        smooth
        style={{
          backgroundColor: "transparent",
          border: "1px solid",
          boxShadow: "none",
        }}
        component={<FaArrowUp size={"100%"} />}
      />

      <div className='lg:flex lg:flex-wrap lg:justify-evenly'>
        {allQuotes.map((result, index) => (
          <QuoteCard quotes={result} key={index} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default QuoteResults;
