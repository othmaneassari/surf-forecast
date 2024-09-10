import React from "react";
import Topbar from "../Topbar/Topbar";
import "../../Styles/HomePage.css";
import "../../App.css";
import video from "../../assets/icon/video.mp4";
import bgone from "../../assets/icon/bgone.jpg";
import right from "../../assets/icon/right.svg";
import left from "../../assets/icon/left.svg";

function HomePage() {
  return (
    <div>
      <Topbar />
      <div className="backgroundimage">
        <div className="flex flex-col justify-start items-end">
          <video
            className="w-[850px] h-[500px] absolute top-[130px] left-[75px] rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="flex items-center justify-between w-full">
            <p className="absolute bottom-[20px] left-[75px] text-white text-[36px]">
              View live surf reports and forecast
            </p>
            <div className="flex space-x-4">
              <button className="rounded-full items-center justify-center h-10 w-10">
                <img src={left} alt=""></img>
              </button>
              <button className="rounded-full items-center justify-center h-10 w-10">
                <img src={right} alt=""></img>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-[200px] right-[100px] flex flex-col justify-center items-center space-y-4">
          <h1 className="text-white text-right">The Best Surfing,</h1>
          <h1 className="text-white text-right">One Click Away</h1>
          <button className="get-started-btn">
            <p className="text-white font-bold">Get Started</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
