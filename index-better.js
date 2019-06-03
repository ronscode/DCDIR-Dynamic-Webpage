theContainer = document.getElementById("container");
aDiv = document.createElement("div");

aDiv.innerHTML = "hello";

var aDiv = document.createElement("div");
var aTest = document.createTextNode("The Nav goes here");
aDiv.appendChild(aTest);

var navBar = document.getElementById("container");
theContainer.appendChild(aDiv);

navBar.className = "header";
