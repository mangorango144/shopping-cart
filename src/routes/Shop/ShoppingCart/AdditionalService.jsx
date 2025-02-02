export default function AdditionalService({ className, updateServices }) {
  const services = {
    care_package: 10,
    environment_friendly: 2,
    golden_guard: 5,
  };

  const handleChange = (e) => {
    updateServices((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked ? services[e.target.name] : 0,
    }));
  };

  return (
    <div className={className}>
      <span className="block mb-5 font-medium text-2xl">
        Additional Service
      </span>
      <div className="gap-4 grid grid-cols-1">
        <div className="items-center grid grid-cols-[6fr_1fr_1fr] bg-white shadow-md p-4 rounded-xl">
          <div className="grid grid-cols-1">
            <p className="font-bold">Care+ Package</p>
            <p className="font-medium text-gray-400 text-sm">
              One year of additional care
            </p>
          </div>
          <p className="font-bold">$10</p>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="care_package"
              onChange={handleChange}
              className="hidden peer"
            />
            <span className="bg-stone-200 peer-checked:bg-blue-200 rounded-full w-8 h-4"></span>
            <span className="bg-white peer-checked:bg-blue-500 -ml-7 rounded-full w-3 h-3 transform transition peer-checked:translate-x-3"></span>
          </label>
        </div>

        <div className="items-center grid grid-cols-[6fr_1fr_1fr] bg-white shadow-md p-4 rounded-xl">
          <div className="grid grid-cols-1">
            <p className="font-bold">Environment friendly</p>
            <p className="font-medium text-gray-400 text-sm">
              Add some tip for earth care
            </p>
          </div>
          <p className="font-bold">$2</p>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="environment_friendly"
              onChange={handleChange}
              className="hidden peer"
            />
            <span className="bg-stone-200 peer-checked:bg-blue-200 rounded-full w-8 h-4"></span>
            <span className="bg-white peer-checked:bg-blue-500 -ml-7 rounded-full w-3 h-3 transform transition peer-checked:translate-x-3"></span>
          </label>
        </div>

        <div className="items-center grid grid-cols-[6fr_1fr_1fr] bg-white shadow-md p-4 rounded-xl">
          <div className="grid grid-cols-1">
            <p className="font-bold">Golden Guard</p>
            <p className="font-medium text-gray-400 text-sm">
              30 days more for return
            </p>
          </div>
          <p className="font-bold">$5</p>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="golden_guard"
              onChange={handleChange}
              className="hidden peer"
            />
            <span className="bg-stone-200 peer-checked:bg-blue-200 rounded-full w-8 h-4"></span>
            <span className="bg-white peer-checked:bg-blue-500 -ml-7 rounded-full w-3 h-3 transform transition peer-checked:translate-x-3"></span>
          </label>
        </div>
      </div>
    </div>
  );
}
