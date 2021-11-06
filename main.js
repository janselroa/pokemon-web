const API_URL = 'https://pokeapi.co/api/v2/pokemon/';
const num = document.getElementById('num');
const app = document.getElementById('app');
num.value = 6;
const getPokemon = () => {
    const pokemonId = num.value;
    fetch(`${API_URL}${pokemonId}`)
        .then(response => response.json())
        .then(data => {
            app.innerHTML = `
		<div id="atributos">
		<h2>${data.name}</h2>
		<div><img src="${data.sprites.front_default}" height="100"></div>
		</div>
		`;
            const container = document.createElement("div");
            container.classList.add("caracteristicas")
            container.innerHTML = `
			<h3 class="title">Caracteristicas</h3>
					<p>Nivel de Experiencia: ${data.base_experience}</p>
					<p>Altura: ${data.height}dm</p>
					<p>Peso: ${data.weight}hg</p>
					`;
            app.appendChild(container)
        })
}
getPokemon()
button.addEventListener('click', () => {
    getPokemon()
    num.value = "";
})
input.addEventListener('keyup', (e) => {
    if (e.key == "Enter") {
        getPokemon()
    }
})