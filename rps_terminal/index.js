import * as rl from 'readline-sync';
import Player from '../src/player.js';

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
console.log('Hi!');
//let userName = prompt("Please enter your name");

let userName = rl.question('What is your name?');

let user = new Player(userName, 0, NaN);
let cpu = new Player('CPU', 0, NaN);
console.log();
console.log(`Hi ${user.name}!`);

console.log(`Lets begin!`);

/**
 * picks a random number between 0 to 100. if number falls from:
 * 0 - 33 : computer chose r
 * 34 - 66 : computer chose p
 * 67 - 100 : computer chose s
 * @returns
 */
function CPUchoose() {
    let chooser = Math.floor(Math.random() * 100);
    console.log(`chooser picked ${chooser}`);
    if (chooser < 33) {
        return 'r';
    } else if (chooser >= 67) {
        return 's';
    } else {
        return 'p';
    }
}

/**
 * handles game logic.
 * @param {string} user
 * @param {string} cpu
 * @returns {string} "Draw", win
 */
function getWinner(user, cpu) {
    const winConditions = {
        r: 's',
        p: 'r',
        s: 'p',
    };
    console.log(`you chose ${user},cpu chose ${cpu}`);
    if (user == cpu) {
        return 'draw';
    } else if (winConditions[user] == cpu) {
        return 'win';
    } else {
        return 'lose';
    }
}

// game loop

let repeatGame = true;
let gameOutcome = NaN;
let userGoAgain = NaN;
let scorestring = NaN;

while (repeatGame) {
    console.log();
    user.choice = rl.question('enter r,p,s for rock paper or scissors.');
    cpu.choice = CPUchoose();
    console.log(`CPU chose ${cpu.choice}`);
    gameOutcome = getWinner(user.choice, cpu.choice);
    console.log(gameOutcome);
    if (gameOutcome == 'win') {
        user.score += 1;
        console.log('You win! :D');
    } else if (gameOutcome == 'lose') {
        cpu.score += 1;
        console.log('You lose D:');
    } else {
        console.log('Draw!');
    }

    console.log('SCORELINE:');
    console.log(`User: ${user.score}`);
    console.log(`CPU: ${cpu.score}`);

    scorestring =
        user.score == cpu.score
            ? `Its a tie!`
            : user.score > cpu.score
            ? `${user.name} is ahead!`
            : `CPU's ahead!`;

    console.log(scorestring);
    userGoAgain = rl.question('Go again? (Y/N)');

    repeatGame = userGoAgain.toUpperCase() == 'Y';
}

console.log('Thank you for playing!');
console.log();
console.log('FINAL SCORE:');
console.log(`User: ${user.score}`);
console.log(`CPU: ${cpu.score}`);
console.log();
