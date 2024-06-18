import Image from "next/image";
import AppBar from "./components/AppBar";
import WalletContextProvider from "./components/WalletContextProvider";
import TransferSol from "./components/TransferSol"
export default function Home() {
  return (
    <div className="h-screen w-screen  bg-black text-white">
      <WalletContextProvider>
      <AppBar/>
      <TransferSol/>
      </WalletContextProvider>
    </div>
  );
}
