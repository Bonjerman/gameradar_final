function darkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    element.classList.remove("light-mode");
}

function lightMode(){
    var element = document.body;
    element.classList.toggle("light-mode");
    element.classList.remove("dark-mode");
}

function smallFont(){
    var element = document.body;
    element.classList.add("small-font");
    element.classList.remove("medium-font");
    element.classList.remove("large-font");
}

function mediumFont(){
    var element = document.body;
    element.classList.add("medium-font");
    element.classList.remove("small-font");
    element.classList.remove("large-font");
}

function largeFont(){
    var element = document.body;
    element.classList.add("large-font");
    element.classList.remove("medium-font");
    element.classList.remove("small-font");
}

function ChangeText(){
    var name = document.getElementById("WelcomeForm").fname.value;
    var welcome = "cheers love. "+ name + "!";
    document.getElementById("WelcomeText").innerHTML = welcome;
}

function refreshPage(){
    window.location.reload();
} 