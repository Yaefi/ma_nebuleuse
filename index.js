const contentContainer = document.getElementById("content")




function getHomeHTML(character) {

	return /* @html */ `

	<div class="affiliations"  style="background-image: url(${character.image})">
		<div class="character-infos">
			<div class="character-name">${character.name}</div>
			<div class="character-born">Born: ${character.born}</div>
			<div class="character-died">Died: ${character.died}</div>
			<a href="profile.html?id=${character.id}">About me </a>
		</div>
	</div>
`
}




fetch("https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json")
.then(response => response.json())
.then(accueil => {
	contentContainer.innerHTML = getHomeHTML(accueil)
console.log(getHomeHTML(accueil))
})
