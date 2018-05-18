const contentContainer = document.getElementById("mess")

function getContactHTML(character) {
  return /* @html */ `
  <div class="row">
    <div class="col-md-3">
      <div class="contacts">
        <div class="card" id="color-card">
          <div class="contact">
            <div class="card-body">
              <h4 class="card-text"  data-id="${character.id}" >${character.name}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-9 messagerie" id="messages">
      <div id="scroll">
      <div id="liste-messages" class="contenu-message">

      </div>
    </div>
        <form id="sendMessage">
        <input class="chat-input" required></input>
        <input type="submit" value="Envoyer" class="message-send" />
      </form>


    </div>
  </div>
</div>
`
}

console.log(location)
const id = location.search.split('=')
const characterId = id[1]


fetch(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${characterId}.json`)
.then(response => response.json())
.then(messages => {
	contentContainer.innerHTML = getContactHTML(messages)
})
