'use client'
import Image from "next/image"
import solImg from '../../../public/solanaLogo.png'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Link from "next/link"
const AppBar = () => {
    return (
        <div className="text-white h-48 w-full flex justify-between items-center px-8 fixed top-0">
            <Link href={'/'}><Image  alt="Solana Logo" width={250} height={100} src={solImg}/></Link>
            <WalletMultiButton/>
        </div>
    )
}
export default AppBar