const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resetButton = document.querySelector('#reset');

let iconRight = document.querySelector('.icon-right');
let iconLeft = document.querySelector('.icon-left');
let introScreen = document.querySelector('.game-intro');
let winBanner = document.querySelector('.win-banner');
let loseBanner = document.querySelector('.lose-banner');
let tieBanner = document.querySelector('.tie-banner');

function compChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const selection = Math.floor(Math.random()*options.length);
    let randomSelection = options[selection];
    return randomSelection;
}

function click(a) {
    iconLeft.style.backgroundImage=`url(resources/${a}-icon.png)`;
    iconLeft.style.display='unset';
    iconRight.style.display='unset';
    introScreen.style.animation='backgroundCicle 0.5s linear 0s 4';
    iconRight.style.animation='cicle 0.5s linear 0s 4';
    iconRight.addEventListener('animationend', () => {
        comp(`${a}`);
    })
}

function reset() {
    introScreen.style.backgroundImage='url(resources/intro.jpg)';
    introScreen.style.animation='unset';
    iconLeft.style.backgroundImage='none';
    iconRight.style.backgroundImage='none';
    iconRight.style.display='none';
    iconLeft.style.display='none';
    winBanner.style.display='none';
    loseBanner.style.display='none';
    tieBanner.style.display='none';
}

function comp(data) {
    const input = data;
    let cpuSelection = compChoice();
    function win(a, b) {
        introScreen.style.backgroundImage='url(resources/win-background.jpg)';
        winBanner.style.display='unset';
        loseBanner.style.display='none';
        tieBanner.style.display='none';
        winBanner.style.backgroundImage='url(resources/win-banner.png)';
        iconLeft.style.backgroundImage=`url(resources/${a}-icon.png)`;
        iconRight.style.backgroundImage=`url(resources/${b}-icon.png)`;
    }
    function lose(a, b) {
        introScreen.style.backgroundImage='url(resources/lose-background.jpg)';
        loseBanner.style.display='unset';
        winBanner.style.display='none';
        tieBanner.style.display='none';
        loseBanner.style.backgroundImage='url(resources/lose-banner.png)';
        iconLeft.style.backgroundImage=`url(resources/${a}-icon.png)`;
        iconRight.style.backgroundImage=`url(resources/${b}-icon.png)`;
    }
    function tie(a, b) {
        introScreen.style.backgroundImage='url(resources/tie-background.jpg)';
        tieBanner.style.display='unset';
        loseBanner.style.display='none';
        tieBanner.style.backgroundImage='url(resources/tie-banner.png)';
        iconLeft.style.backgroundImage=`url(resources/${a}-icon.png)`;
        iconRight.style.backgroundImage=`url(resources/${b}-icon.png)`;
    }
    if (input === cpuSelection) {
        tie(data, cpuSelection);
        console.log(cpuSelection);
    } else if (input === 'rock' && cpuSelection === 'scissors') {
        win(data, cpuSelection);
        console.log(cpuSelection);
    } else if (input === 'scissors' && cpuSelection === 'paper') {
        win(data, cpuSelection);
        console.log(cpuSelection);
    } else if (input === 'paper' && cpuSelection === 'rock') {
        win(data, cpuSelection);
        console.log(cpuSelection);
    } else if (input === 'rock'  && cpuSelection === 'paper') {
        lose(data, cpuSelection);
        console.log(cpuSelection);
    } else if (input === 'scissors' && cpuSelection === 'rock') {
        lose(data, cpuSelection);
        console.log(cpuSelection);
    } else if (input === 'paper' && cpuSelection === 'scissors') {
        lose(data, cpuSelection);
        console.log(cpuSelection);
    }    
}

rockButton.onclick = () => {
    click('rock')
}
paperButton.onclick = () => {
    click('paper')
}
scissorsButton.onclick = () => {
    click('scissors')
}
resetButton.onclick = () => {
    reset()
}