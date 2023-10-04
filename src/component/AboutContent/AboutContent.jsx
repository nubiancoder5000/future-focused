import React from 'react'

function AboutContent({heading, imgSrc, paragraph,vidSrc}) {
  return (
  <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
    {/* Image */}
    <div className=" w-full md:w-2/4">
      <img src={imgSrc} alt="img" />
    </div>
    {/* <video className="Hero__video" autoPlay loop muted>
            <source src={vidSrc} type="video/mp4" />
            Your browser isn't compatible to view our awesome video! Try
            logging in on Google Chrome!
          </video> */}
    <div className="w-full md:w-2/4 text-center space-y-2">
        <h1>{heading}</h1>
        <p className=" text-lightText">
            {paragraph}
        </p>
    </div>
  </div>
    
  )
}

export default AboutContent