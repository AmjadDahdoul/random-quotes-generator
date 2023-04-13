import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Navbar from "./layouts/Navbar";

function App() {
  // const [quote, setQuote] = useState([]);
  // const [text, setText] = useState("");
  // const [pages, setPages] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  // const getQuote = () => {
  //   const url = `https://api.quotable.io/search/quotes`;
  //   axios
  //     .get(url, {
  //       params: {
  //         page: pages,
  //         query: text,
  //       },
  //     })
  //     .then((res) => {
  //       setTotalPages(res.data.totalPages);
  //       setQuote(res.data.results);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   if (!!text) getQuote();
  // }, [pages, text]);

  // const handleChange = (e) => {

  //   setText(e.target.value);
  //   setPages(1);

  // };

  return (
    <div>
      {/* <input onChange={handleChange} value={text} />
      <button
        onClick={() => setPages((prev) => prev - 1)}
        disabled={pages === 1 ? true : false}
      >
        pre
      </button>
      <button>
        {pages}/{totalPages}
      </button>
      <button
        onClick={() => setPages((prev) => prev + 1)}
        disabled={pages === totalPages ? true : false}
      >
        next
      </button>
      {quote.map((item, index) => (
        <h1 key={index}>{item.content}</h1>
      ))} */}
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
