const list = document.getElementById("name");
const items = document.getElementById("account-list");
list.addEventListener("click", function () {
  items.classList.toggle("account-list-show");
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".grid-item-1-container");

  const observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting) {
        header.classList.remove("shadow");
      } else {
        header.classList.add("shadow");
      }
    },
    { threshold: [0] }
  );

  observer();
});
