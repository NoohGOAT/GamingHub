// Function to change sections
function changeSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        section.classList.remove('active');
    });

    const selectedSection = document.getElementById(`${sectionId}-section`);
    selectedSection.classList.add('active');
}

// Glowing Button Animation
const buttons = document.querySelectorAll('.nav-button');
buttons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.boxShadow = '0 0 15px #ff9d00, 0 0 30px #ff6a00';
    });

    button.addEventListener('mouseout', () => {
        button.style.boxShadow = '0 0 10px #ff6a00, 0 0 20px #ff9d00';
    });
});

// Default Section Activation
document.addEventListener('DOMContentLoaded', () => {
    changeSection('home');
    loadLeaderboard();
});

// Leaderboard Functions
const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

function loadLeaderboard() {
    const leaderboardList = document.getElementById('leaderboard');
    leaderboardList.innerHTML = '';
    leaderboard.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${entry.name} - ${entry.score}`;
        leaderboardList.appendChild(listItem);
    });
}

document.getElementById('score-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const playerName = document.getElementById('player-name').value;
    const playerScore = document.getElementById('score').value;

    if (playerName && playerScore) {
        const newEntry = {
            name: playerName,
            score: parseInt(playerScore, 10)
        };

        leaderboard.push(newEntry);
        leaderboard.sort((a, b) => b.score - a.score); // Sort leaderboard by score in descending order
        leaderboard.length = 10; // Keep only top 10 scores

        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

        loadLeaderboard(); // Refresh leaderboard display
    }
});
