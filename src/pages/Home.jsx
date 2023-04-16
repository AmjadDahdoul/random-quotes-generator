import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className='flex justify-center gap-5 text-center font-bold text-xl m-10'>
      <NavLink to='/' className='w-screen'>
        <div className='rounded-lg shadow-lg p-5 '>Random Quotes</div>
      </NavLink>
      <div className='divider divider-horizontal'></div>
      <NavLink to='quotes' className='w-screen'>
        <div className='rounded-lg shadow-lg p-5 '>Quotes</div>
      </NavLink>
    </div>
  );
};

export default Home;
