import { HiChartBar, HiHome, HiCalculator } from "react-icons/hi";
import { BsFillGearFill, BsFillFileEarmarkBarGraphFill, BsPlusCircle } from "react-icons/bs";
import { MdSavings, MdOutlineAttachMoney, MdAddChart } from "react-icons/md";
import { AiFillPieChart, AiOutlineAreaChart, AiOutlineUser, AiOutlineRight, AiFillFund, AiOutlinePlusCircle } from "react-icons/ai";
import { Link, BrowserRouter } from "react-router-dom"
import { GiPayMoney } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { IoStatsChartOutline } from "react-icons/io5";

const Toolbar = () => {
    return (
        <div id="sidebar" className="flex fixed inset-y-0 overflow-x-hidden overflow-y-auto bg-mgray text-center h-full w-48 border-x border-lgray">
            {/* <div className="">
            <div className="border-b border-lgray px-2 py-4">
                <div class="bg-white w-12 border border-lgray rounded-full p-2 hover:text-gray hover:bg-lgray">
                <HiChartBar className="text-3xl" />
                </div>
                <h1 className="px-2 text-xl">Savings Tracker</h1>
            </div>
            </div> */}
            <div className="flex justify-center w-full h-full overflow-auto text-left">
            <div className="m-auto pb-10">
                <div className="p-2">
                <h1 className="p-2">My Dashboards</h1>
                <div className="py-4 border-t border-lgray">
                    <div className="rounded-lg p-1 pl-5 pr-1 bg-lgray text-gray">
                    <div className="inline-block">
                        <HiHome />
                    </div>
                    <Link to="/react" className="px-2">Home</Link>
                    </div>
                    <div className="rounded-lg p-1 pl-5 pr-1 hover:bg-lgray hover:text-gray">
                    <MdSavings className="inline-block" />
                    <Link to="/react" className="px-2">Savings</Link>
                    </div>
                    <div className="rounded-lg p-1 pl-5 pr-1 hover:bg-lgray hover:text-gray">
                    <AiFillFund className="inline-block" />
                    <Link to="/react" className="px-2">Funds</Link>
                    </div>
                    <div className="rounded-lg p-1 pl-5 pr-1 hover:bg-lgray hover:text-gray">
                    <MdOutlineAttachMoney className="inline-block" />
                    <Link to="/react" className="px-2">Allowances</Link>
                    </div>
                    <div className="rounded-lg p-1 pl-5 pr-1 hover:bg-lgray hover:text-gray">
                    <AiFillPieChart className="inline-block" />
                    <Link to="/react" className="px-2">Budget</Link>
                    </div>
                    <div className="rounded-lg p-1 pl-5 pr-1 hover:bg-lgray hover:text-gray">
                    <HiCalculator className="inline-block" />
                    <Link to="/react" className="px-2">Calculations</Link>
                    </div>
                    <div className="rounded-lg p-1 pl-5 pr-1 hover:bg-lgray hover:text-gray">
                    <AiOutlinePlusCircle className="inline-block" />
                    <Link to="/react" className="px-2">New Dashboard</Link>
                    </div>
                </div>
                </div>
                <div className="inline-block p-2">
                <h1 className="p-2">Create</h1>
                <div className="py-4 border-t border-lgray">
                    <div className="rounded-lg p-1 pl-5 pr-1 hover:bg-lgray hover:text-gray">
                    <div className="inline-block">
                        <AiFillFund />
                    </div>
                    <Link to="/react" className="px-2">New Fund</Link>
                    </div>
                    <div className="rounded-lg p-1 pl-5 pr-1 hover:bg-lgray hover:text-gray">
                    <div className="inline-block">
                        <MdAddChart />
                    </div>
                    <Link to="/react" className="px-2">New Chart</Link>
                    </div>
                    <div className="rounded-lg p-1 pl-5 pr-1 hover:bg-lgray hover:text-gray">
                    <div className="inline-block">
                        <HiCalculator />
                    </div>
                    <Link to="/react" className="px-2">New Calculation</Link>
                    </div>
                </div>
                </div>
                <div className="inline-block p-2">
                <h1 className="p-2">Detail</h1>
                <div className="py-4 border-t border-lgray">
                    <div className="rounded-lg p-1 pl-5 pr-1 hover:bg-lgray hover:text-gray">
                    <div className="inline-block">
                        <AiFillFund />
                    </div>
                    <Link to="/react" className="px-2">All Funds</Link>
                    </div>
                    <div className="rounded-lg p-1 pl-5 pr-1 hover:bg-lgray hover:text-gray">
                    <div className="inline-block">
                        <GiPayMoney />
                    </div>
                    <Link to="/react" className="px-2">All Transactions</Link>
                    </div>
                </div>
                </div>
            </div>
            <div className="fixed bg-mgray absolute w-full bottom-0 border-t border-lgray">
                <div className="border-r border-lgray w-12 px-4 py-3 hover:bg-lgray hover:text-gray">
                <div className="inline-block">
                    <BsFillGearFill />
                </div>
                <Link to="/react" className="hidden px-2">Settings</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Toolbar