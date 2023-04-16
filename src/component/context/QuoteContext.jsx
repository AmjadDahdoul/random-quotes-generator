import { useState, createContext, useEffect } from "react";
import axios from "axios";

const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLimit, setSearchLimit] = useState(10);
  const [pages, setPages] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [allQuotes, setAllQuotes] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const value = {
    searchQuery,
    setSearchQuery,
    searchLimit,
    setSearchLimit,
    pages,
    setPages,
    searchResults,
    setSearchResults,
    allQuotes,
    setAllQuotes,
    hasMore,
    setHasMore,
  };

  const getSearchedQuotes = () => {
    const url = "https://api.quotable.io/search/quotes";
    axios
      .get(url, {
        params: {
          query: searchQuery,
          limit: searchLimit,
          page: pages,
        },
      })
      .then((res) => {
        const data = res.data.results;
        setAllQuotes((prev) => [...prev, ...data]);
        allQuotes.length !== res.data.totalCount
          ? setHasMore(true)
          : setHasMore(false);
        console.log(hasMore);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllQuotes = () => {
    const url = "https://api.quotable.io/quotes/";
    axios
      .get(url, {
        params: {
          query: searchQuery,
          limit: searchLimit,
          page: pages,
        },
      })
      .then((res) => {
        const data = res.data.results;
        setAllQuotes((prev) => [...prev, ...data]);
        allQuotes.length !== res.data.totalCount
          ? setHasMore(true)
          : setHasMore(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllQuotes();
    // if (searchQuery.length < 1 && searchQuery.trim() === "") return;
    // getSearchedQuotes();
  }, [pages]);

  return (
    <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
  );
};

export default QuoteContext;
