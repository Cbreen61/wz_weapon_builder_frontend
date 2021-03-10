document.addEventListener('DOMContentLoaded',() => {
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
            console.log(g)
        }
    })

}