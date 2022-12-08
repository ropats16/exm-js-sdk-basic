import { Exm } from '@execution-machine/sdk';

const exm = new Exm({ token: 'c65d8cac24a7afd90d2a65dbe01e75a61406529b3d9cf54578aa65cebc6ba6d311691b40078212b01462f47c154f' });

const functionId = 'Ol5QIeYz40tMj2Q7j-02avEOAzf6hNxwe6QBshiTFpI';

const inputs = [{ name: 'Tony Stark' }];

const writeTx = await exm.functions.write(functionId, inputs);
console.log(writeTx);