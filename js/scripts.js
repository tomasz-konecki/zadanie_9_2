var femaleNames = ["Asia", "Kasia", "Ola", "Jola"];
var maleNames = ["Piotrek", "Marek", "Arek", "Jarek"];

var allNames = femaleNames.concat(maleNames);
var newName = "Marian";

if (allNames.includes(newName) === false) {
    allNames.push(newName);
} else {
    
}
document.getElementById("names").textContent = allNames.join(' ');
