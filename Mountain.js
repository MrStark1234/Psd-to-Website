var text11 = document.querySelector(".text-11");
var text12 = document.querySelector(".text-12");
var tab1 = document.querySelector(".tab-1");

text11.addEventListener("click", function () {
  tab1.style.background = `url(${"images/photo-1417021423914-07097.png"})`;
  text12.style.textDecoration = "none";
  text11.style.textDecoration = "underline";
});

text12.addEventListener("click", function () {
  tab1.style.background = `url(${"images/photo-1414449381078-c7768.png"})`;
  text11.style.textDecoration = "none";
  text12.style.textDecoration = "underline";
});
