const icon = document.getElementById("fa-less");
const faContent = document.getElementById("fa-content");
icon.addEventListener("click", function () {
  faContent.classList.toggle("visible");
});
