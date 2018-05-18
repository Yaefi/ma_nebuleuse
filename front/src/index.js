const splashScreenHtml = require('./components/splashScreenHtml')
const jeuxHtml = require('./components/jeuxHtml')
const questions = require('./questions')

const contentContainer = document.getElementById("content")

fetch("https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json")
.then(response => response.json())
.then(data => console.log(data))

function afficheJeux() {
    contentContainer.innerHTML = jeuxHtml
    // affiche les questions
    questions()
}

// intro splash
function afficheSplashScreen() {
  contentContainer.innerHTML = splashScreenHtml;

  setTimeout(
    afficheJeux,
    100
  )
}
afficheSplashScreen()
// fin intro splash
