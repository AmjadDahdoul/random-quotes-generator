import { useContext } from "react";

import QuoteContext from "../component/context/QuoteContext";

const QuoteResults = () => {
  const { searchResults } = useContext(QuoteContext);
  return (
    <div className='lg:flex lg:flex-wrap lg:justify-evenly rounded-3xl m-5 gap-3'>
      {searchResults.map((result) => (
        <div
          key={result._id}
          className='p-5 rounded-3xl shadow-2xl m-5 lg:w-1/3 grow '
        >
          <h2 className='text-2x font-serif  m-5'>~{result.author}</h2>
          <p className='font-mono m-5'>{result.content}</p>
          <div className='badge badge-outline m-5'>{result.tags[0]}</div>
        </div>
      ))}
    </div>
  );
};

export default QuoteResults;
