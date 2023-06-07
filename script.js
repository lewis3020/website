function showOutput() {
    var output = document.getElementById("output");
    output.innerHTML = "Problems: ";

    var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
    for (var i = 0; i < checkboxes.length; i++) {
        output.innerHTML += checkboxes[i].value + ", ";
    }
    output.innerHTML = output.innerHTML.slice(0, -2);
}
