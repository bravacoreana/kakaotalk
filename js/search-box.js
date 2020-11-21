const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-box");
const listItems = document.querySelectorAll(".friends");
const username = document.querySelectorAll(".friends-name");

searchBtn.addEventListener("click", () => {
  if (searchBox.classList.contains("inputPopup")) {
    searchBox.classList.remove("inputPopup");
    searchFriend;
  } else {
    searchBox.classList.add("inputPopup");
  }
});