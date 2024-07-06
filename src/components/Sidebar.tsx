import {
  ArrowPathIcon,
  BellAlertIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
  WalletIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import SidebarItem from "./SidebarItem";
import { NavigationItem } from "../types";

import { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { useWallet } from "../Context/WalletContext";

const navigation: NavigationItem[] = [
  {
    name: "Dashboard",
    icon: Squares2X2Icon,
  },
  {
    name: "Vault",
    icon: WalletIcon,
  },
  {
    name: "Liquidation",
    icon: ArrowPathIcon,
  },
  {
    name: "Market",
    icon: ShoppingBagIcon,
  },
];

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { address, connectWallet, isConnected } = useWallet();

  return (
    <aside>
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-[#010101]/50 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute right-0 top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </button>
              </div>
            </TransitionChild>

            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#1a1a1a] px-6 pb-2 ring-1 ring-white/10">
              <div className="py-10">
                <img src="/logo.svg" alt="Ducat" className="h-[42px] w-auto" />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <nav className="flex flex-col gap-10">
                  {navigation.map((navItem, index) => (
                    <SidebarItem {...navItem} key={index} />
                  ))}
                </nav>
                <div className="flex flex-col gap-8">
                  <SidebarItem icon={BellAlertIcon} name="Notifications" />
                  <SidebarItem
                    icon={WalletIcon}
                    name={
                      isConnected && address !== null
                        ? address
                        : "Connect Wallet"
                    }
                    onClick={isConnected ? undefined : connectWallet}
                  />
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <div className="min-[1100px]:flex min-[1100px]:flex-col min-[1100px]:gap-20 hidden py-10 px-8 w-[264px] bg-[#1a1a1a] h-screen">
        <div>
          <img src="/logo.svg" alt="Ducat" className="h-[42px] w-auto" />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <nav className="flex flex-col gap-10">
            {navigation.map((navItem, index) => (
              <SidebarItem {...navItem} key={index} />
            ))}
          </nav>
          <div className="flex flex-col gap-8">
            <SidebarItem icon={BellAlertIcon} name="Notifications" />
            <SidebarItem
              icon={WalletIcon}
              name={
                isConnected && address !== null ? address : "Connect Wallet"
              }
              onClick={isConnected ? undefined : connectWallet}
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
