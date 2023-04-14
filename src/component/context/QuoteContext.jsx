import { useState, createContext, useEffect } from "react";
import axios from "axios";

const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLimit, setSearchLimit] = useState(10);
  const [pages, setPages] = useState(1);
  const [searchResults, setSearchResults] = useState([]);

  const value = {
    searchQuery,
    setSearchQuery,
    searchLimit,
    setSearchLimit,
    pages,
    setPages,
    searchResults,
    setSearchResults,
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
        setSearchResults(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (searchQuery.length < 1 && searchQuery.trim() === "") return;
    getSearchedQuotes();
  }, [searchQuery]);

  return (
    <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
  );
};

export default QuoteContext;
