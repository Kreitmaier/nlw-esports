var modal = document.getElementById("modal-games");

var btn = document.getElementById("btn-add-games");

var span = document.getElementsByClassName("btn-close")[0];

btn.onclick = () => {
    modal.style.display = "block";
}

span.onclick = () => {
    modal.style.display = "none"
} 



