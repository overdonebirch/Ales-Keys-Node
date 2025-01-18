const systemsSelect = document.getElementById("systems-select");
const platformsSelect = document.getElementById("platforms-select");
const gameContainer = document.getElementById("all-games");
const templateScript = document.getElementById("game-template");

const indexURL = "/paginaInicio"
const systemsURL = "/todosLosSistemas";
const platformsURL = "/todasLasPlataformas";
const gamesSystemsURL = "/sistemas"
const gamesFilteredURL = "/juegosFiltrados"

document.addEventListener("DOMContentLoaded", async (e) => {
    try {
        await initializeFilters();
        eventListeners();
    } catch (error) {
        console.error('Error initializing filters or setting event listeners:', error);
    }
});

const initializeFilters = async () => {
    let promiseRoutes = [];
    promiseRoutes.push(getData(systemsURL));
    promiseRoutes.push(getData(platformsURL));

    try {
        let filtersPromises = await Promise.all(promiseRoutes);
        const systems = filtersPromises[0];
        const platforms = filtersPromises[1];
        if (systems) {
            fillSelect(systemsSelect, systems);
        }
        if (platforms) {
            fillSelect(platformsSelect, platforms);
        }
    } catch (error) {
        console.error('Error initializing filters:', error);
    }
}

const eventListeners = () => {
    systemsSelect.addEventListener("change", filterBySystems);
}

const filterBySystems = async (e) => {
    try {
        const result = await fetch(`${gamesFilteredURL}?system_id=${e.target.value}`);
        if (!result.ok) {
            throw new Error(`HTTP error! Status: ${result.status}`);
        }
        const games = await result.json();
        updateShownGames(games);
    } catch (error) {
        console.error('Error fetching filtered games:', error);
    }
}

const fillSelect = (element, data) => {
    try {
        data.forEach(d => {
            let option = document.createElement("option");
            option.textContent = d.name;
            option.value = d.id;
            element.appendChild(option);
        });
    } catch (error) {
        console.error('Error filling select options:', error);
    }
}

const getData = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const updateShownGames = (games) => {
    gameContainer.innerHTML = '';
    
    games.forEach(game => {
        const newGameBlock = replaceGameTemplate(game);
        gameContainer.appendChild(newGameBlock);
        console.log(newGameBlock);
    })
}



const replaceGameTemplate = (game) => {
    const blockHtml = templateScript.innerHTML;
    const newHtml = blockHtml.replace('{{img}}',game.img)
                    .replace('{{name}}',game.name)
                    .replace('{{price}}',game.price);

    const newBlock = document.createElement("div");
    newBlock.innerHTML = newHtml;
    return newBlock.firstChild;
}