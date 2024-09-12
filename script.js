var container = document.getElementById('Education');
var width = container.offsetWidth;
console.log('Width:', width);
var edu=document.getElementById("edu")
var jl=document.getElementById("jl")
var jlp=document.getElementById("jlp")
if (width < 1181) {
    container.style.height = '1600px';
}

var nav = document.getElementById('n');
console.log(nav);

var c = document.getElementById("c");

if (nav.offsetWidth < 500) {
    edu.style.margin="17px";
    nav.style.height = "220px";
    nav.style.justifyContent="space-evenly"
    c.style.cssText += "position:absolute; top:90px; right: 50px" ; // Corrected 'positon' to 'position' and added semicolon
    
}
