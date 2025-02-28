const news = [
    {
        id: 3,
        title: 'Open Beta-testing for "Cave Of Mailce"',
        date: "February 20, 2025",
        content: '"Cave Of Malice" is finnaly open for world-wide beta testing, available on our website untill v1.0.0. This is a beta-version which means that it might contain some bugs. If you stumble upon any bugs, please report to the email <i>epicframe.email@gmail.com</i>.',
        image: "Assets/COM.png"
    },
    {
        id: 2,
        title: "New Game Release",
        date: "February 15, 2025 (leaving soon)",
        content: 'Epic Frame Studios is happy to announce that we are starting the development of a brand new game called "Cave of Malice". This game is a platformer game where you have to jump on platforms to get through and move on to the next level. We will update you as the time goes by. Note: The photo above is only our inspiration.',
        image: "Assets/photo-2.jpg"
    },
    {
        id: 1,
        title: 'Development of "Asteroid Avoider 3000"',
        date: "January 17, 2025",
        content: "With the latest update (v1.3) we are stopping further development of this game, but something interesting is coming soon.",
        image: "Assets/photo-1.png"
    }
];

const games = [
    {
        id: 2,
        title: "Cave of Malice",
        dtitle: "cave_of_malice",
        description: "A platformer set in a cave with cave creatures.",
        image: "Assets/COM.png",
        versions: [
            { version: "v0.1.0", date: "20 February, 2025", notes: "Initial launch (open beta testing)" }
        ]
    },
    {
        id: 1,
        title: "Asteroid Avoider 3000",
        dtitle: "asteroid_avoider",
        description: "A game where you have to avoid asteroids.",
        image: "Assets/AA3000.png",
        versions: [
            { version: "v1.3.0", date: "17 January, 2025", notes: "Added a new settings page" },
            { version: "v1.2.0", date: "9 January, 2025", notes: "New sprite and music" }
        ]
    }
];

const versions = {
    "Asteroid_Avoider_3000": [
        {
            id: 4,
            name: "1.3.0",
            description: `Update Content: <br>
                            - Added a settings page: <br>
    &nbsp;&nbsp;&nbsp;&nbsp;    - Added the ability to change the music volume <br>
    &nbsp;&nbsp;&nbsp;&nbsp;    - Added a key tutorial to play the game <br>
                            - Added a new player sprite <br>
                            - Added a local high-score leaderboard <br>
                            - Minor file optimisations`,
            date: "17 January, 2025",
            size: "7.1MB"
        },
        {
            id: 3,
            name: "1.2.0",
            description: `Update Content:
                            - Added a new sloweroid sprite <br>
                            - Added game music for the start menu <br>
                            - Added game optimizations <br>
                            - Enhanced the debugging mode (You can now enter debug mode by pressing 1) <br>
                            - Made sloweroid bigger in order to provide more challenge <br>
                            - Adjusted the sloweroid falling speed`,
            date: "9 January, 2025",
            size: "7.1MB"
        },
        {
            id: 2,
            name: "1.1.0",
            description: `Update Content: <br>
                            - Added a startup animation <br>
                            - Added different chances for different types of asteroids for each difficulty level <br>
                            - Added a debug mode <br>
                            - Fixed minor bugs`,
            date: "26 December, 2024",
            size: "98KB"
        },
        {
            id: 1,
            name: "1.0.0",
            description: "Initial launch",
            date: "20 December, 2024",
            size: "98KB"
        }
    ],
    "Cave_Of_Malice": [
        {
            id: 1,
            name: "0.1.0",
            description: "Initial launch in open beta testing. Note: This version will be removed after v1.0.0",
            date: "20 February, 2025",
            size: "71KB"
        }
    ]
}

function renderNews() {
    try {
        const newsContainer = document.getElementById('newsContainer');
        newsContainer.innerHTML = news.map(item => `
            <div class="news-card">
                <img src="${item.image}" alt="${item.title}" class="news-image">
                <div class="news-content">
                    <h3 class="text-xl font-semibold">${item.title}</h3>
                    <p class="news-date">${item.date}</p>
                    <p>${item.content}</p>
                </div>
            </div>
        `).join('');
    } catch (TypeError) {}
}

function renderGames() {
    try {
        const gamesContainer = document.getElementById('gamesContainer');
        gamesContainer.innerHTML = games.map(game => `
            <div class="game-card">
                <div class="game-image-container">
                    <img src="${game.image}" alt="${game.title}" class="game-image">
                </div>
                <div class="game-details">
                    <h3 class="text-2xl font-bold mb-4">${game.title}</h3>
                    <p class="text-gray-300 mb-6">${game.description}</p><br>
                    <a class="downloads" href="${game.dtitle}.html">Browse versions</a>
    
                    <div class="version-history">
                        <h4 class="text-lg font-semibold mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="icon" style="display: inline; margin-right: 0.5rem;">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            Version History
                        </h4>
                        ${game.versions.map(v => `
                            <div class="version-card">
                                <div class="version-header">
                                    <span class="font-semibold">${v.version}</span>
                                    <span class="text-sm">${v.date}</span>
                                </div>
                                <p class="text-gray-300">${v.notes}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    } catch (TypeError) {}
}

function renderVersions(gameName) {
    const versionsContainer = document.getElementById('versionsContainer');

    // Check if the game exists in the versions object
    if (!versions[gameName] || versions[gameName].length === 0) {
        versionsContainer.innerHTML = "<p>No versions available for this game.</p>";
        return;
    }

    // Render versions for the specified game
    versionsContainer.innerHTML = versions[gameName].map(version => `
        <div class="version-card">
            <h3>Version ${version.name}</h3>
            <p>${version.description}</p>
            <div class="version-info">
                <p><strong>Release Date:</strong> ${version.date}</p>
                <p><strong>Size:</strong> ${version.size}</p>
            </div>
            <button class="download-btn" onclick="downloadVersion('${gameName}', '${version.name}')">
                Download Version ${version.name}
            </button>
        </div>
    `).join('');
}


function downloadVersion(game, version) {
    a = `Versions/${game}/${game}_v${version}.zip`
    window.location.href = a
    alert(`Downloading version ${version}...`);
}

// Initial render
renderNews();
renderGames();