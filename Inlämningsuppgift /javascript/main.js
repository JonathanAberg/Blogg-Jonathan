document.addEventListener("DOMContentLoaded", function () {
  const filterItems = document.querySelectorAll(".filter-item");

  filterItems.forEach(function (filterItem) {
    filterItem.addEventListener("click", function () {
      const value = filterItem.getAttribute("data-filter");
      const postBoxes = document.querySelectorAll(".post-box");

      if (value === "allt") {
        postBoxes.forEach(function (postBox) {
          postBox.style.display = "block";
        });
      } else {
        postBoxes.forEach(function (postBox) {
          if (postBox.classList.contains(value)) {
            postBox.style.display = "block";
          } else {
            postBox.style.display = "none";
          }
        });
      }
      // Lägg till "aktiv" klass till klickade filterknappen.
      filterItem.classList.add("active-filter");
      filterItem.parentNode
        .querySelectorAll(".filter-item")
        .forEach(function (sibling) {
          if (sibling !== filterItem) {
            sibling.classList.remove("active-filter");
          }
        });
    });
  });
});

let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
