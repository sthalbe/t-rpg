const messageDiv = document.getElementById("message");
const nameInput = document.getElementById("name-input");
const enterNameButton = document.getElementById("enter-name-button");
const classChoicesDiv = document.getElementById("class-choices");
const classRadioButtons = classChoicesDiv.querySelectorAll("input[name='class']");
const startButton = document.getElementById("start-button");

enterNameButton.addEventListener("click", enterName);
classRadioButtons.forEach(radioButton => {
    radioButton.addEventListener("change", enableStartButton);
});

function showMessage(text) {
    messageDiv.textContent = text;
}

showMessage("Please enter your name.");

function enterName() {
    const playerName = nameInput.value.trim();
    if (playerName === "") {
        showMessage("Please enter your name.");
    } else {
        showMessage(`Welcome, ${playerName}! Please choose your class.`);
        showClassChoices();
    }
}

function showClassChoices() {
    classChoicesDiv.style.display = "block";
    const selectedClass = getClassSelection();
    if (!selectedClass) {
        showMessage("Please select a class.");
    startButton.disabled = true;

        // startButton.style.display = "none";
    } else {
        showMessage(`You have chosen the ${selectedClass} class. The game is starting...`);   
        const classStats = data.stats[selectedClass];
        const classSpecs = data.spec[selectedClass];
        // Example: Display class stats
        showMessage(`Class Stats: STR ${classStats.str}, VIT ${classStats.vit}, INT ${classStats.int}, ...`);

        // Example: Display class specs
        showMessage(`Class Specs: HP ${classSpecs.hp}, MP ${classSpecs.mp}, ATK ${classSpecs.atk}, ...`);
        
        // startButton.style.display = "block";
        startButton.addEventListener("click", startGame);
    }
}

function getClassSelection() {
    const selectedRadioButton = classChoicesDiv.querySelector("input[name='class']:checked");
    return selectedRadioButton ? selectedRadioButton.value : null;
}

function enableStartButton() {
    startButton.disabled = false;
}

function startGame(){

}