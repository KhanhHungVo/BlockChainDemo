import { Injectable } from '@angular/core';
import { Blockchain } from 'Savjeecoin/src/blockchain';
import EC from "elliptic";

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public blockchainInstance = new Blockchain();
  public walletKeys = [];


  constructor() {
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions('my-wallet-address');
    this.generateWalletKeys();

  }

  private generateWalletKeys(){
    const ec = new EC.ec('secp256k1');
  }
}
