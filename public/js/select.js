
async function select () {

const dropdown = document.querySelector(".dropdown");
const dropdown_btn = document.querySelector(".dropdown-btn");
const dropdown_content = document.querySelector(".dropdown-content");
const dropdown_item = document.querySelectorAll(".dropdown-item");
const arrow = document.querySelector(".fas");

document.addEventListener("click", function (e) {
if (e.target == dropdown_btn) {
  return;
} else {
  if (dropdown_content.classList.contains("active")) {
    dropdown_content.classList.remove("active");
    dropdown_btn.classList.remove("active");
    dropdown_btn.classList.remove("active");
    arrow.classList.remove("fa-chevron-up");
  }
}
});

dropdown.addEventListener("click", function () {
this.classList.toggle("active");
dropdown_content.classList.toggle("active");
dropdown_btn.classList.toggle("active");
arrow.classList.toggle("fa-chevron-up");
});

for (let i = 0; i < dropdown_item.length; i++) {
dropdown_item[i].addEventListener("click", function () {
  dropdown_btn.getElementsByTagName("p")[0].textContent = this.textContent;
  // console.log(this.dataset.value);
});
}


}
