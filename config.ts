import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import bs58 from 'bs58';
import dotenv from "dotenv";

dotenv.config();

export const rayFee = new PublicKey('7YttLkHDoNj9wyDur5pM1ejNaAvT9X4eqaYcHQqtj2G5');
export const tipAcct = new PublicKey('Cw8CFyM9FkoMi7K7Crf6HNQqf4uEMzpKw6QNghXLvLkY');
export const RayLiqPoolv4 = new PublicKey('675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8');

export const connection = new Connection(process.env.RPC_ENDPOINT!, { wsEndpoint: process.env.WEBSOCKET_ENDPOINT, commitment: "confirmed" });

export const wallet = Keypair.fromSecretKey(
    bs58.decode(
        process.env.PRIVATE_KEY!
    )
);