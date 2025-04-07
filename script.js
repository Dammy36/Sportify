const list = document.getElementById("name");
const items = document.getElementById("account-list");
list.addEventListener("click", function () {
  items.classList.toggle("account-list-show");
});

/*window.addEventListener("scroll", function () {
  let header = document.querySelector(".grid-item-1-container");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.5)";
  } else {
    header.style.boxShadow = "none";
  }
});
*/

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
