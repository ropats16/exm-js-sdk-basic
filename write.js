import { Exm } from '@execution-machine/sdk';
import dotenv from "dotenv";
dotenv.config();

const API_TOKEN = process.env.EXM_API_TOKEN;

console.log("This is your token", API_TOKEN);

const exm = new Exm({ token: API_TOKEN });

const functionId = 'Ol5QIeYz40tMj2Q7j-02avEOAzf6hNxwe6QBshiTFpI';

const inputs = [{ name: 'Open Sourcerer' }];

const writeTx = await exm.functions.write(functionId, inputs);
console.log(writeTx);