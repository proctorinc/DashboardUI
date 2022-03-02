import React from "react";
import Navbar from './components/Navbar'
import Toolbar from './components/Toolbar'
import './index.css'
import { HiChartBar, HiHome, HiCalculator } from "react-icons/hi";
import { BsFillGearFill, BsFillFileEarmarkBarGraphFill, BsPlusCircle } from "react-icons/bs";
import { MdSavings, MdOutlineAttachMoney, MdAddChart } from "react-icons/md";
import { AiFillPieChart, AiOutlineAreaChart, AiOutlineUser, AiOutlineRight, AiFillFund, AiOutlinePlusCircle } from "react-icons/ai";
import { Link, BrowserRouter } from "react-router-dom"
import { GiPayMoney } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { IoStatsChartOutline } from "react-icons/io5";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Toolbar />
      <div id="dashboard" className="px-10 pb-5 ml-48 overflow-y-auto">
        <div className="text-sm w-full">
          <h1 className="inline-block pb-5">Dashboards</h1>
          <div className="inline-block text-xs px-3">
            <AiOutlineRight />
          </div>
          <div className="inline-block">
            <HiHome />
          </div>
          <h1 className="inline-block px-1 pb-5">Home</h1>
        </div>
        <div className="flex flex-wrap gap-5 w-full">
          <div className="bg-white text-center w-64 h-48 border-2 border border-lgray rounded-lg hover:shadow-md">
            <div className="border-b border-lgray p-2">
              <h1>Standard Card</h1>
            </div>
            <div className="p-4">
              <p>This is the body of the card</p>
            </div>
          </div>
          <div className="bg-mgray text-center w-64 h-48 border-2 border border-lgray rounded-lg hover:shadow-md">
            <div className="border-b border-lgray p-2">
              <h1>Dark Card</h1>
            </div>
            <div className="p-4">
              <p>This is the body of the card</p>
            </div>
          </div>
          <div className="relative bg-white text-center w-64 h-48 border-2 border border-lgray rounded-lg overflow-auto">
            <div className="border-b border-lgray p-2">
              <h1>Footer Card</h1>
            </div>
            <div className="p-4">
              <p>This is the body of the card</p>
              {/* <p>This is the body of the card</p>
              <p>This is the body of the card</p>
              <p>This is the body of the card</p>
              <p>This is the body of the card</p>
              <p>This is the body of the card</p>
              <p>This is the body of the card</p>
              <p>This is the body of the card</p> */}
            </div>
            <div className="fixed bg-white absolute w-full bottom-0 border-t border-lgray">
              <div className="border-r border-lgray p-4 w-12 hover:bg-mgray hover:text-gray">
                <BsFillGearFill />
              </div>
            </div>
          </div>
          <div className="bg-white text-center w-64 h-48 border-2 border border-lgray rounded-lg hover:shadow-md">
            <div className="bg-mgray border-b border-lgray p-2">
              <h1>Dark Header Card</h1>
            </div>
            <div className="p-4">
              <p>This is the body of the card</p>
            </div>
          </div>
          {/* <div className="bg-lblue text-center w-64 h-48 border-2 border border-blue rounded-lg hover:shadow-md hover:shadow-blue">
            <div className="border-b border-blue p-4">
              <h1>Blue Card</h1>
            </div>
            <div className="p-4">
              <p>This is the body of the card</p>
            </div>
          </div>
          <div className="bg-lred text-center w-64 h-48 border-2 border border-red rounded-lg hover:shadow-md hover:shadow-red">
            <div className="border-b border-red p-4">
              <h1>Red Card</h1>
            </div>
            <div className="p-4">
              <p>This is the body of the card</p>
            </div>
          </div>
          <div className="bg-lorange text-center w-64 h-48 border-2 border border-orange rounded-lg hover:shadow-md hover:shadow-orange">
            <div className="border-b border-orange p-4">
              <h1>Orange Card</h1>
            </div>
            <div className="p-4">
              <p>This is the body of the card</p>
            </div>
          </div> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
