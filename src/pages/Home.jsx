import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className='flex m-5 font-bold'>
      <NavLink
        to='/'
        className='grid h-20 w-screen card bg-base-200 rounded-box place-items-center'
      >
        Random Quotes
      </NavLink>
      <div className='divider divider-horizontal'></div>
      <NavLink
        to='quotes'
        className='grid h-20 w-screen card bg-base-200 rounded-box place-items-center'
      >
        Quotes
      </NavLink>
    </div>
  );
};

export default Home;

<div className='flex w-full'>
  <NavLink
    to='/'
    className='grid h-20 flex-grow card bg-base-300 rounded-box place-items-center'
  >
    Random Quotes
  </NavLink>
  <div className='divider divider-horizontal'></div>
  <NavLink
    to='quotes'
    className='grid h-20 flex-grow card bg-base-300 rounded-box place-items-center'
  >
    Quotes
  </NavLink>
</div>;
