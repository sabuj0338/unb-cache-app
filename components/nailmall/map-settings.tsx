import { useState } from "react";
import DeleteIcon from "./DeleteIcon";
import Loader from "./loader";

type Props = {
  config: IMapConfig;
  callback: () => void;
};

export default function MapSettings({ callback, config }: Props) {
  const [circleCount, setCircleCount] = useState(0);
  const [spilitCount, setSpilitCount] = useState(0);
  const [angle, setAngle] = useState(0);

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const body = {
        circleCount,
        spilitCount,
        angle,
      };

      const res = await fetch(`http://127.0.0.1:8000/api/v1/mapapi/config`, {
        method: "POST",
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("failed to save map settings.");

      await callback();
    } catch (_) {}
    setLoading(false);
  };

  const handleDeleteRadiusItem = (radius: number) => {};

  return (
    <div className="my-2 bg-white shadow-sm">
      <div className="p-4 border-b flex items-center justify-between">
        <p>Create Circle Radius List</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-6 h-6 cursor-pointer ${show && "rotate-180"}`}
          onClick={() => setShow(!show)}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      <div className={show ? "p-4 flex gap-4" : "hidden"}>
        <div className="border rounded p-4 flex flex-col space-y-4 flex-wrap justify-between">
          <div className="inline-flex gap-3 items-center justify-between">
            <label htmlFor="">Draw Circle:</label>
            <Counter
              count={circleCount}
              setCount={(val) => setCircleCount(val)}
            />
          </div>
          <div className="inline-flex gap-3 items-center justify-between">
            <label htmlFor="">Split Into:</label>
            <Counter
              count={spilitCount}
              setCount={(val) => setSpilitCount(val)}
            />
          </div>
          <div className="inline-flex gap-3 items-center justify-between">
            <label htmlFor="">Angle:</label>
            <div className="flex gap-3 items-center">
              <span>{angle}°</span>
              <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={(e) => setAngle(+e.target.value)}
              />
              <span>360°</span>
            </div>
          </div>
          <div className="">
            <button
              type="button"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? <Loader /> : "Save"}
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap gap-3">
            {config.polygonSettings.radiusList.map((circle: IRadiusItem) => (
              <CircleRadiusItem
                cirle={circle}
                onDelete={handleDeleteRadiusItem}
                key={circle.radius}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type CounterProps = {
  count: number;
  setCount: (val: number) => void;
};

function Counter({ count, setCount }: CounterProps) {
  const handleIncreament = () => setCount(count + 1);
  const handleDecreament = () => setCount(count == 0 ? 0 : count - 1);
  return (
    <div className="inline-flex items-center border border-blue-500 rounded-full bg-white">
      <button
        type="button"
        className="rounded-l-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium text-base px-2 text-center"
        onClick={handleDecreament}
      >
        -
      </button>
      <input
        className="w-12 py- text-center bg-white"
        readOnly
        disabled
        type="text"
        value={count}
      />
      <button
        type="button"
        className="rounded-r-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium text-base px-2 text-center"
        onClick={handleIncreament}
      >
        +
      </button>
    </div>
  );
}

type CircleRadiusItemProps = {
  cirle: IRadiusItem;
  onDelete: (radius: number) => void;
};

function CircleRadiusItem({ cirle, onDelete }: CircleRadiusItemProps) {
  return (
    <div className="mb-2 w-80 border bg-white p-3 rounded-xl flex items-center justify-between">
      <div className="flex space-x-6 items-center">
        <div className="relative inline-flex">
          <i className="fa-lg fas fa-sort-down w-2 h-2 absolute top-0 right-0 mx-5 my-2 pointer-events-none text-white"></i>
          <div
            className="border-white rounded-xl text-white px-4 focus:outline-none appearance-none"
            style={{ backgroundColor: cirle.color }}
          >
            {cirle.color}
          </div>
        </div>
        <div className="flex space-x-2 items-center">
          <p className="font-semibold text-xl">{cirle.mile} mile</p>
        </div>
      </div>
      <button
        type="button"
        className="text-red-600 bg-red-50 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200 font-medium rounded-full text-sm px-2 py-2 text-center"
      >
        <DeleteIcon classNames="w-4 h-4"/>
      </button>
    </div>
  );
}
