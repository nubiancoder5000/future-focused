import React from 'react'

const CareerQuizNavbar = () => {
  return (
    <div>
        <nav className="CareerQuiz__navbar--main"> 
            <a className="CareerQuiz__navbar--item" href="../pages/careerQuiz/CareerQuiz.jsx">Career Quiz </a>
            <a className="CareerQuiz__navbar--item" href="../pages/careerTypes/careerTypes.jsx">Career Types</a>
            <a className="CareerQuiz__navbar--item" href="../pages/careerList/CareerList.jsx">Careers</a>
            <a className="CareerQuiz__navbar--item" href="../pages/careerPrep/CareerPrep.jsx">Careeer Prep</a>
        </nav>
    </div>
  )
}

export default CareerQuizNavbar