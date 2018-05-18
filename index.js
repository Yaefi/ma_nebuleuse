const contentContainer = document.getElementById("content")

let filteredData = []
const planetsImage = [
  { image:  "https://sylvainkosc.github.io/planete/2planete.png",
    planets: ["tatooine"]},
  { image: "https://sylvainkosc.github.io/planete/16planete.png",
    planets: ["naboo", "alderaan", "eriadu", "trandosha", "malastare", "cerea", "champala", "serenno", "zolan", "kalee", "utapau", "parnassos"]},
  { image: "https://sylvainkosc.github.io/planete/10planete.png",
    planets: ["stewjon", "sullust", "nar shaddaa"]},
  { image: "https://sylvainkosc.github.io/planete/17planete.png",
    planets: ["kashyyyk","rodia", "toydaria", "haruun kal", "yavin 4"]},
  { image: "https://sylvainkosc.github.io/planete/21planete.png",
    planets: ["corellia", "chandrila", "neimoidia", "quermia", "dorin", "shili"]},
  { image: "https://sylvainkosc.github.io/planete/3planete.png",
    planets: ["bestine", "dathomir"]},
  { image: "https://sylvainkosc.github.io/planete/TROU.png",
    planets: ["unknown"]},
  { image: "https://sylvainkosc.github.io/planete/11planete.png",
    planets: ["kamino", "mon cala", "glee anselm"]},
  { image: "https://sylvainkosc.github.io/planete/15planete.png",
    planets: ["socorro", "geonosis"]},
  { image: "https://sylvainkosc.github.io/planete/12planete.png",
    planets: ["bespin", "endor"]},
  { image: "https://sylvainkosc.github.io/planete/14planete.png",
    planets: ["coruscant"]},
  { image: "https://sylvainkosc.github.io/planete/13planete.png",
    planets: ["ryloth", "skako"]},
  { image: "https://sylvainkosc.github.io/planete/9planete.png",
    planets: ["aleen", "jakku"]},
  { image: "https://sylvainkosc.github.io/planete/8planete.png",
    planets: ["vulpter", "umbara"]},
  { image: "https://sylvainkosc.github.io/planete/19planete.png",
    planets: ["troiken", "scipio"]},
  { image: "https://sylvainkosc.github.io/planete/24planete.png",
    planets: ["tund", "concord dawn"]},
  { image: "https://sylvainkosc.github.io/planete/18planete.png",
    planets: ["iktotch"]},
  { image: "https://sylvainkosc.github.io/planete/20planete.png",
    planets: ["mirial", "ojom"]}
]
const planets = []
let orderedPlanets

fetch("https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json")
.then(response => response.json())
.then(data => {
  const filter = (parameter, value) => {
    if(value.length == 1 && filteredData.length == 0) {
      filteredData = data
      filteredData = filteredData.filter(character => character[parameter] == value[0])
    }
    else if(value.length == 1 && filteredData.length > 0) {
      filteredData = filteredData.filter(character => character[parameter] == value[0])
    }
    else if(value.length > 1 && filteredData.length == 0) {
      for(criteria of value) {
        filteredData.push(data.filter(character => character[parameter] == criteria))
      }
      let concatenate = filteredData[0]
      for(i = 1; i < filteredData.length; i++) {
        concatenate = concatenate.concat(filteredData[i])
      }
      filteredData = concatenate.sort(function compare(a, b) {
        return a.id - b.id
      })
    }
    else if(value.length > 1 && filteredData.length > 0) {
      let temp = []
      for(criteria of value) {
        temp.push(filteredData.filter(character => character[parameter] == criteria))
      }
      let concatenate = temp[0]
      for(i = 1; i < temp.length; i++) {
        concatenate = concatenate.concat(temp[i])
      }
      temp = concatenate.sort(function compare(a, b) {
        return a.id - b.id
      })
      filteredData = temp
    }
  }

  const getOrderedPlanets = match => {
    for(character of match) {
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
        for(image of planetsImage) {
          if(image.planets.includes(character.homeworld)) {
            object.image = image.image
          }
        }
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
            for(image of planetsImage) {
              if(image.planets.includes(planet)) {
                object.image = image.image
              }
            }
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
        for(image of planetsImage) {
          if(image.planets.includes("unknown")) {
            object.image = image.image
          }
        }
        planets.push(object)
      }
      if(character.homeworld == undefined && searchUndefined.length == 1) {
        for(planet of searchUndefined) {
          planet.number += 1
        }
      }
      orderedPlanets = planets.sort(function compare(a, b) {
        return b.number - a.number
      })
    }
  }

  filter("species", ["droid", "human", "wookiee"])
  filter("eyeColor", ["blue", "gray-blue", "yellow"])
  filter("gender", ["male"])
  getOrderedPlanets(filteredData)

  console.log(filteredData)
  console.log(orderedPlanets)
})
