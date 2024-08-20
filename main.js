import { gsap } from "gsap";

let navbarIcons = document.getElementsByClassName("fontawesome");
let navbarIconsArray = Array.from(navbarIcons);
let navbarTag = document.getElementsByTagName("i");
let root = document.querySelector(":root");
let rootStyle = getComputedStyle(root);
let colorThemeGold = rootStyle.getPropertyValue("--complementaryColor");
let colorThemGoldMouseOver = rootStyle.getPropertyValue(
  "--colorThemGoldMouseOver"
);
let linkedInUrl = "https://www.linkedin.com/in/richard-gregory-5744a226a/";

let elementNavbar_Menu = document.getElementById("navbar_menu");
let elementLinkedIn = document.getElementById("linkedIn");
let elementHamburger = document.getElementById("hamburger");
let elementHamburgerMenuContainer = document.getElementById(
  "hamburgerMenuContainer"
);

let desktop = false;
let mobile = false;

let windowInnerWidth = window.innerWidth;
let elementClientWidth = document.documentElement.clientWidth;

window.onload = function () {
  window.addEventListener(
    "resize",
    function (event) {
      windowInnerWidth = window.innerWidth;
      elementClientWidth = document.documentElement.clientWidth;
      manageMobileDestkopDifferences();
    },
    true
  );
  manageMobileDestkopDifferences();
};

function manageMobileDestkopDifferences() {
  if (elementClientWidth < 500) {
    mobile = true;
    desktop = false;
  } else {
    mobile = false;
    desktop = true;
  }
  createHoverEventsForIcons(navbarIcons);
  elementLinkedIn.addEventListener("click", () => {
    //   window.location.href = linkedInUrl;
    window.open(linkedInUrl);
  });

  if (desktop) {
    elementHamburger.style.display = "none";
    elementNavbar_Menu.style.display = "flex";
  }

  if (mobile) {
    elementNavbar_Menu.style.display = "none";
    elementHamburger.style.display = "inline-block";
    elementHamburger.onclick = function () {
      elementHamburger.classList.toggle("is-active");
      const showMenu = elementHamburger.classList.contains("is-active");
      if (showMenu) {
        gsap.to(elementHamburgerMenuContainer, { right: 0, duration: 1 });
      } else {
        gsap.to(elementHamburgerMenuContainer, {
          right: "-100vw",
          duration: 1,
        });
      }
    };
  }
}

function createHoverEventsForIcons(iconArray) {
  for (let index = 0; index < iconArray.length; index = index + 1) {
    iconArray[index].addEventListener("mouseover", () => {
      iconArray[index].style.color = colorThemGoldMouseOver;
    });
    iconArray[index].addEventListener("mouseout", () => {
      iconArray[index].style.color = colorThemeGold;
    });
  }
}
