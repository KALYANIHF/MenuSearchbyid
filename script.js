const buttons = document.querySelectorAll(".btn");
const menu = document.querySelectorAll(".menu");
buttons.forEach((e) => {
  e.addEventListener("click", () => {
    let id = e.dataset.id;

    if (id == "All") {
      menu.forEach((elem) => {
        elem.classList.remove("disable");
      });
    } else {
      menu.forEach((elem) => {
        if (elem.dataset.id !== id) {
          elem.classList.add("disable");
        } else {
          elem.classList.remove("disable");
        }
      });
    }
  });
});
