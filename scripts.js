// Games Functions
var modalGames = document.getElementById("modal-games");
var gamesList = document.getElementsByClassName("games-list")[0];

function addGameList(){
    modalGames.style.display = "block";
}

function closeModalGames() {
    modalGames.style.display= "none";
}

function addGame() {
    let imgGame = document.querySelector("#img-game");
    let linkGame = document.querySelector("#link-game");

    gamesList.innerHTML = `
    <li>
        <a 
        target="_blank"
        href="${linkGame.value}">
            <img src="${imgGame.value}" alt="" />
        </a>
    </li>` + gamesList.innerHTML;
 

     alert(`Adicionado com sucesso!`);
     modalGames.style.display = "none";
}

// Cannel Functions
var modalChannel = document.getElementById("modal-channel");
var channelList = document.getElementsByClassName("channel-list")[0];

function addChannelList(){
    modalChannel.style.display = "block";
}

function closeModalChannel() {
    modalChannel.style.display= "none";
}

function addChannel() {
    let imgChannel = document.querySelector("#img-channel");
    let linkChannel = document.querySelector("#link-channel");

    channelList.innerHTML = `
    <li>
        <a 
        target="_blank"
        href="${linkChannel.value}">
            <img src="${imgChannel.value}" alt="" />
        </a>
    </li>` + channelList.innerHTML;
 

     alert(`Adicionado com sucesso!`);
     modalChannel.style.display = "none";
}






