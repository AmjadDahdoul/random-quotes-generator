import axios from "axios";
import { useEffect, useState } from "react";
import { BiRefresh } from "react-icons/bi";
import QuoteCard from "../layouts/QuoteCard";
import SkeletonCard from "../layouts/SkeletonCard";

const RandomQuote = () => {
  const [randomQuote, setRandomQuote] = useState([]);
  const [filterLimit, setFilterLimit] = useState(
    JSON.parse(localStorage.getItem("displayLimit"))
  );
  const [loading, setLoading] = useState(false);

  const getRandomQuote = () => {
    setLoading(true);
    const url = "https://api.quotable.io/quotes/random";
    axios
      .get(url, {
        params: {
          limit: filterLimit,
        },
      })
      .then((res) => {
        setRandomQuote([...res.data]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    getRandomQuote();
    localStorage.setItem("displayLimit", JSON.stringify(filterLimit));
  }, [filterLimit]);

  return (
    <div className='text-center m-5 rounded-3xl'>
      <div className='m-5'>
        <input
          type='range'
          min='1'
          max='5'
          className='range'
          step='1'
          value={!!filterLimit ? filterLimit : 1}
          onChange={(e) => setFilterLimit(e.target.value)}
        />
        <div className='w-full flex justify-between text-xs px-2 '>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </div>
      <div>
        <button
          className='btn btn-accent shadow-lg my-3 gap-1 '
          onClick={getRandomQuote}
        >
          <BiRefresh size={26} />
        </button>
      </div>
      {loading ? (
        <SkeletonCard />
      ) : (
        <div>
          <div className='lg:flex lg:flex-row flex-wrap flex flex-col justify-evenly gap-3 pb-5 '>
            {randomQuote.map((quote, index) => (
              <QuoteCard quotes={quote} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomQuote;
