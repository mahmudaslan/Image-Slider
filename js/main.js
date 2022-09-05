let sliderImg = document.querySelectorAll(".container img");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let bullets = document.querySelector(".bullets-container");

let slidesCount = sliderImg.length;

let currentSlide = 0;

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

function nextSlide() {
  if (currentSlide === sliderImg.length - 1) {
    currentSlide = -1;
  } else {
    currentSlide++;
    theChecker();
  }
}
function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = sliderImg.length;
  } else {
    currentSlide--;
    theChecker();
  }
}

let paginationElement = document.createElement("ul");

paginationElement.className = "bullets";

for (let i = 0; i < slidesCount; i++) {
  let paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationElement.appendChild(paginationItem);
}
bullets.appendChild(paginationElement);

let bulletsLi = document.querySelectorAll(".bullets-container ul li");

bulletsLi.forEach((ele) => {
  ele.onclick = () => {
    currentSlide = parseInt(ele.dataset.index);
    theChecker();
    console.log(parseInt(ele.dataset.index));
  };
});
theChecker();

function theChecker() {
  removeAll();
  sliderImg[currentSlide].classList.add("active");
  bulletsLi[currentSlide].classList.add("active");
}

function removeAll() {
  sliderImg.forEach((img) => img.classList.remove("active"));
  bulletsLi.forEach((li) => li.classList.remove("active"));
}
