import React from "react";
import logo from "../../assets/icon/logo.png";
import glass from "../../assets/icon/glass.svg";
import "../../Styles/HomePage.css";

function Topbar() {
  return (
    <div>
      <div className="topbar-mrg">
        <div className="flex items-center space-x-12">
          <img src={logo} alt="" className="h-[60px] w-[60px]" />
          <button>
            <p className="ml-[20px] mr-[20px]">Forecast</p>
          </button>
          <button>
            <p className="ml-[20px] mr-[20px]">Travel</p>
          </button>
        </div>
        <div className="bg-gray-200 text-black rounded-full px-4 py-2 w-[850px] flex items-center justify-center">
          <div className="flex items-center justify-center">
            <img src={glass} alt="" className="h-[15px] w-[15px] mr-2" />
            <input
              className="font-light bg-transparent border-none focus:outline-none flex-grow"
              type="search"
              id=""
              placeholder="Search"
            ></input>
          </div>
          {/* <label className="font-light">Search</label> */}
        </div>
        <button className="bg-black text-white rounded-full px-4 py-2 w-[200px] mr-[20px] flex items-center justify-center">
          <p className="text-white font-bold">Start Free Trial</p>
        </button>
      </div>
    </div>
  );
}

export default Topbar;
