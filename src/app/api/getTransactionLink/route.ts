import {getExplorerLink} from "@solana-developers/helpers"
import { NextRequest,NextResponse } from "next/server"
export async function GET(req:NextRequest,res:NextResponse) {
    const {searchParams} = new URL(req.url)
    const signature  = searchParams.get("signature")
    var link = undefined
    if(signature) {
         link = getExplorerLink("transaction",signature,"devnet")
    }

    return NextResponse.json({link:link})
}