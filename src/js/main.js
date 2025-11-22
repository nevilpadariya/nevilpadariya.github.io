/**
 * Audio player and preloader elements
 * @type {HTMLAudioElement | null}
 */
const audio = document.getElementById("audioPlayer");
const loader = document.getElementById("preloader");

/**
 * Toggles the settings container and related UI elements
 */
function settingtoggle() {
  const settingContainer = document.getElementById("setting-container");
  const visualModeContainer = document.getElementById("visualmodetogglebuttoncontainer");
  const soundContainer = document.getElementById("soundtogglebuttoncontainer");
  
  if (settingContainer) {
    settingContainer.classList.toggle("settingactivate");
  }
  if (visualModeContainer) {
    visualModeContainer.classList.toggle("visualmodeshow");
  }
  if (soundContainer) {
    soundContainer.classList.toggle("soundmodeshow");
  }
}
/**
 * Toggles audio playback based on sound switch state
 */
function playpause() {
  const soundSwitch = document.getElementById("switchforsound");
  if (soundSwitch && audio) {
    soundSwitch.checked ? audio.play() : audio.pause();
  }
}

/**
 * Toggles between light and dark mode
 */
function visualmode() {
  document.body.classList.toggle("light-mode"),
    document.querySelectorAll(".needtobeinvert").forEach(function (e) {
      e.classList.toggle("invertapplied");
    });
}
window.addEventListener("load", function () {
  if (loader) {
    loader.style.display = "none";
  }
  const heyElement = document.querySelector(".hey");
  if (heyElement) {
    heyElement.classList.add("popup");
  }
  // Remove stopscrolling immediately on mobile for better UX
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (!isMobile) {
    document.body.classList.add("stopscrolling");
    setTimeout(() => {
      document.body.classList.remove("stopscrolling");
    }, 3500);
  }
});
// Mobile menu toggle element (cached for performance)
const mobileTogglemenu = document.getElementById("mobiletogglemenu");
/**
 * Toggles the mobile hamburger menu visibility and animations
 */
function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling");
  
  const menu = document.getElementById("mobiletogglemenu");
  const bar1 = document.getElementById("burger-bar1");
  const bar2 = document.getElementById("burger-bar2");
  const bar3 = document.getElementById("burger-bar3");
  
  if (menu) menu.classList.toggle("show-toggle-menu");
  if (bar1) bar1.classList.toggle("hamburger-animation1");
  if (bar2) bar2.classList.toggle("hamburger-animation2");
  if (bar3) bar3.classList.toggle("hamburger-animation3");
}
/**
 * Hides the mobile menu when a menu item is clicked
 */
function hidemenubyli() {
  document.body.classList.remove("stopscrolling");
  
  const menu = document.getElementById("mobiletogglemenu");
  const bar1 = document.getElementById("burger-bar1");
  const bar2 = document.getElementById("burger-bar2");
  const bar3 = document.getElementById("burger-bar3");
  
  if (menu) menu.classList.remove("show-toggle-menu");
  if (bar1) bar1.classList.remove("hamburger-animation1");
  if (bar2) bar2.classList.remove("hamburger-animation2");
  if (bar3) bar3.classList.remove("hamburger-animation3");
}
/**
 * Navigation elements cached for performance
 */
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
const mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");
/**
 * Scroll tracking and UI elements
 */
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
const scrollProgressBar = document.getElementById("scrollProgressBar");

/**
 * Throttled scroll handler for better mobile performance
 * Updates scroll progress bar, navbar state, and active section highlighting
 */
let ticking = false;
function updateOnScroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Calculate scroll progress
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollProgress = windowHeight > 0 ? (scrollTop / windowHeight) * 100 : 0;
  
  // Update progress bar width
  if (scrollProgressBar) {
    scrollProgressBar.style.width = scrollProgress + "%";
  }
  
  if (scrollTop > 50) {
    navbar.classList.add("navbar-shrink");
    document.body.classList.add("scrolled");
  } else {
    navbar.classList.remove("navbar-shrink");
    document.body.classList.remove("scrolled");
  }
  lastScrollTop = scrollTop;
  
  // Find the current active section
  let activeSectionId = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollTop >= sectionTop - 200) {
      activeSectionId = section.getAttribute("id") || "";
    }
  });
  
  // Update mobile navigation active state
  mobilenavLi.forEach((navItem) => {
    navItem.classList.remove("activeThismobiletab");
    if (activeSectionId && navItem.classList.contains(activeSectionId)) {
      navItem.classList.add("activeThismobiletab");
    }
  });
  
  // Update desktop navigation active state
  navLi.forEach((navItem) => {
    navItem.classList.remove("activeThistab");
    if (activeSectionId && navItem.classList.contains(activeSectionId)) {
      navItem.classList.add("activeThistab");
    }
  });
  
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(updateOnScroll);
    ticking = true;
  }
}, { passive: true });

/**
 * Back to top button element
 * @type {HTMLElement | null}
 */
const mybutton = document.getElementById("backtotopbutton");

/**
 * Shows/hides the back to top button based on scroll position
 */
function scrollFunction() {
  if (!mybutton) return;
  
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  mybutton.style.display = scrollTop > 400 ? "block" : "none";
}
/**
 * Smoothly scrolls to the top of the page
 */
function scrolltoTopfunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
(window.onscroll = function () {
  scrollFunction();
}),
  document.addEventListener(
    "contextmenu",
    function (e) {
      if (e.target.nodeName === "IMG") {
        e.preventDefault();
      }
    },
    false
  );
/**
 * Footer avatar pupil animation configuration
 */
const Pupils = document.getElementsByClassName("footer-pupil");
const pupilsArr = Array.from(Pupils);
const pupilStartPoint = -10;
const pupilRangeX = 20;
const pupilRangeY = 15;
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let mouseYEndPoint = window.innerHeight;
let mouseXRange = mouseXEndPoint - mouseXStartPoint;

/**
 * Handles mouse movement for footer avatar pupil animation
 * @param {MouseEvent} e - Mouse event object
 */
const mouseMove = (e) => {
  const currentXPosition = e.clientX - mouseXStartPoint;
  const currentYPosition = e.clientY;
  const fracXValue = currentXPosition / mouseXRange;
  const fracYValue = currentYPosition / mouseYEndPoint;
  const t = pupilStartPoint + fracXValue * pupilRangeX;
  const o = pupilStartPoint + fracYValue * pupilRangeY;
  
  pupilsArr.forEach((pupil) => {
    pupil.style.transform = `translate(${t}px, ${o}px)`;
  });
};

/**
 * Handles window resize for footer avatar animation
 */
const windowResize = () => {
  mouseXEndPoint = window.innerWidth;
  mouseYEndPoint = window.innerHeight;
  mouseXRange = mouseXEndPoint - mouseXStartPoint;
};
window.addEventListener("mousemove", mouseMove),
  window.addEventListener("resize", windowResize);
