import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import Wallet, { Address, AddressPurpose } from "sats-connect";
import { formatWalletAddress } from "../utils/formatWalletAddress";
import useLocalStorage from "../hooks/useLocalStorage";

interface WalletContextProps {
  address: string | null;
  connectWallet: () => void;
  isConnected: boolean;
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [addressInfo, setAddressInfo] = useLocalStorage<Address[]>(
    "addresses",
    []
  );
  const [address, setAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    const response = await Wallet.request("getAccounts", {
      purposes: [
        AddressPurpose.Payment,
        AddressPurpose.Ordinals,
        AddressPurpose.Stacks,
      ],
      message: "Cool app wants to know your addresses!",
    });

    if (response.status === "success") {
      setAddressInfo(response.result);
      console.log(response.result);
    }
  };

  useEffect(() => {
    if (addressInfo.length > 0) {
      setAddress(formatWalletAddress(addressInfo[0].address));
    } else {
      setAddress(null);
    }
  }, [addressInfo]);

  const isConnected = addressInfo.length > 0;

  return (
    <WalletContext.Provider value={{ address, connectWallet, isConnected }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
