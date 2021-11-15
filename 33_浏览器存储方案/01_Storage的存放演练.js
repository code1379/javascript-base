const loginBtn = document.querySelector("#btn");

loginBtn.addEventListener("click", function () {
  localStorage.setItem("name", "localStorage");
  sessionStorage.setItem("name", "sessionStorage");
});
