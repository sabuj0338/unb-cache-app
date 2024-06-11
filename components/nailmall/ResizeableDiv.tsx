import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  minHeight: number;
  initialHeight: number;
};
export default function ResizableDiv({
  children,
  minHeight,
  initialHeight,
}: Props) {
  const [height, setHeight] = useState<number>(initialHeight); // Initial height of the div
  const isDragging = useRef<boolean>(false); // To keep track of the drag state
  const startY = useRef<number>(0); // To keep track of the initial Y position

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startY.current = e.clientY;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    const dy = e.clientY - startY.current;
    setHeight((prevHeight) => Math.max(prevHeight + dy, minHeight));
    startY.current = e.clientY;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="relative" style={{ height: `${height}px` }}>
      {children}
      <div
        className="w-full h-5 cursor-ns-resize absolute bottom-0 flex justify-center bg-gray-900 text-white"
        onMouseDown={handleMouseDown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </div>
    </div>
  );
}
