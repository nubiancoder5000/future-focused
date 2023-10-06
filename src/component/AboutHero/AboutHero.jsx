import React from 'react';
import hero from '../../assets/img/about_us_hero.png'
import mason from '../../assets/img/construction-worker.svg'
import scientist from '../../assets/img/doctor-african-woman-afro.png'
import chef from '../../assets/img/kid-chef.png'
import engineer from '../../assets/img/kid-robotics-engineering.png'
import astronaut from '../../assets/img/boy-laptop.png'

const AboutHero = () => {
    const backgroundImageUrl = require('../../assets/img/about_us_hero.png'); // Replace with the actual path to your image in the assets folder

    const sectionStyle = {
        backgroundImage: `url(${backgroundImageUrl})`, // Use .default to get the URL
      };

  return (
    // used image as background and used bg-contain to retain its aspect ratio
    <div>
      {/* web view */}
      <div className="AboutHero__wrapper relative lg:flex flex-col-reverse hidden justify-center items-center ">
        <div className="aboutHero__image--container">
          <div className='flex justify-between ml-10 w-[100vw] p-0'>
            <img src={mason} className='' alt="construction worker" />
            <img className='kid mt-72 object-contain' src={astronaut} alt=" kid aspiring to be an astronaut" />
            <img className='kid mt-[210px] object-contain' src={chef} alt="kid chef" />
            <img className='kid mt-80 object-contain' src={engineer} alt="kid into robotics" />
            <img src={scientist} alt="kid into robotics" />
            <div className='blue__gradient'/>
          </div>
        </div>
        <div className="AboutHero__content font-canter text-center p-4 rounded-md opacity-8 absolute top-6 text-white">
          <h2 className="AboutHero__subtitle text-5xl underline">Learning More About..</h2>
          <h1 className="AboutHero__title  text-9xl font-semibold underline">Future Focused</h1>
        </div>
      </div>
    
      {/* mobile view */}
      <div className="AboutHero__wrapper--mobile lg:hidden flex flex-col justify-center items-center">
        <img src={hero} alt="about us hero image" />
        <div className="AboutHero__content text-center mt-7 p-4 rounded-md opacity-8 top-[36px]">
          <h2 className="AboutHero__subtitle text-xl underline">Learning More About..</h2>
          <h1 className="AboutHero__title text-3xl font-semibold underline">Future Focused</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
