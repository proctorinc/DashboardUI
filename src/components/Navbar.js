import Dropdown from './Dropdown'
import { IoStatsChartOutline } from "react-icons/io5";

const Toolbar = () => {
    return (
        <div id="navbar" className="flex w-full sticky top-0 z-50">
            <div className="flex justify-left w-1/6 px-8 pt-5 font-bold text-3xl">
                <div className="bg-lred text-gray flex bg-white justify-center border border-red p-2 rounded-lg">
                <div className="inline-block">
                    <IoStatsChartOutline />
                </div>
                <h1 className="pl-1">Logo</h1>
                </div>
            </div>
            <div className="flex justify-center w-2/3 px-1 py-2">
                <div className="p-1">
                <h1>Welcome, [registered_name=Absalom]</h1>
                </div>
            </div>
            <div className="flex justify-end w-1/6 p-2">
                <Dropdown />
            </div>
        </div>
    );
};

export default Toolbar