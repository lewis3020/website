function showOutput() {
    var output = document.getElementById("output");
    output.innerHTML = "Selected options: ";

    var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
    for (var i = 0; i < checkboxes.length; i++) {
        output.innerHTML += checkboxes[i].value + ", ";
    }
    output.innerHTML = output.innerHTML.slice(0, -2);
}
function reset(){
    //uncheck boxes, scroll to top
    var boxes = document.querySelectorAll('input[type="checkbox"]')
    for(var checkbox of boxes)
        checkbox.checked=false;
    document.getElementById("output").innerHTML="";
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE, and Opera
}
//v4.1
//Update Feb 22nd, 2023