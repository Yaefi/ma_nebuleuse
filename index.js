const contentContainer = document.getElementById("content")

fetch("https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json")
.then(response => response.json())
.then(data => console.log(data))

// intro splash
const jeuxHtml = `
<div id="galaxy">
            <div class="bg"></div>
            <div class="stars-back"></div>
            <div class="stars-middle"></div>
            <div class="stars-front"></div>
            <div class="bg center"></div>
        </div>`
// finsplash
const  splashScreenHtml  = `
<div class="starwars-demo">
          <img src="https://sylvainkosc.github.io/planete/1love.png" alt="Star" class="star"/>
          <img src="https://sylvainkosc.github.io/planete/nebuleuse.png" alt="Wars" class="wars"/>
    <h2 class="byline" id="byline">Watch out for the black hole</h2>
</div>
`
function afficheJeux() {
    contentContainer.innerHTML = jeuxHtml
}



// intro splash
function afficheSplashScreen() {
    contentContainer.innerHTML = splashScreenHtml;

    setTimeout(
        afficheJeux,
      10000
    )
  }
  afficheSplashScreen()
// fin intro splash  
