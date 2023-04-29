import { useContext } from "react";

import QuoteContext from "../component/context/QuoteContext";

const NavSearch = () => {
  const { searchQuery, setSearchQuery } = useContext(QuoteContext);

  return (
    <div className='form-control w-fit lg:w-96'>
      <input
        type='search'
        placeholder='Search'
        value={searchQuery}
        className='input input-bordered font-medium'
        onChange={(e) => setSearchQuery(e.target.value)}
        //autoFocus
      />
    </div>
  );
};

export default NavSearch;
