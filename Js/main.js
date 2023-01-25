function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
window.setTimeout(openForm, 4000);

// document.getElementsByClassName("sproket").style.display = "none"

setTimeout(() => {
  document.getElementsByClassName("sproket").style.display = "none"
}, 10000);