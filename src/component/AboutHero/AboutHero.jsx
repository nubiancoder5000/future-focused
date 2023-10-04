import React from 'react';
import hero from '../../assets/img/about_us_hero.png'

const AboutHero = () => {
    const backgroundImageUrl = require('../../assets/img/about_us_hero.png'); // Replace with the actual path to your image in the assets folder

    const sectionStyle = {
        backgroundImage: `url(${backgroundImageUrl})`, // Use .default to get the URL
      };

  return (
    // used image as background and used bg-contain to retain its aspect ratio
    <div className="AboutHero__wrapper relative flex justify-center items-center p-4 mt-[-56px] bg-no-repeat bg-contain h-screen " style={sectionStyle}>
      <div className="AboutHero__content text-center absolute mt-7 p-4 rounded-md opacity-8 top-[36px]">
        <h2 className="AboutHero__subtitle text-4xl underline">Learning More About..</h2>
        <h1 className="AboutHero__title text-[5rem] font-semibold underline">Future Focused</h1>
      </div>
    </div>
  );
};

export default AboutHero;