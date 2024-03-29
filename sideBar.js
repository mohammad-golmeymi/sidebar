const btn = document.querySelector(".ctrBtn");
const bar = document.querySelector(".sidebar");

btn.addEventListener("click", function () {
  btn.classList.toggle("open");
  bar.classList.toggle("show");
});
