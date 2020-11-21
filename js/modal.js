const users = document.querySelectorAll(".user-component");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const close = document.querySelector(".close");

users.forEach((user) => {
  const image = user.querySelector("img");

  user.addEventListener("click", () => {
    modal.classList.add("appear");
    modalImg.src = image.src;

    close.addEventListener("click", () => {
      modal.classList.remove("appear");
    });
  });
});