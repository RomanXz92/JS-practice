const mainMenu = document.querySelector("#main-menu");
mainMenu.addEventListener("click", function (e) {
  const { target, currentTarget } = e;
  if (target.tagName === "A") {
    const preActive = currentTarget.querySelector(".active");
    if (preActive) {
      preActive.classList.remove("active");
    }
    target.classList.add("active");
  }
});
