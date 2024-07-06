import { Transaction } from "../types";
import classNames from "classnames";
import { DepositIcon, ExhcangeIcon, RepayIcon, WithdrawIcon } from "./icons";

const Badge = ({ status }: { status: string }) => {
  const getStatusBadgeClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "to be repayed":
        return "bg-bg-warning-secondary text-text-warning-tertiary";
      case "deposited":
        return "bg-bg-success text-text-success";
      default:
        return "";
    }
  };

  return (
    <div
      className={classNames(
        "px-2 py-[3px] rounded-full leading-[13px] text-[10px] text-[#BF6A02] bg-[#FFF1C2] shrink-0",
        getStatusBadgeClass(status)
      )}
    >
      {status}
    </div>
  );
};

const TransactionItem = ({
  type,
  currency,
  date,
  time,
  status,
  amount,
  units,
}: Transaction) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "borrow":
        return <ExhcangeIcon />;
      case "withdraw":
        return <WithdrawIcon />;
      case "repay":
        return <RepayIcon />;
      case "deposit":
        return <DepositIcon />;
    }
  };

  return (
    <div className=" flex items-center overflow-x-auto hideScrollbar">
      <div className="flex gap-5 items-center w-[250px] shrink-0">
        <div className="size-10 rounded-full bg-[#343434] flex items-center justify-center">
          {getIcon(type)}
        </div>
        <div className="flex flex-col">
          <div className="text-white text-sm leading-[17px]">
            <span className="capitalize">{type}</span> <span>{currency}</span>
          </div>
          <span className="text-white/50 text-xs leading-[15px]">
            {date}, {time}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between flex-1 shrink-0 gap-10">
        <Badge status={status} />
        <div className="flex flex-col text-right">
          <span className="text-white font-semibold leading-[19px] shrink-0 whitespace-nowrap">
            {amount}
          </span>
          <span className="text-white/50 leading-[15px] text-xs shrink-0 whitespace-nowrap">
            {units}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
