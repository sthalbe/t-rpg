const messageDiv = document.getElementById("message");
const nameInput = document.getElementById("name-input");
const enterNameButton = document.getElementById("enter-name-button");
const classChoicesDiv = document.getElementById("class-choices");
const classRadioButtons = classChoicesDiv.querySelectorAll("input[name='class']");
const startButton = document.getElementById("start-button");

enterNameButton.addEventListener("click", enterName);
classRadioButtons.forEach(radioButton => {
    radioButton.addEventListener("change", showClassChoices);
});

function showMessage(text) {
    messageDiv.textContent = text;
}

let myHero = {};
showMessage("Please enter your name.");

function enterName() {
    const playerName = nameInput.value.trim();
    if (playerName === "") {
        showMessage("Please enter your name.");
    } else {
        myHero.name = playerName;
        showMessage(`Welcome, ${playerName}! Please choose your class.`);
        classChoicesDiv.style.display = "block";
    }
}

function getClassSelection() {
    const selectedRadioButton = classChoicesDiv.querySelector("input[name='class']:checked");
    return selectedRadioButton ? selectedRadioButton.value : null;
}

function showClassChoices() {
    startButton.disabled = false;
    const selectedClass = getClassSelection();
    if (!selectedClass) {
        showMessage("Please select a class.");
        startButton.disabled = true;

        // startButton.style.display = "none";
    } else {
        myHero.className = selectedClass;
        const statsViewDiv = document.getElementById("stats-view");
        showMessage(`You have chosen the ${selectedClass} class. The game is starting...`);   
        const classStats = getClassStats(selectedClass);
        const statsMessage = `
            <p><strong>Class Stats:</strong></p>
            <p>STR: ${classStats.str}</p>
            <p>VIT: ${classStats.vit}</p>
            <p>INT: ${classStats.int}</p>
            <p>WIS: ${classStats.wis}</p>
            <p>DEX: ${classStats.dex}</p>
            <p>AGI: ${classStats.agi}</p>
        `;
        myHero.stats = classStats;
        statsViewDiv.innerHTML = statsMessage;
        statsViewDiv.style.display = "block";

        startButton.addEventListener("click", startGame);
    }
}

function getClassStats(className){
    let stats = {};
    if(className === "warrior"){
        stats.str = 15;
        stats.vit = 13;
        stats.int = 5;
        stats.wis = 6;
        stats.dex = 10;
        stats.agi = 11;
    }else if(className === "druid"){
        stats.str = 12;
        stats.vit = 11;
        stats.int = 9;
        stats.wis = 11;
        stats.dex = 7;
        stats.agi = 10;
    }else if(className === "wizard"){
        stats.str = 5;
        stats.vit = 6;
        stats.int = 19;
        stats.wis = 13;
        stats.dex = 11;
        stats.agi = 6;
    }

    return stats;
}

function startGame(){

}