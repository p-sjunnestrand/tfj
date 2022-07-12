import { createLabeledInput } from "./modules/helpers/createInput.mjs";
import { showNewScreen } from "./modules/helpers/showNewScreen.mjs";

let leaderName;
let tribeName;
let ancestralName;

const main = document.getElementById('main');
const currentScreen = document.createElement('section');
main.appendChild(currentScreen);



function showStartScreen() {
    showNewScreen(currentScreen);
    currentScreen.className = 'startScreen';

    const buttonStartGame = document.createElement('button');
    buttonStartGame.textContent = 'Start';
    buttonStartGame.classList.add('buttonStartGame')
    currentScreen.appendChild(buttonStartGame);
    
    buttonStartGame.addEventListener('click', () => {
        chooseTribe();
    })
};
function chooseTribe() {
    showNewScreen(currentScreen);

    const wrapperNameInputs = document.createElement('form');

    const inputLeaderName = createLabeledInput('Leader Name', 'leaderName');
    const inputTribeName = createLabeledInput('Tribe Name', 'tribeName');
    const inputAncestralName = createLabeledInput('Ancestral Parent Name', 'ancestralName');
    const buttonChooseNames = document.createElement('button');

    buttonChooseNames.textContent = 'continue';
    buttonChooseNames.classList.add('buttonContinue');
    buttonChooseNames.addEventListener('click', (e) => chooseNames(e));

    wrapperNameInputs.append(inputLeaderName, inputTribeName, inputAncestralName, buttonChooseNames);
    currentScreen.appendChild(wrapperNameInputs);
};

function chooseNames(e) {
    e.preventDefault();
    leaderName = document.getElementById('leaderName').value;
    tribeName = document.getElementById('tribeName').value;
    ancestralName = document.getElementById('ancestralName').value;

    // showWelcomeScreen();
    showGameScreen();
}

// function showWelcomeScreen() {
//     showNewScreen();

//     const 
// }

function showGameScreen() {
    showNewScreen(currentScreen);

    const mainGameContainer = document.createElement('div');
    mainGameContainer.classList.add('mainGameDiv');

    currentScreen.appendChild(mainGameContainer);
}
showStartScreen();


