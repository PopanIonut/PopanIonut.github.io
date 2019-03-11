
function getWelcomeMsg() {
return "Wellcome to my site!";
}


function getColor(){
    var date = new Date();
    console.log(date.getMinutes());
    if (date.getMinutes() >16) { return "green" }
    return "red";

}
//Exemplu ok!

function hidePage(page) {
   var el = document.getElementById(page).style.display = 'none';
    el.style.display = 'none';
}

function showPage(page) {
    document.getElementById(page).style.display = 'block';
}





var wellcome = getWelcomeMsg();
console.info(wellcome)

var summaryElement = document.getElementById("summary");
console.info("summaryElement", summaryElement);
var color = getColor();
summaryElement.style.color = color;

