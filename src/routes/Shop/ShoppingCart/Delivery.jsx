import { FaCheck } from "react-icons/fa6";
import { box_logo as box_logo, speedy_logo } from "../../../assets";
import { econt_logo } from "../../../assets";
import { dhl_logo } from "../../../assets";
import { act, useEffect, useState } from "react";

export default function Delivery({ className, updateDelivery }) {
  const [active, setActive] = useState("collect");

  useEffect(() => {
    switch (active) {
      case "speedy":
        updateDelivery(5.25);
        break;
      case "econt":
        updateDelivery(7.25);
        break;
      case "dhl":
        updateDelivery(5.5);
        break;

      default:
        updateDelivery(0);
        break;
    }
  }, [active]);

  return (
    <div className={className}>
      <span className="block mb-5 font-medium text-2xl">Delivery</span>
      <div className="gap-x-12 gap-y-5 grid grid-cols-1 lg:grid-cols-2 rounded-xl">
        <div
          className="items-center grid grid-cols-[1fr_20fr] w-full"
          onClick={() => setActive("speedy")}
        >
          <div
            className={`${
              active === "speedy"
                ? "border-sky-500 bg-sky-200"
                : "border-slate-300"
            } flex justify-center items-center border-2 mr-3 rounded-full w-6 h-6`}
          >
            {active === "speedy" && <FaCheck className="text-sky-500" />}
          </div>
          <div
            className={`${
              active === "speedy" ? "ring-opacity-100" : ""
            } box-border items-center ring-2 ring-sky-500 ring-opacity-0 grid grid-cols-[2fr_3fr_1fr] bg-white shadow-md p-6 rounded-xl`}
          >
            <img
              src={speedy_logo}
              alt="speedy_logo"
              className="w-20 h-20 object-contain"
            />
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">Speedy</p>
              <p className="font-medium text-gray-400 text-sm">
                Expected delivery:
              </p>
              <p className="font-medium text-gray-400 text-sm">Friday, 28</p>
            </div>
            <p className="font-bold">$5.25</p>
          </div>
        </div>

        <div
          className="items-center grid grid-cols-[1fr_20fr] w-full"
          onClick={() => setActive("econt")}
        >
          <div
            className={`${
              active === "econt"
                ? "border-sky-500 bg-sky-200"
                : "border-slate-300"
            } flex justify-center items-center border-2 mr-3 rounded-full w-6 h-6`}
          >
            {active === "econt" && <FaCheck className="text-sky-500" />}
          </div>
          <div
            className={`${
              active === "econt" ? "ring-opacity-100" : ""
            } box-border items-center ring-2 ring-sky-500 ring-opacity-0 grid grid-cols-[2fr_3fr_1fr] bg-white shadow-md p-6 rounded-xl`}
          >
            <img
              src={econt_logo}
              alt="econt_logo"
              className="w-20 h-20 object-contain"
            />
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">Econt</p>
              <p className="font-medium text-gray-400 text-sm">
                Expected delivery:
              </p>
              <p className="font-medium text-gray-400 text-sm">Friday, 28</p>
            </div>
            <p className="font-bold">$7.25</p>
          </div>
        </div>

        <div
          className="items-center grid grid-cols-[1fr_20fr] w-full"
          onClick={() => setActive("dhl")}
        >
          <div
            className={`${
              active === "dhl"
                ? "border-sky-500 bg-sky-200"
                : "border-slate-300"
            } flex justify-center items-center border-2 mr-3 rounded-full w-6 h-6`}
          >
            {active === "dhl" && <FaCheck className="text-sky-500" />}
          </div>
          <div
            className={`${
              active === "dhl" ? "ring-opacity-100" : ""
            } box-border items-center ring-2 ring-sky-500 ring-opacity-0 grid grid-cols-[2fr_3fr_1fr] bg-white shadow-md p-6 rounded-xl`}
          >
            <img
              src={dhl_logo}
              alt="dhl_logo"
              className="w-20 h-20 object-contain"
            />
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">DHL</p>
              <p className="font-medium text-gray-400 text-sm">
                Expected delivery:
              </p>
              <p className="font-medium text-gray-400 text-sm">Friday, 28</p>
            </div>
            <p className="font-bold">$5.50</p>
          </div>
        </div>

        <div
          className="items-center grid grid-cols-[1fr_20fr] w-full"
          onClick={() => setActive("collect")}
        >
          <div
            className={`${
              active === "collect"
                ? "border-sky-500 bg-sky-200"
                : "border-slate-300"
            } flex justify-center items-center border-2 mr-3 rounded-full w-6 h-6`}
          >
            {active === "collect" && <FaCheck className="text-sky-500" />}
          </div>
          <div
            className={`${
              active === "collect" ? "ring-opacity-100" : ""
            } box-border items-center ring-2 ring-sky-500 ring-opacity-0 grid grid-cols-[2fr_3fr_1fr] bg-white shadow-md p-6 rounded-xl`}
          >
            <img
              src={box_logo}
              alt="box_logo"
              className="w-20 h-20 object-contain"
            />
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">Collect in person</p>
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
