import { Exm } from '@execution-machine/sdk';
import dotenv from "dotenv";
dotenv.config();

const API_TOKEN = process.env.EXM_API_TOKEN;

const exm = new Exm({ token: API_TOKEN });

const functionId = 'UNIQUE_FUNCTION_ID';

const inputs = [{ name: 'Open Sourcerer' }];

const writeTx = await exm.functions.write(functionId, inputs);
console.log(writeTx);