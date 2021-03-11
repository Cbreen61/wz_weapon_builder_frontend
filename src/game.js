class Game{
    constructor(id, name, publisher, image){
        this.id = id;
        this.name = name;
        this.publisher = publisher;
        this.image = image;
    }

    renderGame(){
        let gamesDiv = document.getElementById("games-container")
        gamesDiv.innerHTML +=
        `
        <ul>
        <h2> Name: ${this.name} </h2>
        <h4> Publisher: ${this.publisher} </h4>
        <p><img src="${this.image}"></p>
        </ul>
        <button class="delete-bttn" data-id=${this.id} onclick="deleteGame()>Delete Game</button>
        
        `   
        
    }
}