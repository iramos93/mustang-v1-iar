var jsonRequest = new XMLHttpRequest();
var contactContainer = document.getElementById("contact-container");
var loadBtn = document.getElementById("load");

loadBtn.addEventListener("click", loadURL("https://mustang-index.azurewebsites.net/index.json"));

function loadURL(URL) {
    jsonRequest.open("GET", "https://mustang-index.azurewebsites.net/index.json");

    jsonRequest.onload = function() {
        var data = JSON.parse(jsonRequest.responseText);
        displayHTML(data);
    };

    jsonRequest.send();
}

function displayHTML(data) {
    var htmlDiv = "";

    for (i=0; i<data.length; i++) {

        htmlDiv += "<div class='contact'>";
        htmlDiv += "Name: " + data[i].Name + "<br>";
        htmlDiv += "Email: " + data[i].Email + "<br>";
        htmlDiv += "ContactURL: " + data[i].ContactURL;
        htmlDiv += "</div>";
    }
    contactContainer.insertAdjacentHTML('beforeend', htmlDiv);
}