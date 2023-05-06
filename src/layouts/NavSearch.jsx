import { useContext } from "react";

import QuoteContext from "../component/context/QuoteContext";

const NavSearch = () => {
  const { searchQuery, setSearchQuery } = useContext(QuoteContext);

  return (
    <div className='form-control'>
      <input
        type='search'
        placeholder='Search'
        value={searchQuery}
        className='input input-bordered font-medium'
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default NavSearch;
