const contentContainer = document.getElementById("character-details")

function getOtherProfileHTML(character) {
	return  /* @html */`

  <div class="row">
  <div class="col-md-2">
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${character.image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text"></p>

  </div>
	<a href="messagerie.html?id=${character.id}" class="btn btn-primary bouton-photo">Contacter</a>
</div>

</div>
    <div class="col-md-8 offset-md-2">
    <form id="formProfile" action="/informations-personnelles" method="POST">
          <div class="form-group row">
              <label for="name" class="col-sm-2 col-form-label">Name :</label>
              <div class="col-sm-6">
                  <input type="text" class="form-control" id="name" name="name"  value="${character.name}">
              </div>
          </div>
          <div class="form-group row">
              <label for="height" class="col-sm-2 col-form-label">Height:</label>
              <div class="col-sm-6">
                  <input type="text" class="form-control" id="height" name="height"  value="${character.height}">
              </div>
          </div>

          <div class="form-group row">
              <label for="gender" class="col-sm-2 col-form-label">Gender :</label>
              <div class="col-sm-6">
                  <input type="text" class="form-control" id="gender" name="gender"
                   value="${character.gender}">
              </div>
          </div>
          <div class="form-group row">
              <label for="species" class="col-sm-2 col-form-label">Species : </label>
              <div class="col-sm-6">
                  <input type="text" class="form-control" id="species" name="species" value="${character.species}">
              </div>
          </div>
          <div class="form-group row">
              <label for="age" class="col-sm-2 col-form-label">Age : </label>
              <div class="col-sm-6">
                  <input type="text" class="form-control" id="age" name="age" value="">
              </div>
          </div>
          <div class="form-group row">
              <label for="age" class="col-sm-2 col-form-label">Homeworld : </label>
              <div class="col-sm-6">
                  <input type="text" class="form-control" id="homeworld" name="homeworld" value="${character.homeworld}"
                  >
              </div>
          </div>
          </form>
        </div>
        </div>
  `
}




console.log(location)
const id = location.search.split('=')
const characterId = id[1]


fetch(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${characterId}.json`)
.then(response => response.json())
.then(profile => {
	contentContainer.innerHTML = getOtherProfileHTML(profile)
})
