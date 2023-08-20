import { data } from './data.js';

// Assuming you have a function to initialize your game on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
});

function initializeGame() {
    // Create a hero and an enemy
    let hero = createCharacter();
    let enemy = createCharacter();

    // Generate cards for the hero and enemy
    generateCharacterCard(hero, 'heroCard', 'Hero');
    generateCharacterCard(enemy, 'enemyCard', 'Enemy');
}

function generateCharacterCard(character, cardId, cardTitle) {
    // Create a Materialize card
    let cardHTML = `
        <div class="col s12 m6">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">${cardTitle}</span>
                    <!-- Display character information here -->
                    <p>HP: ${character.spec.hp}</p>
                    <p>MP: ${character.spec.mp}</p>
                    <p>ATK: ${character.spec.atk}</p>
                    <p>DEF: ${character.spec.def}</p>
                    <p>MR: ${character.spec.mr}</p>
                    <!-- Add more information as needed -->
                </div>
            </div>
        </div>
    `;

    // Add the card to the container
    let container = document.getElementById('characterCards');
    container.insertAdjacentHTML('beforeend', cardHTML);
}

function createCharacter(){
    let character = {
        stats: Object.create(data.stats),
        spec: Object.create(data.spec)
    };

    return character;
}

function setStats(character, stats)
{
    character.stats = stats;
    return character;
}

function updateSpec(character)
{
    //update
    return character
}