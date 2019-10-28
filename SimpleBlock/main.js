const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
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
        this.difficulty = 5;
    }

    createGenesisBlock() {
        return new Block(0, "01/01/2017", "Genesis block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addNewBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        //newBlock.hash = newBlock.calculateHash();
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
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
}


let hvcoin = new Blockchain();
console.log('Mining block 1 ....')
hvcoin.addNewBlock(new Block(1,"10/07/2017", { amount : 4}));
console.log('Mining block 2 ....')
hvcoin.addNewBlock(new Block(2,"10/08/2017", { amount : 10}));
// hvcoin.addNewBlock(new Block(3,"10/09/2017", { amount : 5}));
// hvcoin.addNewBlock(new Block(4,"11/11/2017", { amount : 25}));

// console.log(JSON.stringify(hvcoin, null, 4));

// console.log('Is blockchain valid? ' + hvcoin.isChainValid());

// hvcoin.chain[1].data = {amount: 100};
// hvcoin.chain[1].hash = hvcoin.chain[1].calculateHash();
// console.log('Is blockchain valid? ' + hvcoin.isChainValid());