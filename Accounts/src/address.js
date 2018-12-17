var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
var utils = web3.utils;
var util = require('ethereumjs-util');
var tx = require('ethereumjs-tx');

// web3.eth.getAccounts().then(accounts => {
//     accounts.forEach(account => {
//       console.log(account)
//     })
//   });
var privateKeyString = "6ec6505db8f83f3ce836a5c8076e8c0f84b76a11553966a32986100d5141d588";

var privateKey = "0x"+ privateKeyString;
var publicKey = util.privateToPublic(privateKey);
var address = util.privateToAddress(privateKey);

function getBinarySize(string) {
    return Buffer.byteLength(string, 'utf8');
}

function getBitSize(string){
    return getBinarySize(string) * 8;
}

console.log(" ===== privateKey ====== ");
console.log("Data : " + privateKey);
console.log(" Bit Size : " +  getBitSize(privateKeyString));
console.log(" ===== publicKey ====== ");
console.log("Data : 0x" + publicKey.toString("Hex"));
console.log(" Bit Size : " +  getBitSize(publicKey));
console.log(" ===== Address ====== ");
console.log("Data : 0x" + address.toString("Hex"));
console.log(" Bit Size : " +  getBitSize(address));