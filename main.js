const API_URL = 'https://pokeapi.co/api/v2/pokemon/';
const sendnum = document.getElementById('button');
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
            const table = document.createElement("table");
            table.innerHTML = `
			<thead>
			<tr>	
					<td>Experiencia</td>
					<td>Altura</td>
					<td>Peso</td>
					</tr>
			</thead>
			<tbody>
					<tr>
					<td>${data.base_experience}🐱‍👤</td>
					<td>${data.height}dm</td>
					<td>${data.weight}hg</td>
					</tr>
				</tbody>
					`;
            app.appendChild(table)
        })
}
getPokemon()
button.addEventListener('click', () => {
    getPokemon()
    num.value = "";
})
