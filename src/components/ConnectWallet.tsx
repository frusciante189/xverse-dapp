import { ChevronDownIcon, WalletIcon } from "@heroicons/react/24/outline";
import { useWallet } from "../Context/WalletContext";

const ConnectWallet = () => {
  const { address, connectWallet, isConnected } = useWallet();

  return (
    <div
      className="px-4 py-[9.5px] rounded-lg bg-[#343434] flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity max-w-max"
      onClick={isConnected ? undefined : connectWallet}
    >
      <WalletIcon className="size-6 text-white  " />
      {isConnected ? (
        <>
          {" "}
          <span className="text-white leading-[18px] font-medium">
            {address}
          </span>
          <ChevronDownIcon className="size-4 text-white" />
        </>
      ) : (
        <button className="text-white font-medium">Connect Wallet</button>
      )}
    </div>
  );
};

export default ConnectWallet;
