import React from 'react'

function AboutContent({heading, imgSrc, paragraph,vidSrc}) {
  return (
  <div className="about__content--container  flex flex-wrap bg-[#0463ef] lg:items-center lg:first:mt-24 lg:p-0 p-12 items-center justify-center lg:even:flex-row-reverse lg:even:h-[600px]">
    
    {/* Image or video*/}
    <div className="about__content--image lg:flex-1">
      {/* using a ternary operator to check if the prop passed is an image or a video */}
      {
        imgSrc ? (<img className='lg:w-[100%] lg:h-[500px] object-contain' src={imgSrc} alt="img" />) : (
          <video className="lg:w-[1200px] lg:h-[600px] object-contain" autoPlay loop muted>
          <source src={vidSrc} type="video/mp4" />
            Your browser isn't compatible to view our awesome video! Try
            logging in on Google Chrome!
          </video>
        )
      }
    </div>

    {/* heading and paragraph */}
    <div className="lg:w-1/2 flex flex-col  px-6 justify-center md:w-2/4 text-center">
        <h1 className='about__content--header  lg:text-7xl font-canter lg:mb-12 text-2xl font-bold mb-5 lg:ml-12 uppercase underline'>{heading}</h1>
        <p className="about__content--paragraph   font-light lg:ml-12 lg:text-2xl lg:leading-10 leading-8 text-lg">
            {paragraph}
        </p>
    </div>
  </div>
    
  )
}

export default AboutContent