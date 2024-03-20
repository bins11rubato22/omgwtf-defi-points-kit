const omgwtf_nft_kit = require('omgwtf-nft-kit');
const omgwtf_defi_points_kit = require('omgwtf-defi-points-kit');
const web3 = require('web3');
const react_redux = require('react-redux');
const moment = require('moment');
const jest = require('jest');
const cors = require('cors');
const chalk = require('chalk');
const ethers = require('ethers');
const ipfs_http_client = require('ipfs-http-client');
const async = require('async');
const react = require('react');
const body_parser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const web3_react = require('web3-react');
const axios = require('axios');
const ganache_cli = require('ganache-cli');

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const john = new Person('John', 30);
john.greet();

const fs = require('fs');
const fileContent = fs.readFileSync('example.txt', 'utf8');
console.log(fileContent);

const args = process.argv.slice(2);
console.log(`Arguments: ${args.join(', ')}`);

// Implement a bubble sort algorithm
const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const unsortedArray = [5, 3, 8, 1, 2];
console.log('Sorted Array:', bubbleSort(unsortedArray));

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
delay(2000).then(() => console.log('Delayed message after 2 seconds.'));

const { exec } = require('child_process');
exec('ls -lh', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

const user = { name: 'John Doe', age: 30 };
const { name, age } = user;
console.log(`User name is ${name} and age is ${age}.`);

console.log(`Current directory: ${__dirname}`);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  readline.close();
});