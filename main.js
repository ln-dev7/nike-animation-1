import "./style.scss";
import gsap from "gsap";

const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");
const card4 = document.querySelector(".card-4");

const shoesContainer = document.querySelector(".shoes-container");

// transform: translateX(40%);
// transform: translateX(15%);
// transform: translateX(-11%);
// transform: translateX(-36%);

card1.addEventListener("click", () => {
  gsap.to(shoesContainer, {
    x: "40%",
  });
  gsap.to("body", {
    background: "#a1034a80",
  });
  gsap.to(".card, .shoe", {
    opacity: 0.5,
  });
  gsap.to(".card-1, .shoe-1", {
    opacity: 1,
  });
});

card2.addEventListener("click", () => {
  gsap.to(shoesContainer, {
    x: "15%",
  });
  gsap.to("body", {
    background: "#2D5F84",
  });
  gsap.to(".card, .shoe", {
    opacity: 0.5,
  });
  gsap.to(".card-2, .shoe-2", {
    opacity: 1,
  });
});

card3.addEventListener("click", () => {
  gsap.to(shoesContainer, {
    x: "-11%",
  });
  gsap.to("body", {
    background: "#9ED065",
  });
  gsap.to(".card, .shoe", {
    opacity: 0.5,
  });
  gsap.to(".card-3, .shoe-3", {
    opacity: 1,
  });
});

card4.addEventListener("click", () => {
  gsap.to(shoesContainer, {
    x: "-36%",
  });
  gsap.to("body", {
    background: "#1B4F87",
  });
  gsap.to(".card, .shoe", {
    opacity: 0.5,
  });
  gsap.to(".card-4, .shoe-4", {
    opacity: 1,
  });
});
