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

    let found = false;
    games.forEach(game => {
        const gameName = game.dataset.game.toLowerCase();
        if (gameName.includes(query)) {
            game.style.display = 'inline-block';
            found = true;
        } else {
            game.style.display = 'none';
        }
    });

    if (!found) alert('No games found. Check your spelling!');
});
