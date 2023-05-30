function activate(){
    //generates string of checked boxes
    var checkedStuff = document.getElementsByName("chek");
    var out = document.getElementById("output");
    out.innerHTML="";
    var s = "";
    for(var checkbox of checkedStuff)
        if(checkbox.checked)
            s+=(checkbox.value+", ");
    s=s.trim();
    s=s.substring(0,s.length-1);
    out.innerHTML=s;
    copyToClipboard(s);
}
function copyToClipboard(str){
    //exactly what it says on the tin
    var tempElement = document.createElement("textarea");
    tempElement.value = str;
    tempElement.setAttribute("readonly", "");
    tempElement.style.position = "absolute";
    tempElement.style.left = "-9999px";
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
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