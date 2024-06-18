"use client";
import { useEffect,useState } from "react"
import {getExplorerLink,getKeypairFromEnvironment} from "@solana-developers/helpers";
import { useWallet,useConnection } from "@solana/wallet-adapter-react";
import * as web3 from '@solana/web3.js'
import axios, { AxiosError } from 'axios'
import { SendTransactionOptions } from "@solana/wallet-adapter-base";
import SendButton from "./SendButton";

const TransferSol = () => {
    const [inputValues,setinputValues] = useState<{ recipientAddress:string, amount:string}>({ recipientAddress:"", amount:""})
    const [link,setLink] = useState<string>("")
    const {publicKey,sendTransaction} = useWallet()
    const {connection} = useConnection() 
    


    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-12 ">
             <div className="flex flex-col justify-center items-start gap-2">
                <h1 className="text-2xl">recipientAddress</h1>
                <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=> {setinputValues({...inputValues,recipientAddress:e.target.value})}} name="recipientAddress" placeholder="recipient-address" className="rounded-lg text-black outline-none p-4 "/>
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
                <h1 className="text-2xl">amount</h1>
                <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=> {setinputValues({...inputValues,amount:e.target.value})}} name="amount" placeholder="recipient-address" className="rounded-lg text-black outline-none p-4 "/>
            </div>
            {publicKey ? <SendButton link={link} setLink={setLink} inputValues={inputValues} /> : <h1>please connect your wallet :3</h1>}
        </div>
    )


} 
export default TransferSol