import axios from "axios";
import { useEffect, useState } from "react";
import { BiRefresh } from "react-icons/bi";

const RandomQuote = () => {
  const [randomQuote, setRandomQuote] = useState([]);
  const [filterLimit, setFilterLimit] = useState(3);

  const getRandomQuote = () => {
    const url = "https://api.quotable.io/quotes/random";
    axios
      .get(url, {
        params: {
          limit: filterLimit,
        },
      })
      .then((res) => {
        setRandomQuote([...res.data]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRandomQuote();
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
          value={filterLimit}
          onChange={(e) => setFilterLimit(e.target.value)}
        />
        <div className='w-full flex justify-between text-xs px-2'>
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

      <div className='lg:flex lg:flex-row flex-wrap flex flex-col justify-evenly gap-3 pb-5 '>
        {randomQuote.map((quote) => (
          <div
            className='rounded-3xl border shadow-lg lg:basis-1/6 m-5 p-5 grow '
            key={quote._id}
          >
            <p className='font-semibold'>~{quote.author}</p>
            <div className='divider'></div>
            <p className='font-mono'>{quote.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomQuote;
