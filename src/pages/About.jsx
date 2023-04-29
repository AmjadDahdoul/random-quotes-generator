import { FaGithub, FaLinkedin } from "react-icons/fa";
const About = () => {
  return (
    <div className='flex flex-col place-content-center text-center'>
      <h1 className='text-6xl mb-4'>Random Quotes Generator</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to browse and generat random quotes
      </p>
      <p className='text-lg'>
        Created by <span className='font-bold text-xl'>Amjad Dahdoul</span>
      </p>
      <div className='flex space-x-5 justify-center m-5'>
        <a target='_blank' href='https://github.com/AmjadDahdoul'>
          <FaGithub size={35} />
        </a>
        <div className='divider divider-horizontal'></div>

        <a target='_blank' href='https://www.linkedin.com/in/amjaddahdoul/'>
          <FaLinkedin size={35} />
        </a>
      </div>
    </div>
  );
};

export default About;
