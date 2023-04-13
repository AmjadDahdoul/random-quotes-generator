import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='flex justify-center items-center w-screen h-16 p-3 gap-2 bg-zinc-900'>
      <input
        type='text'
        placeholder='Search'
        className='bg-transparent lg:w-4/6 w-screen h-14 rounded p-3 font-mono text-xl hover:border hover:border-sky-300
        focus:outline-none
        items-center
        '
        id='search'
      />
    </div>
  );
};

export default Navbar;
