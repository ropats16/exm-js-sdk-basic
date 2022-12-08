import { Exm, ContractType } from '@execution-machine/sdk';
import { readFileSync } from 'fs';
import dotenv from "dotenv";
dotenv.config();

const API_TOKEN = process.env.EXM_API_TOKEN

const exm = new Exm({ token: API_TOKEN });

const contractSource = readFileSync('function.js');

// .deploy(source, initState, contractType)
const contractInst = await exm.functions.deploy(contractSource, { users: [] }, ContractType.JS);
console.log(contractInst);