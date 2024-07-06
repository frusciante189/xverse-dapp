import {
  ArrowDownLeftIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import useBitcoinPrice from "../hooks/useBitcoinPrice";
import classNames from "classnames";

const BtcPrice = () => {
  const { price, priceChangePercent } = useBitcoinPrice();
  const isNegative = priceChangePercent && parseFloat(priceChangePercent) < 0;

  return (
    <div className="pt-[45px] pb-9 border-b-[3px] border-[#292929] sm:px-12 px-8 md:px-16 flex">
      <div className="flex items-end w-full justify-between lg:gap-[60px] lg:flex-nowrap flex-wrap gap-y-5 sm:gap-y-10">
        <div className="flex flex-col gap-4 w-full">
          <h5 className="text-white text-lg sm:text-2xl leading-7">
            BTC deposited in vault
          </h5>
          <div className="flex sm:flex-row flex-col sm:gap-5">
            {price === null ? (
              <div className="sm:w-[500px] w-full h-[93px] relative rounded-md overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_3s_infinite] before:bg-gradient-to-r before:from-transparent before:via-[#1a1a1a] before:to-transparent"></div>
            ) : (
              <span className="text-white text-[60px] sm:text-[80px] leading-[92px] sm:min-w-[420px] w-full">
                {price}
              </span>
            )}
            <div className="mt-4 max-w-max">
              {priceChangePercent !== null && (
                <div
                  className={classNames(
                    "flex items-center gap-1 ring-1 ring-inset px-3 py-1.5 rounded-full",
                    isNegative ? "ring-red-500" : "ring-[#2EBE7B]"
                  )}
                >
                  <span
                    className={classNames(
                      "text-sm leading-4",
                      isNegative ? "text-red-500" : "text-[#2EBE7B]"
                    )}
                  >
                    {priceChangePercent}
                  </span>{" "}
                  {isNegative ? (
                    <ArrowDownLeftIcon className="size-2 text-red-500" />
                  ) : (
                    <ArrowUpRightIcon className="size-2 text-[#2EBE7B]" />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="flex flex-col items-center justify-center gap-2.5 px-2 hover:opacity-70 transition-opacity cursor-pointer">
            <div className="size-12 rounded-full flex items-center justify-center bg-[#343434]">
              <PlusIcon className="text-white size-4 stroke-2" />
            </div>
            <span className="text-[#747474] text-center text-sm leading-4">
              Deposit
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2.5 px-2 hover:opacity-70 transition-opacity cursor-pointer">
            <div className="size-12 rounded-full flex items-center justify-center bg-[#343434]">
              <ArrowUpIcon className="text-white size-4 stroke-2" />
            </div>
            <span className="text-[#747474] text-center text-sm leading-4">
              Withdraw
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BtcPrice;
