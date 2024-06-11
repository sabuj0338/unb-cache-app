import { useState } from "react";

export default function MapSettings() {
  const [circleCount, setCircleCount] = useState(0);
  const [spilitCount, setSpilitCount] = useState(0);
  const [angle, setAngle] = useState(0);
  return (
    <div className="my-2 p-4 bg-white shadow-sm">
      <div className="flex flex-wrap justify-between">
        <div className="inline-flex gap-3 items-center">
          <label htmlFor="">Draw Circle:</label>
          <Counter
            count={circleCount}
            setCount={(val) => setCircleCount(val)}
          />
        </div>
        <div className="inline-flex gap-3 items-center">
          <label htmlFor="">Split Into:</label>
          <Counter
            count={spilitCount}
            setCount={(val) => setSpilitCount(val)}
          />
        </div>
      </div>
      <br />
      <div className="flex justify-between">
        <div className="inline-flex gap-3 items-center">
          <label htmlFor="">Angle:</label>
          <span className="w-10 inline-flex justify-end items-center">
            {angle}°
          </span>
          <input
            type="range"
            className="w-80"
            min="0"
            max="360"
            value={angle}
            onChange={(e) => setAngle(+e.target.value)}
          />
          <span>360°</span>
        </div>

        <button
          type="button"
          className="text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
        >
          Save
        </button>
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
        className="rounded-l-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-base px-4 py-1.5 text-center"
        onClick={handleDecreament}
      >
        -
      </button>
      <input
        className="w-20 py-1.5 text-center bg-white"
        readOnly
        disabled
        type="text"
        value={count}
      />
      <button
        type="button"
        className="rounded-r-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-base px-4 py-1.5 text-center"
        onClick={handleIncreament}
      >
        +
      </button>
    </div>
  );
}
