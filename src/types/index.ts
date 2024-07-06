import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

type IconType = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, "ref"> & {
    title?: string;
    titleId?: string;
  } & RefAttributes<SVGSVGElement>
>;

export interface NavigationItem {
  name: string;
  icon: IconType;
  onClick?: () => void;
}

export interface BarProps {
  value: number;
  isActive: boolean;
  onClick: (value: number) => void;
  color: string;
  middleValue: number;
}

type TransactionType = "borrow" | "withdraw" | "repay" | "deposit";

export interface Transaction {
  type: TransactionType;
  currency: string;
  date: string;
  time: string;
  status: string;
  amount: string;
  units: string;
}
