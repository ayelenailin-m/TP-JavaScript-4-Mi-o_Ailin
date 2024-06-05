const url = "https://rickandmortyapi.com/api/character";
const elConteiner = document.getElementById("conteiner");



const solicitudFetch = async (url) => {
    try {
        const respuesta = await fetch(url);
        const info = await respuesta.json();
        

        info.results.forEach(pregunt =>{
            const item = document.createElement("div");
            item.className = "objeto";
            item.innerHTML += `
            <h1>${pregunt.name}</h1>
            <img src= "${pregunt.image}">
            `;
            elConteiner.appendChild(item);
        });
    } catch (error){
        console.log("Hubo un error");
    }
};
solicitudFetch(url);
