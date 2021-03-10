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
            console.log(game)
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
        <input type="submit" vaule="Add Game">
    </form>
`
}