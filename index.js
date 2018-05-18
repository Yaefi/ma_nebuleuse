const contentContainer = document.getElementById("content")

fetch("https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json")
.then(response => response.json())
.then(data => {
  let filteredData = data
  const filter = (parameter, value) => {
    filteredData = filteredData.filter(character => character[parameter] == value)
  }
  // filter("species", "human")
  // filter("gender", "female")
  console.log(filteredData)
  const planets = []
  for(character of filteredData) {
    const object = {}
    let search
    if(character.homeworld != undefined && Array.isArray(character.homeworld) == false) {
      search = planets.filter(world => world.planet == character.homeworld.toLowerCase())
    }
    else{
      search = planets.filter(world => world.planet == character.homeworld)
    }
    const searchUndefined = planets.filter(world => world.planet == "unknown")
    if(character.homeworld != undefined && Array.isArray(character.homeworld) == false && search.length == 0) {
      object.planet = character.homeworld.toLowerCase()
      object.number = 1
      planets.push(object)
    }
    if(character.homeworld != undefined && Array.isArray(character.homeworld) == false && search.length == 1) {
      for(planet of search) {
        planet.number += 1
      }
    }
    if(character.homeworld != undefined && Array.isArray(character.homeworld) == true) {
      let searchArray
      for(planet of character.homeworld) {
        searchArray = planets.filter(world => world.planet == planet.toLowerCase())
        if(searchArray.length == 0) {
          object.planet = planet.toLowerCase()
          object.number = 1
          planets.push(object)
        }
        if(searchArray.length == 1){
          for(planet of searchArray) {
            planet.number += 1
          }
        }
      }
    }
    if(character.homeworld == undefined && searchUndefined.length == 0) {
      object.planet = "unknown"
      object.number = 1
      planets.push(object)
    }
    if(character.homeworld == undefined && searchUndefined.length == 1) {
      for(planet of searchUndefined) {
        planet.number += 1
      }
    }
  }
  console.log(planets)
})
