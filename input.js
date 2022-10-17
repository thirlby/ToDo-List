const divList= document.querySelector('.list-group');
var c = 0;

document.getElementById("addList").onclick = function(){
    var input = document.getElementById("myInput").value;
    var createItem = document.createElement('li');
    createItem.innerHTML = input;
    divList.appendChild(createItem);
    document.getElementById("myInput").value = null;
    c++;
}

document.getElementById("clearList").onclick = function(){
    while (c >= 0) {
        divList.removeChild(divList.firstChild);
        c--;
    }
}