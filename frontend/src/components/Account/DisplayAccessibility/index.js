import { FaArrowLeft, FaGreaterThan, FaKeyboard, FaMoon } from "react-icons/fa";
import Badge from "../../Badge";

const DisplayAccessibility = ({ onClick }) => {
  return (
    <div className="rounded-xl p-1 space-y-4 -ml-3 absolute top-0 w-full h-full bg-white shadow-xl">
      <div className="flex px-3 py-2 items-center gap-2">
        <Badge
          onClick={onClick}
          className="bg-inherit h-7 w-7 hover:bg-zinc-100 duration-300 transition-colors"
        >
          <FaArrowLeft />
        </Badge>
        <h1 className="font-bold text-[18px]">Display And Accessibility</h1>
      </div>
      <div className="flex gap-2 px-2">
        <Badge className="w-7 h-7">
          <FaMoon />
        </Badge>
        <div className="flex-1">
          <h1 className="font-medium  text-sm">Dark Mode</h1>
          <p className="text-xs text-slate-500">
            Adjust the appearance of Facebook to reduce glare and give your eyes
            a break.
          </p>
          <label className="flex px-2 py-1 text-sm  hover:bg-zinc-200 justify-between mt-2 rounded-md items-center duration-200 transition-colors font-medium">
            Off
            <input
              value="Off"
              type={"radio"}
              name="dark_mode"
              className="w-4 h-4"
            />
          </label>
          <label className="flex px-2 py-1 text-sm  hover:bg-zinc-200 justify-between mt-2 rounded-md items-center duration-200 transition-colors font-medium">
            On
            <input
              type={"radio"}
              name="dark_mode"
              value="On"
              className="w-4 h-4"
            />
          </label>
          <label className="px-2 py-1 block  text-sm hover:bg-zinc-200  mt-2 rounded-md items-center duration-200 transition-colors font-medium">
            Automatic
            <span className="flex gap-1 hover:bg-inherit items-center ">
              <span className="text-xs font-normal">
                We’ll automatically adjust the display based on your device’s
                system settings.
              </span>
              <input
                type={"radio"}
                name="dark_mode"
                value="Automatic"
                className="w-4 h-4"
              />
            </span>
          </label>
        </div>
      </div>
      <div className="flex gap-2 px-2">
        <Badge className="w-7 h-7">
          <FaMoon />
        </Badge>
        <div className="flex-1">
          <h1 className="font-medium  text-sm">Compact Mode</h1>
          <p className="text-xs text-slate-500">
            Make your font size smaller so more content can fit on the screen.
          </p>
          <label className="flex px-2 py-1 text-sm hover:bg-zinc-200 justify-between mt-2 rounded-md items-center duration-200 transition-colors font-medium">
            Off
            <input
              value="Off"
              type={"radio"}
              name="compact_mode"
              className="w-4 h-4"
            />
          </label>
          <label className="flex px-2 py-1 text-sm hover:bg-zinc-200 justify-between mt-2 rounded-md items-center duration-200 transition-colors font-medium">
            On
            <input
              type={"radio"}
              name="compact_mode"
              value="On"
              className="w-4 h-4"
            />
          </label>
        </div>
      </div>
      <div className="flex px-2 py-1 justify-between items-center hover:bg-zinc-100 duration-300 transition-colors rounded-md">
        <div className="flex items-center gap-2">
          <Badge className="w-7 h-7">
            <FaKeyboard />
          </Badge>
          <h1 className="font-medium text-sm">Keyboard</h1>
        </div>
        <FaGreaterThan />
      </div>
    </div>
  );
};

export default DisplayAccessibility;
