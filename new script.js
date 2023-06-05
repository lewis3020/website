
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