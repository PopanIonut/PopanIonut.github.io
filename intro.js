console.info("My first js file")

var name = "Ionut";
var employed = true;

console.warn("employed");
console.warn(employed);

console.info("Name:");
console.info(name);

name = "Ionut";

console.info("Name:");
console.info(name);


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
function hideHomePage() {
    document.getElementById('home-page').style.display = 'none';
}

function showSkillsPage() {
    document.getElementById('skills-page').style.display = 'block';
}

function clickOnSkills() {
    hidePage('home-page');
    hidePage('languages-page');
    hidePage('about-page');
    showPage('skills-page');
}
function clickOnHome() {
    hidePage('skills-page');
    hidePage('languages-page');
    hidePage('about-page');
    showPage('home-page');
}
function clickOnLanguages() {
    hidePage('skills-page');
    hidePage('home-page');
    hidePage('about-page');
    showPage('languages-page');
}
function clickOnAbout() {
    hidePage('skills-page');
    hidePage('home-page');
    hidePage('languages-page');
    showPage('about-page');
}

function hidePage(page) {
    document.getElementById(page).style.display = 'none';
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

