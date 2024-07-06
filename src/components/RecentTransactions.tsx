import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Transaction } from "../types";
import TransactionItem from "./Transaction";

const transactions: Transaction[] = [
  {
    type: "borrow",
    currency: "UNIT",
    date: "05 Sep 2021",
    time: "5:16 pm",
    status: "To be repayed",
    amount: "$8,800.50",
    units: "~234,521.23 UNIT",
  },
  {
    type: "withdraw",
    currency: "BTC",
    date: "05 Sep 2021",
    time: "5:16 pm",
    status: "Deposited",
    amount: "$900.20",
    units: "~0.000016 BTC",
  },
  {
    type: "repay",
    currency: "UNIT",
    date: "05 Sep 2021",
    time: "5:05 pm",
    status: "Deposited",
    amount: "$1,800.50",
    units: "~54,521.23 UNIT",
  },
  {
    type: "borrow",
    currency: "UNIT",
    date: "20 Apr 2020",
    time: "2:45 am",
    status: "To be repayed",
    amount: "$8,800.50",
    units: "~234,521.23 UNIT",
  },
  {
    type: "deposit",
    currency: "BTC",
    date: "20 Apr 2020",
    time: "2:35 am",
    status: "Deposited",
    amount: "$93,200.20",
    units: "~1.52 BTC",
  },
  {
    type: "borrow",
    currency: "UNIT",
    date: "05 Sep 2021",
    time: "5:16 pm",
    status: "To be repayed",
    amount: "$8,800.50",
    units: "~234,521.23 UNIT",
  },
  {
    type: "withdraw",
    currency: "BTC",
    date: "05 Sep 2021",
    time: "5:16 pm",
    status: "Deposited",
    amount: "$900.20",
    units: "~0.000016 BTC",
  },
  {
    type: "repay",
    currency: "UNIT",
    date: "05 Sep 2021",
    time: "5:05 pm",
    status: "Deposited",
    amount: "$1,800.50",
    units: "~54,521.23 UNIT",
  },
  {
    type: "borrow",
    currency: "UNIT",
    date: "20 Apr 2020",
    time: "2:45 am",
    status: "To be repayed",
    amount: "$8,800.50",
    units: "~234,521.23 UNIT",
  },
  {
    type: "deposit",
    currency: "BTC",
    date: "20 Apr 2020",
    time: "2:35 am",
    status: "Deposited",
    amount: "$93,200.20",
    units: "~1.52 BTC",
  },
  {
    type: "borrow",
    currency: "UNIT",
    date: "05 Sep 2021",
    time: "5:16 pm",
    status: "To be repayed",
    amount: "$8,800.50",
    units: "~234,521.23 UNIT",
  },
  {
    type: "withdraw",
    currency: "BTC",
    date: "05 Sep 2021",
    time: "5:16 pm",
    status: "Deposited",
    amount: "$900.20",
    units: "~0.000016 BTC",
  },
  {
    type: "repay",
    currency: "UNIT",
    date: "05 Sep 2021",
    time: "5:05 pm",
    status: "Deposited",
    amount: "$1,800.50",
    units: "~54,521.23 UNIT",
  },
  {
    type: "borrow",
    currency: "UNIT",
    date: "20 Apr 2020",
    time: "2:45 am",
    status: "To be repayed",
    amount: "$8,800.50",
    units: "~234,521.23 UNIT",
  },
  {
    type: "deposit",
    currency: "BTC",
    date: "20 Apr 2020",
    time: "2:35 am",
    status: "Deposited",
    amount: "$93,200.20",
    units: "~1.52 BTC",
  },
];

const RecentTransactions = () => {
  return (
    <div className="pt-16">
      <div className="flex flex-col gap-11">
        <div className="flex items-center justify-between md:pr-9 md:pl-16 sm:px-12 px-8">
          <h1 className="text-white text-2xl leading-7">Recent transactions</h1>
          <button className="flex items-center gap-x-1">
            <span className="text-white tracking-[-0.3px] text-lg leading-[21px]">
              See all
            </span>
            <ArrowRightIcon className="size-3.5 text-white" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="overflow-y-auto max-h-[605px] hideScrollbar">
            <div className="flex flex-col">
              {transactions.map((transaction, index) => (
                <div
                  className="bg-transparent even:bg-white/5 px-8 py-4 hover:opacity-80 transition-opacity"
                  key={index}
                >
                  <TransactionItem {...transaction} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
