import readline from 'node:readline';
//
const consoleReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let titleCardString = `██████╗░░█████╗░░█████╗░██╗░░██╗  ██████╗░░█████╗░██████╗░███████╗██████╗░
██╔══██╗██╔══██╗██╔══██╗██║░██╔╝  ██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗
██████╔╝██║░░██║██║░░╚═╝█████═╝░  ██████╔╝███████║██████╔╝█████╗░░██████╔╝
██╔══██╗██║░░██║██║░░██╗██╔═██╗░  ██╔═══╝░██╔══██║██╔═══╝░██╔══╝░░██╔══██╗
██║░░██║╚█████╔╝╚█████╔╝██║░╚██╗  ██║░░░░░██║░░██║██║░░░░░███████╗██║░░██║
╚═╝░░╚═╝░╚════╝░░╚════╝░╚═╝░░╚═╝  ╚═╝░░░░░╚═╝░░╚═╝╚═╝░░░░░╚══════╝╚═╝░░╚═╝

░██████╗░█████╗░██╗░██████╗░██████╗░█████╗░██████╗░░██████╗  ██╗██████╗░
██╔════╝██╔══██╗██║██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝  ╚═╝██╔══██╗
╚█████╗░██║░░╚═╝██║╚█████╗░╚█████╗░██║░░██║██████╔╝╚█████╗░  ░░░██║░░██║
░╚═══██╗██║░░██╗██║░╚═══██╗░╚═══██╗██║░░██║██╔══██╗░╚═══██╗  ░░░██║░░██║
██████╔╝╚█████╔╝██║██████╔╝██████╔╝╚█████╔╝██║░░██║██████╔╝  ██╗██████╔╝
╚═════╝░░╚════╝░╚═╝╚═════╝░╚═════╝░░╚════╝░╚═╝░░╚═╝╚═════╝░  ╚═╝╚═════╝░`;

let titleCardLength = titleCardString.split('\n')[0].length;
let titleCardPadding = '='.repeat(titleCardLength);

titleCardString =
    titleCardPadding + '\n' + titleCardString + '\n' + titleCardPadding;

let welcomeStringRaw = 'Welcome to: ';
let welcomeStringLength = welcomeStringRaw.length;
let padlength = Math.floor((titleCardLength + welcomeStringLength) / 2);
let welcomeString = '\n' + welcomeStringRaw.padStart(padlength, ' ');

console.log(welcomeString);
console.log(titleCardString);

console.log();
console.log('Whats your name?');
//let userName = prompt("Please enter your name");

let 

consoleReader.question(`What's your name?`, (userName) => {
    username2 = userName;
    console.log(`Hi ${userName}!`);
    consoleReader.close();
});

console.log(`Hi ${userName2}!`);
