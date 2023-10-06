import React from "react";
import { Link } from "react-router-dom";
import "../about/About.scss";

// imported components
import AboutContent from "../../component/AboutContent/AboutContent";// reusable card component
import AboutHero from "../../component/AboutHero/AboutHero";

// Imported Images
import teensImage from '../../assets/img/teens.png'
import careerQuizButton from "../../assets/icons/careerQuizButton.svg";
import founder from '../../assets/img/founder.png'
import youth from '../../assets/img/youth.jpg'

// Imported Videos
import founderVid from '../../assets/video/founder.mp4'
import approachVid from '../../assets/video/woman-different-careers-reel.mp4'
import spaceVid from '../../assets/video/space-journey.mp4'
import Footer from "../../component/footer/Footer";


const About = () => {
  return (
    <div className="about bg-[#0463ef] text-white overflow-hidden">
      {/* Hero section */}
      <AboutHero/>

      {/* Content section */}
      <section className="about__content">
        {/* mission */}
        <div className="">
          <AboutContent 
          paragraph="At Future Focused,
          we believe that every young person deserves the opportunity to discover a career that aligns with their passions, talents, and aspirations.  Our mission is to empower the next generation to make informed decisions about their future by providing them with the tools and knowledge they need to thrive in the ever-evolving world of work."
          imgSrc={teensImage}
          />
        </div>

        {/* meet the founder */}
        <div className="flex flex-wrap text-center justify-center lg:flex">
          <h1 className="uppercase underline font-canter text-3xl text-center lg:text-7xl">Meet the founder</h1>
          <AboutContent
          paragraph="The Future Focused Web App was founded by Shantel Nubian, a dedicated STEAM Educator with over a decade of experience in inspiring and equipping young minds with the skills and knowledge they need to excel in today's technology-driven world. 
          Ms. Nubian's journey began with a profound passion for teaching and a vision to bridge the gap between education and industry. With a background in coding robots, websites, and video games, Ms. Nubian has honed her expertise to create innovative learning experiences that captivate and empower young learners."
          imgSrc={founder}
  
          />
        </div>
        <AboutContent
          paragraph="As a visionary in the field of education, Ms. Nubian understands the importance of guiding young people towards fulfilling careers that not only utilize their unique talents but also align with their personal values and interests. This passion and commitment led her to develop Future Focused, where her extensive experience synergizes technology and the psychology of the RAISEC Occupational Theory."
          vidSrc={founderVid}
          heading= "continuation. . ."
        />

        {/* the approach */}
        <AboutContent
        heading="Our Approach"
        paragraph="The Future Focused Career Quiz, focuses on using the RAISEC Occupational Theory to help young individuals identify career paths that resonate with their individuality. RAISEC, which stands for Realistic, Artistic, Investigative, Social, Enterprising, and Conventional, provides a comprehensive framework to match personal preferences with career options. This scientifically-proven approach ensures that our users gain valuable insights into the careers that are most likely to bring them joy, success, and fulfillment."
        vidSrc={approachVid}
        />

        {/* principles */}
        <AboutContent
        heading="Our Commitment to Youth"
        paragraph="Empowering Youth: We believe in the power of knowledge and self-discovery. Future Focused is designed to empower young people to take control of their future and make informed career decisions.
        Diversity and Inclusivity: We embrace and celebrate the diversity of talents, backgrounds, and perspectives that make our community unique."
        imgSrc={youth}
        />

        {/* explore different careers - call to action */}
        <AboutContent
          heading="discover your hidden talents"
          paragraph="Dear young people, life is a journey. Are you ready to discover hidden potential and unlock your future career and destiny? 
          Take our Future Focused Career Quiz and learn what it takes to become your best future self.."
          vidSrc={spaceVid}
          />
      </section>    
      <Footer/>  
    </div>
  )
};

export default About;
