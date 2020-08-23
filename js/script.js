'use strict';

const animationTargetElements = document.querySelectorAll(".companyMessage");
for (let i = 0; i < animationTargetElements.length; i++) {
  const targetElement = animationTargetElements[i],
        texts = targetElement.textContent,
        textsArray = [];

  targetElement.textContent = "";

  for (let j = 0; j < texts.split("").length; j++) {
    if (texts.split("")[j] === " ") {
      textsArray.push(" ");
    } else {
      textsArray.push('<span style="animation-delay: ' + (j * .2) + 's;">' + texts.split("")[j] + '</span>')
  }
}
  for (let k = 0; k < textsArray.length; k++) {
    targetElement.innerHTML += textsArray [k];
  }
}

const targetElement = document.querySelectorAll(".recruitTarget");
console.log("画面の高さ", window.innerHeight)
document.addEventListener("scroll", function() {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .6
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
})

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("menuBtn").addEventListener("click", function() {
    document.getElementById("profileText").classList.toggle("active");
    document.getElementById("menuBtn").classList.toggle("active");
    document.getElementById("mask").classList.toggle("active");
  })
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("recruitTarget1").addEventListener("click", function() {
    document.getElementById("pic1").classList.toggle("active");
    document.getElementById("info1").classList.toggle("active");
  })
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("recruitTarget2").addEventListener("click", function() {
    document.getElementById("pic2").classList.toggle("active");
    document.getElementById("info2").classList.toggle("active");
  })
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("recruitTarget3").addEventListener("click", function() {
    document.getElementById("pic3").classList.toggle("active");
    document.getElementById("info3").classList.toggle("active");
  })
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("recruitTarget4").addEventListener("click", function() {
    document.getElementById("pic4").classList.toggle("active");
    document.getElementById("info4").classList.toggle("active");
  })
});





document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("navBtn").addEventListener("click", function() {
    document.getElementById("navBtn").classList.toggle("active");
    document.getElementById("nav").classList.toggle("active");
    document.getElementById("mask1").classList.toggle("active");
  })
});
