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
        <h2 style="text-align:center"> Name: ${this.name} </h2>
        <h4 style="text-align:center"> Publisher: ${this.publisher} </h4>
        <p><img src="${this.image}"></p>
        </ul>
        
        `
       
        
    }
}