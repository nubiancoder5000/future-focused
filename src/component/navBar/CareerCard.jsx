import React from "react";

const CareerCardData = [
  {
    id: 000,
    name: "Robotics Engineer",
    path: "../../assets/video/roboticsEngineer.mp4",
  },
  {
    id: 001,
    name: "Software Engineer",
    path: "../../assets/video/softwareEngineer.mp4",
  },
  {
    id: 002,
    name: "Doctor",
    path: "../../assets/video/doctor.mp4",
  },
  {
    id: 003,
    name: "Drone Pilot",
    path: "../../assets/video/dronePilot.mp4",
  },

  {
    id: 004,
    name: "Video Game Developer",
    path: "../../assets/video/videoGameDev.mp4",
  },
  {
    id: 005,
    name: "Entreprenuer",
    path: "../../assets/video/businessOwner.mp4",
  },
];
// const CareerCardname = {CareerCardData.name}

const CareerCard = () => {
  return (
    <div>
      <div className="CareerCard__wrapper">
        <video
          className="CareerCard__video"
          alt="careerVideo"
          width="320"
          height="240"
          controls
        >
          <source src={CareerCardData.path} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default CareerCard;
