import React from "react";
import AboutContent from "../../component/AboutContent/AboutContent";
import AboutHero from "../../component/AboutHero/AboutHero";
import teensImage from '../../assets/img/teens.png'
import careerQuizButton from "../../assets/icons/careerQuizButton.svg";
import { Link } from "react-router-dom";
import founder from '../../assets/img/founder.png'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <AboutContent 
      paragraph="At Future Focused,
      we believe that every young person deserves the opportunity to discover a career that aligns with their passions, talents, and aspirations."
      imgSrc={teensImage}
      />

      <div className="flex mx-5 gap-x-5">
        <p>
          Our mission is to empower the next generation to make informed decisions about their future by providing them with the tools and knowledge they need to thrive in the ever-evolving world of work.
        </p>
        <Link to="/career-quiz">
          <img
          className="header__navbar--careerQuizButton"
          src={careerQuizButton}
          alt="Quiz Button"
          />
        </Link>
      </div>
      <AboutContent
      paragraph="The Future Focused Web App was founded by Shantel Nubian, a dedicated STEAM Educator with over a decade of experience in inspiring and equipping young minds with the skills and knowledge they need to excel in today's technology-driven world. 
      Ms. Nubian's journey began with a profound passion for teaching and a vision to bridge the gap between education and industry. With a background in coding robots, websites, and video games, Ms. Nubian has honed her expertise to create innovative learning experiences that captivate and empower young learners."

      heading="Meet the Founder"
      imgSrc={founder}
      />
      <p>
        As a visionary in the field of education, Ms. Nubian understands the importance of guiding young people towards fulfilling careers that not only utilize their unique talents but also align with their personal values and interests. 
      </p>
      {/* <AboutContent
        paragraph="This passion and commitment led her to develop Future Focused, where her extensive experience synergizes technology and the psychology of the RAISEC Occupational Theory."
        imgSrc=
      /> */}
      <AboutContent
      heading="Our Approach"
      paragraph="The Future Focused Career Quiz, focuses on using the RAISEC Occupational Theory to help young individuals identify career paths that resonate with their individuality. RAISEC, which stands for Realistic, Artistic, Investigative, Social, Enterprising, and Conventional, provides a comprehensive framework to match personal preferences with career options. This scientifically-proven approach ensures that our users gain valuable insights into the careers that are most likely to bring them joy, success, and fulfillment."
      // imgSrc={}
      />

      
    </div>
    

  )
};

export default About;
