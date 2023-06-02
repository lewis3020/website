const inputName = document.getElementById("add");
const btnShow = document.getElementById("btnShow");
const pShow = document.getElementById("pShow");

btnShow.addEventListener("click", () => {
  const text = inputName.value;
  pShow.textContent = text;
});