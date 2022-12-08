import { Exm, ContractType } from '@execution-machine/sdk';
import { readFileSync } from 'fs';

const exm = new Exm({ token: 'c65d8cac24a7afd90d2a65dbe01e75a61406529b3d9cf54578aa65cebc6ba6d311691b40078212b01462f47c154f' });

const contractSource = readFileSync('function.js');

// .deploy(source, initState, contractType)
const contractInst = await exm.functions.deploy(contractSource, { users: [] }, ContractType.JS);
console.log(contractInst);