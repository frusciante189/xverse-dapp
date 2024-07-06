import { Dispatch, SetStateAction } from "react";
import ConnectWallet from "./ConnectWallet";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <header className="flex sm:flex-row flex-col sm:items-center justify-between border-b-[3px] border-[#292929] pt-[37px] pb-[30px] w-full sm:px-12 px-8 md:px-16 sm:gap-0 gap-6 relative">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute text-white min-[1100px]:hidden left-4"
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
        <h1 className="font-medium text-3xl min-[1100px]:text-[40px] min-[1100px]:leading-[46px] text-white sm:ml-0 ml-5">
          Dashboard
        </h1>
      </div>
      <ConnectWallet />
    </header>
  );
};

export default Header;
