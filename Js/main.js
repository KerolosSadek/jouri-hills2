function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
window.setTimeout(openForm, 4000);

document.getElementsByClassName(".hubspot-link__container").style.display = "none"

setTimeout(() => {
  document.getElementsByClassName(".hubspot-link__container").style.display = "none"
}, 1000);