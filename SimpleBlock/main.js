const SHA256 = require('crypto-js/sha256');


class Transaction {
    constructor(fromAddress, toAddress, amount){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}

class Block {
    constructor(timestamp, transactions, previousHash = ''){
        // this.index = index;
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce =0;
    }
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("Block mined: " + this.hash);
    }
   
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock() {
        return new Block("01/01/2017", "Genesis block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    miningPendingTransaction(miningRewardAddress){
        let block = new Block(Date.now(), this.pendingTransactions);
        block.mineBlock(this.difficulty);
        console.log('Block sucessfully mined!');
        this.chain.push(block);

        this.pendingTransactions = [
            new Transaction(null, miningRewardAddress, this.miningReward)
        ];
    }

    createTrasaction(transaction){
        this.pendingTransactions.push(transaction);
    }

    getBalanceOfAddress(address){
        let balance = 0;
        for(const block of this.chain){
            for(const tran of block.transactions){
                if(tran.fromAddress === address){
                    balance -= tran.amount;
                }
                if(tran.toAddress === address){
                    balance += tran.amount;
                }
            }
        }
        return balance;
    }

    isChainValid(){
        for(let i = 1; i < this.chain.length; i++ ){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];
            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
        return true;
    }   
    // showBlockInfo(){
    //     this.chain.map()
    // }
}


let hvcoin = new Blockchain();
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

hvcoin.createTrasaction(new Transaction('address1', 'address2', 100));
hvcoin.createTrasaction(new Transaction('address2', 'address1', 50));

console.log('\n Starting the miner ...');
hvcoin.miningPendingTransaction('hung-vo');


console.log('\n hung vo balance is', hvcoin.getBalanceOfAddress('hung-vo'))

console.log('\n Starting the miner ...');
hvcoin.miningPendingTransaction('hung vo');


console.log('\n hung vo balance is', hvcoin.getBalanceOfAddress('hung-vo'))
