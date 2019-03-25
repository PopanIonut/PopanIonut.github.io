
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

//11.03.2019
function initMenu() {
    var links = document.querySelectorAll("#top-menu-bar a");
    console.info(links);
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = clikcOnMenuItem;
    }
}

function clikcOnMenuItem() {
console.warn('clicked on menu',this);
hideAllPages();
var pageId = this.getAttribute('data-page');
console.warn({pageId});
showPage(pageId);

//this - o sa ne zica pagina pe care am dat click, este elementu din link
}

function hideAllPages(){
    var pages = document.querySelectorAll('.page')
    for (var i = 0; i < pages.length; i++){
        pages[i].style.display='none';
    }
}

// var i = i este initializare
// i++ adica i din 0 se face 1
//apelam functia
initMenu();


function showSkills() { 
    // var allEndorsements = [8, 12, 19, 25, 1]
    // var skills = ['html', 'css', 'js', 'nodejs' , 'php'];
    var skills = [
        {name: 'html', endorsements: 8},
        {name: 'css', endorsements: 12},
        {name: 'js', endorsements: 19},
        {name: 'nodejs', endorsements: 25},
        {name: 'php', endorsements: 1}
    ];
    

    var htmlSkills = skills.map(function (skill, index) {
        var endorsements = ' <span class="endorsements">(' + skill.endorsements + ')</span>';
        return '<li>' + skill.name.toUpperCase() + endorsements +'</li>';
    });

    var ul = document.querySelector('#skills-page ul');
    ul.innerHTML = htmlSkills.join('');
}

hideAllPages();
showPage('skills-page');

showSkills(); 

