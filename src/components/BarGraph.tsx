import React, { useState } from "react";
import classNames from "classnames";
import { BarProps } from "../types";

const Bar: React.FC<BarProps> = ({ value, isActive, onClick, color }) => {
  return (
    <div
      className={classNames(
        "bar",
        "cursor-pointer",
        "w-2.5",
        isActive ? color : "bg-white/[.28]"
      )}
      style={{ height: value === 200 ? "76px" : "58px" }}
      onClick={() => onClick(value)}
    ></div>
  );
};

const BarGraph: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<number>(178);

  const values = Array.from({ length: 28 }, (_, i) => 125 + i * 5);
  const getColor = (value: number): string => {
    if (value <= 175) return "bg-red-500";
    if (value <= 225) return "bg-orange-500";
    return "bg-green-500";
  };

  const handleBarClick = (value: number) => {
    setSelectedValue(value);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-6xl text-yellow-500 mb-4">{selectedValue}%</div>
      <div className="flex justify-center items-end flex-wrap w-full">
        {values.map((value) => (
          <Bar
            key={value}
            value={value}
            isActive={value <= selectedValue}
            onClick={handleBarClick}
            color={getColor(selectedValue)}
          />
        ))}
      </div>
      <div className="text-2xl mt-4">
        {selectedValue <= 175
          ? "Good"
          : selectedValue <= 225
          ? "Average"
          : "Excellent"}
      </div>
      <div className="flex justify-between w-full mt-2 text-gray-400">
        <span>125%</span>
        <span>200%</span>
        <span>250%</span>
      </div>
    </div>
  );
};

export default BarGraph;
