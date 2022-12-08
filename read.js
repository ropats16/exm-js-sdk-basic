import { Exm } from '@execution-machine/sdk';
import dotenv from "dotenv";
dotenv.config();

const API_TOKEN = process.env.EXM_API_TOKEN

const exm = new Exm({ token: API_TOKEN });

const functionId = 'UNIQUE_FUNCTION_ID';

const readTx = await exm.functions.read(functionId);
console.log(readTx);