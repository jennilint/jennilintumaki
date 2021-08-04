function openDropDownMenu(){
    if (document.getElementById("dropDownMenu").style.display == "none"){
        document.getElementById("dropDownMenu").style.display = "block";
    }
    else {
        document.getElementById("dropDownMenu").style.display = "none";
    } 
};

document.getElementById("dropDownButton").addEventListener("click", function(){openDropDownMenu()})

window.onclick = function(event) {
    if (document.getElementById("dropDownButton").contains(event.target)) {
    }
    else {
        document.getElementById("dropDownMenu").style.display = "none"; 
    }
}