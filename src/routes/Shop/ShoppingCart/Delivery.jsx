import { FaCheck } from "react-icons/fa6";
import { box_logo as box_logo, speedy_logo } from "../../../assets";
import { econt_logo } from "../../../assets";
import { dhl_logo } from "../../../assets";

export default function Delivery({ className }) {
  return (
    <div className={className}>
      <span className="block mb-5 font-medium text-2xl">Delivery</span>
      <div className="gap-x-12 gap-y-5 grid grid-cols-1 lg:grid-cols-2 rounded-xl">
        <div className="items-center grid grid-cols-[1fr_20fr] w-full">
          <div className="flex justify-center items-center border-2 border-sky-500 bg-sky-200 mr-3 rounded-full w-6 h-6">
            <FaCheck className="text-sky-500" />
          </div>
          <div className="items-center border-2 border-sky-500 grid grid-cols-[2fr_3fr_1fr] bg-white shadow-md p-6 rounded-xl">
            <img
              src={speedy_logo}
              alt="speedy_logo"
              className="w-20 h-auto object-contain"
            />
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">Title</p>
              <p className="font-medium text-gray-400 text-sm">
                Expected delivery:
              </p>
              <p className="font-medium text-gray-400 text-sm">Friday, 28</p>
            </div>
            <p className="font-bold">$5.25</p>
          </div>
        </div>

        <div className="items-center grid grid-cols-[1fr_20fr] w-full">
          <div className="flex justify-center items-center border-2 border-slate-300 mr-3 rounded-full w-6 h-6"></div>
          <div className="items-center grid grid-cols-[2fr_3fr_1fr] bg-white shadow-md p-6 rounded-xl">
            <img
              src={econt_logo}
              alt="speedy_logo"
              className="w-20 h-auto object-contain"
            />
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">Title</p>
              <p className="font-medium text-gray-400 text-sm">
                Expected delivery:
              </p>
              <p className="font-medium text-gray-400 text-sm">Friday, 28</p>
            </div>
            <p className="font-bold">$5.25</p>
          </div>
        </div>

        <div className="items-center grid grid-cols-[1fr_20fr] w-full">
          <div className="flex justify-center items-center border-2 border-slate-300 mr-3 rounded-full w-6 h-6"></div>
          <div className="items-center grid grid-cols-[2fr_3fr_1fr] bg-white shadow-md p-6 rounded-xl">
            <img
              src={dhl_logo}
              alt="speedy_logo"
              className="w-20 h-auto object-contain"
            />
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">Title</p>
              <p className="font-medium text-gray-400 text-sm">
                Expected delivery:
              </p>
              <p className="font-medium text-gray-400 text-sm">Friday, 28</p>
            </div>
            <p className="font-bold">$5.25</p>
          </div>
        </div>

        <div className="items-center grid grid-cols-[1fr_20fr] w-full">
          <div className="flex justify-center items-center border-2 border-slate-300 mr-3 rounded-full w-6 h-6"></div>
          <div className="items-center grid grid-cols-[2fr_3fr_1fr] bg-white shadow-md p-6 rounded-xl">
            <img
              src={box_logo}
              alt="speedy_logo"
              className="w-20 h-auto object-contain"
            />
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">Title</p>
              <p className="font-medium text-gray-400 text-sm">
                Expected delivery:
              </p>
              <p className="font-medium text-gray-400 text-sm">Friday, 28</p>
            </div>
            <p className="font-bold">Free</p>
          </div>
        </div>
      </div>
    </div>
  );
}
