import { ArrowRightIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { BarProps } from "../types";
import { useState } from "react";

const Bar = ({ value, isActive, onClick, color, middleValue }: BarProps) => {
  return (
    <div className="pr-1.5 cursor-pointer" onClick={() => onClick(value)}>
      <div
        className={classNames(
          "min-[1670px]:w-2.5 rounded-full pr-1.5 min-[800px]:w-5 w-auto",
          value === middleValue
            ? "min-[1670px]:h-[76px] h-24"
            : "min-[1670px]:h-[58px] h-16",
          isActive ? color : "bg-white/[.28]"
        )}
      />
    </div>
  );
};

const VaultHealth = () => {
  const [selectedValue, setSelectedValue] = useState(178);
  const values = Array.from({ length: 28 }, (_, i) => 125 + i * 5);
  const middleIndex = Math.floor(values.length / 2);
  const middleValue = values[middleIndex];
  const getColor = (value: number): string => {
    if (value <= 175) return "bg-red-500";
    if (value <= 225) return "bg-warning";
    return "bg-green-500";
  };
  const handleBarClick = (value: number) => {
    setSelectedValue(value);
  };

  return (
    <div className="md:pr-9 md:pl-16 sm:px-12 px-8 py-16 border-b-[3px] border-[#292929]">
      <div className="flex flex-col gap-11">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl leading-7">Vault Health</h1>
          <button className="flex items-center gap-x-1">
            <span className="text-white tracking-[-0.3px] text-lg leading-[21px]">
              See details
            </span>
            <ArrowRightIcon className="size-3.5 text-white" />
          </button>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[#E6BB23] leading-10 font-medium text-[34px]">
              {selectedValue}%
            </span>
            <span className="text-white leading-[44px] text-2xl md:text-[38px] font-medium">
              {selectedValue <= 175
                ? "Fair"
                : selectedValue <= 225
                ? "Average"
                : "Excellent"}
            </span>
          </div>
          <div className="flex items-center justify-around">
            {values.map((value, index) => (
              <Bar
                key={index}
                value={value}
                isActive={value <= selectedValue}
                onClick={handleBarClick}
                color={getColor(selectedValue)}
                middleValue={middleValue}
              />
            ))}
          </div>
          <div className="flex items-center justify-between text-white/[.28] text-sm leading-4 font-semibold">
            <span>{values[0]}%</span>
            <span className="ml-4">200%</span>
            <span>{values[values.length - 1]}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaultHealth;
