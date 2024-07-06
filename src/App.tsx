import BtcPrice from "./components/BtcPrice";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Notifications from "./components/Notifications";
import VaultHealth from "./components/VaultHealth";
import RecentTransactions from "./components/RecentTransactions";
import Chart from "./components/Chart";
import { useState } from "react";
import { WalletProvider } from "./Context/WalletContext";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <WalletProvider>
      <div className="flex">
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <div className="flex flex-col w-full h-screen overflow-y-auto hideScrollbar">
          <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
          <div className="grid min-[1670px]:grid-cols-12 min-[1670px]:divide-x-[3px] grid-cols-1 divide-[#292929]">
            <div className="min-[1670px]:col-span-7">
              <BtcPrice />
              <BtcPrice />
              <Chart />
            </div>
            <div className="min-[1670px]:col-span-5">
              <Notifications />
              <VaultHealth />
              <RecentTransactions />
            </div>
          </div>
        </div>
      </div>
    </WalletProvider>
  );
};

export default App;
