document.addEventListener('DOMContentLoaded',() => {
    createForm();
    fetchGames();
})

const BASE_URL = "http://[::1]:3000/api/v1"

//read games
function fetchGames(){
    fetch(`${BASE_URL}/games`)
    .then(resp => resp.json())
    .then(games =>{
        for (const game of games){
            let g = new Game(game.id, game.name, game.publisher, game.image)
            g.renderGame();
        }
    })

}

//create new game 
function createForm(){
    let gamesForm = document.getElementById("games-form")

    gamesForm.innerHTML +=
    `
    <form>
        <label> Name:</label><input type="text" id = "name"><br>
        <label> Publisher:</label><input type="text" id = "publisher"><br>
        <label> Image:</label><input type="text" id = "image"><br>
        <input type="submit" value="Add Game">
    </form>
    `
    gamesForm.addEventListener("submit", gamesFormSubmission)
}

function gamesFormSubmission(){
    event.preventDefault();
    let name = document.getElementById("name").value
    let publisher = document.getElementById("publisher").value
    let image = document.getElementById("image").value
    
    let game = {
        name: name,
        publisher: publisher,
        image: image
    }

    fetch(`${BASE_URL}/games`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(game)
    })
    .then(resp => resp.json())
    .then(game => {
        let g = new Game(game.id, game.name, game.publisher, game.image)
            g.renderGame();
    })
}

function deleteGame(){

    let gameId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/games/${gameId}`, {
        method: 'DELETE'
    })
globalThis.location.reload();

}
