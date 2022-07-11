let data = document.getElementById("data");
let data2 = document.getElementById("data2");
let data3 = document.getElementById("data3");
let data4 = document.getElementById("data4");
let data5 = document.getElementById("data5");
let washButton = document.getElementById("wash");
let dryButton = document.getElementById("dry");
let sIron = document.getElementById("siron");
let shLaundry = document.getElementById("shlaundry");
let hCleaning = document.getElementById("hcleaning");
washButton.addEventListener("click", () => {
  data.classList.remove("hide");
  data2.classList.add("hide");
  data3.classList.add("hide");
  data4.classList.add("hide");
  data5.classList.add("hide");
});
dryButton.addEventListener("click", () => {
  data.classList.add("hide");
  data2.classList.remove("hide");
  data3.classList.add("hide");
  data4.classList.add("hide");
  data5.classList.add("hide");
});
sIron.addEventListener("click", () => {
  data.classList.add("hide");
  data2.classList.add("hide");
  data3.classList.remove("hide");
  data4.classList.add("hide");
  data5.classList.add("hide");
});

shLaundry.addEventListener("click", () => {
  data.classList.add("hide");
  data2.classList.add("hide");
  data3.classList.add("hide");
  data4.classList.remove("hide");
  data5.classList.add("hide");
});

hCleaning.addEventListener("click", () => {
  data.classList.add("hide");
  data2.classList.add("hide");
  data3.classList.add("hide");
  data4.classList.add("hide");
  data5.classList.remove("hide");
});
hhCleaning.addEventListener("click", () => {
  data.classList.add("hide");
  data2.classList.add("hide");
  data3.classList.add("hide");
  data4.classList.add("hide");
  data5.classList.remove("hide");
});
