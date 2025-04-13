const list = document.getElementById("name");
const items = document.getElementById("account-list");
list.addEventListener("click", function () {
  items.classList.toggle("account-list-show");
});
