const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('4c8a4316919cbd140219cd5e48448f84e705c6a848994dcf99692bdb7c5fdc66');
const myWalletAddress = myKey.getPublic('hex');



let hvcoin = new Blockchain();
const tx1 = new Transaction(myWalletAddress, 'to address public key go here', 10);
tx1.signTransaction(myKey);
hvcoin.addTrasaction(tx1);

console.log('\n Starting the miner ...');
hvcoin.miningPendingTransaction(myWalletAddress);

console.log('\n hung vo balance is', hvcoin.getBalanceOfAddress('myWalletAddress'))

// console.log('Mining block 1 ....')
// hvcoin.addNewBlock(new Block(1,"10/07/2017", { amount : 4}));
// console.log('Mining block 2 ....')
// hvcoin.addNewBlock(new Block(2,"10/08/2017", { amount : 10}));
// hvcoin.addNewBlock(new Block(3,"10/09/2017", { amount : 5}));
// hvcoin.addNewBlock(new Block(4,"11/11/2017", { amount : 25}));

// console.log(JSON.stringify(hvcoin, null, 4));

// console.log('Is blockchain valid? ' + hvcoin.isChainValid());

// hvcoin.chain[1].data = {amount: 100};
// hvcoin.chain[1].hash = hvcoin.chain[1].calculateHash();
// console.log('Is blockchain valid? ' + hvcoin.isChainValid());

// hvcoin.createTrasaction(new Transaction('address1', 'address2', 100));
// hvcoin.createTrasaction(new Transaction('address2', 'address1', 50));

// console.log('\n Starting the miner ...');
// hvcoin.miningPendingTransaction('hung-vo');


// console.log('\n hung vo balance is', hvcoin.getBalanceOfAddress('hung-vo'))

// console.log('\n Starting the miner ...');
// hvcoin.miningPendingTransaction('hung-vo');


// console.log('\n hung vo balance is', hvcoin.getBalanceOfAddress('hung-vo'))


// console.log(JSON.stringify(hvcoin, null, 4))


