
import * as web3 from '@solana/web3.js'
import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useWallet,useConnection } from '@solana/wallet-adapter-react';
import { getExplorerLink } from "@solana-developers/helpers";
import axios from 'axios';
import { SetStateAction } from 'react';
import Link from 'next/link';
const SendButton = ({inputValues,link,setLink}:{ inputValues:{ recipientAddress:string, amount:string},link:string, setLink:React.Dispatch<SetStateAction<string>>}) => {
    const {publicKey,sendTransaction} = useWallet()
    const {connection} = useConnection()
    const sendSol = (e:React.MouseEvent<HTMLButtonElement>) => {
        
        e.preventDefault();
        const transaction = new web3.Transaction();
        const recipientPublicKey = new web3.PublicKey(inputValues.recipientAddress);
      
        if(publicKey) {
            const sendSolInstructions = web3.SystemProgram.transfer({
                fromPubkey:publicKey, 
                toPubkey:recipientPublicKey,
                lamports: web3.LAMPORTS_PER_SOL * Number(inputValues.amount)
            })
            transaction.add(sendSolInstructions)
            sendTransaction(transaction,connection).then(async(signature)=> {
               const res =  await axios.get(`/api/getTransactionLink?signature=${signature}`)
               if(res.status == 200) {
                    setLink(res.data.link)
               }
            }).catch((error)=> {console.log(error)})
        }
          
    }

    return (
        (link ? 
            <div className='flex flex-col items-start justify-center gap-4'>
                <h1 className='text-2xl'>check out your transaction!</h1>
                <Link className='text-[#512da8]' href={link} target='_blank'>{link}</Link>
            </div> 
        : 
        <button onClick={(e)=> {sendSol(e)}} className="rounded-lg p-4 bg-white text-black w-1/6">send</button> )
    )
}
export default SendButton