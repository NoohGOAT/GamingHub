// Change Sections
function changeSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(`${sectionId}-section`).classList.add('active');
}

// Search Games
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('game-search').value.toLowerCase();
    const games = document.querySelectorAll('.game-button');

    games.forEach(game => {
        const gameName = game.dataset.game.toLowerCase();
        game.style.display = gameName.includes(query) ? 'inline-block' : 'none';
    });

    if (![...games].some(game => game.style.display === 'inline-block')) {
        alert('No games found. Try checking your spelling!');
    }
});

// Visit Counter Logic
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);

// Display the count in the counter
document.getElementById('visit-count').textContent = visitCount;
