import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { debounce } from "lodash";

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

  const handleSearch = () => {
    if (searchQuery.length >= 3 && searchQuery.trim() !== "") {
      setPages(1);
      setAllQuotes([]);
      getSearchedQuotes();
    } else {
      setPages(1);
      setAllQuotes([]);
      getAllQuotes();
    }
  };

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => {
      clearTimeout(delayedSearch);
    };
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.length > 2 && searchQuery.trim() !== "") {
      getSearchedQuotes();
    } else {
      getAllQuotes();
    }
  }, [pages]);

  return (
    <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
  );
};

export default QuoteContext;
