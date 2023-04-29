import { MdFavoriteBorder } from "react-icons/md";

const SkeletonCard = () => {
  return (
    <div className='shadow-xl rounded-3xl border-t-2 m-5 p-5 grow flex flex-col justify-between '>
      <div className='animate-pulse'>
        <div className='w-full shadow-2xl h-3 bg-slate-400 rounded-3xl'></div>
        <div className='divider'></div>
        <div className='space-y-3'>
          <div className='w-full shadow-2xl h-3 bg-slate-400 rounded-3xl'></div>
          <div className='w-full shadow-2xl h-3 bg-slate-400 rounded-3xl'></div>
          <div className='w-1/2 shadow-2xl h-3 bg-slate-400 rounded-3xl'></div>

          <div className='divider'></div>
          <div className='flex justify-between'>
            <div className='space-x-2'>
              <div className='badge bg-slate-400 border-none h-6 w-16'></div>
              <div className='badge bg-slate-400 border-none h-6 w-16'></div>
            </div>
            <div>
              <MdFavoriteBorder size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
