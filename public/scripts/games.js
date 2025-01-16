const systemsSelect = document.getElementById("systems-select");
const platformsSelect = document.getElementById("platforms-select");
const systemsURL = "/todosLosSistemas";
const platformsURL = "/todasLasPlataformas";

document,addEventListener("DOMContentLoaded",async (e) => {

    let promiseRoutes = [];
    promiseRoutes.push(getData(systemsURL));
    promiseRoutes.push(getData(platformsURL));

    try{
        let filtersPromises = await Promise.all(promiseRoutes);
        const systems = filtersPromises[0];
        const platforms = filtersPromises[1];
        if(systems){
            fillSelect(systemsSelect,systems)
        }
        if(platforms){
            fillSelect(platformsSelect,platforms)
        }
    }
    catch(error){
        console.log(error)
    }
})

const fillSelect = (element,data) => {
    data.forEach(d => {
        let option = document.createElement("option");
        option.textContent = d.name;
        option.value = d.id;
        element.appendChild(option)
    });
}

const getData = async (url) => {
    try{
        const res = await fetch(url)
        const data = await res.json();  
        return data;
    }
    catch(error){
        console.log(error)
    }
}