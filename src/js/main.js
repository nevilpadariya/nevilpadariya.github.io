var audio = document.getElementById("audioPlayer"),
  loader = document.getElementById("preloader");
function settingtoggle() {
  document
    .getElementById("setting-container")
    .classList.toggle("settingactivate"),
    document
      .getElementById("visualmodetogglebuttoncontainer")
      .classList.toggle("visualmodeshow"),
    document
      .getElementById("soundtogglebuttoncontainer")
      .classList.toggle("soundmodeshow");
}
function playpause() {
  !1 == document.getElementById("switchforsound").checked
    ? audio.pause()
    : audio.play();
}
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
let emptyArea = document.getElementById("emptyarea"),
  mobileTogglemenu = document.getElementById("mobiletogglemenu");
function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling"),
    document
      .getElementById("mobiletogglemenu")
      .classList.toggle("show-toggle-menu"),
    document
      .getElementById("burger-bar1")
      .classList.toggle("hamburger-animation1"),
    document
      .getElementById("burger-bar2")
      .classList.toggle("hamburger-animation2"),
    document
      .getElementById("burger-bar3")
      .classList.toggle("hamburger-animation3");
}
function hidemenubyli() {
  document.body.classList.toggle("stopscrolling"),
    document
      .getElementById("mobiletogglemenu")
      .classList.remove("show-toggle-menu"),
    document
      .getElementById("burger-bar1")
      .classList.remove("hamburger-animation1"),
    document
      .getElementById("burger-bar2")
      .classList.remove("hamburger-animation2"),
    document
      .getElementById("burger-bar3")
      .classList.remove("hamburger-animation3");
}
const sections = document.querySelectorAll("section"),
  navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),
  mobilenavLi = document.querySelectorAll(
    ".mobiletogglemenu .mobile-navbar-tabs-ul li"
  );
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
const scrollProgressBar = document.getElementById("scrollProgressBar");

// Throttle scroll events for better mobile performance
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
  
  let e = "";
  sections.forEach((t) => {
    let o = t.offsetTop;
    if (scrollTop >= o - 200) {
      e = t.getAttribute("id");
    }
  });
  
  mobilenavLi.forEach((t) => {
    t.classList.remove("activeThismobiletab");
    if (t.classList.contains(e)) {
      t.classList.add("activeThismobiletab");
    }
  });
  
  navLi.forEach((t) => {
    t.classList.remove("activeThistab");
    if (t.classList.contains(e)) {
      t.classList.add("activeThistab");
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

let mybutton = document.getElementById("backtotopbutton");
function scrollFunction() {
  document.body.scrollTop > 400 || document.documentElement.scrollTop > 400
    ? (mybutton.style.display = "block")
    : (mybutton.style.display = "none");
}
function scrolltoTopfunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
(window.onscroll = function () {
  scrollFunction();
}),
  document.addEventListener(
    "contextmenu",
    function (e) {
      "IMG" === e.target.nodeName && e.preventDefault();
    },
    !1
  );
let Pupils = document.getElementsByClassName("footer-pupil"),
  pupilsArr = Array.from(Pupils),
  pupilStartPoint = -10,
  pupilRangeX = 20,
  pupilRangeY = 15,
  mouseXStartPoint = 0,
  mouseXEndPoint = window.innerWidth,
  currentXPosition = 0,
  fracXValue = 0,
  mouseYEndPoint = window.innerHeight,
  currentYPosition = 0,
  fracYValue = 0,
  mouseXRange = mouseXEndPoint - mouseXStartPoint;
const mouseMove = (e) => {
    (fracXValue =
      (currentXPosition = e.clientX - mouseXStartPoint) / mouseXRange),
      (fracYValue = (currentYPosition = e.clientY) / mouseYEndPoint);
    let t = pupilStartPoint + fracXValue * pupilRangeX,
      o = pupilStartPoint + fracYValue * pupilRangeY;
    pupilsArr.forEach((e) => {
      e.style.transform = `translate(${t}px, ${o}px)`;
    });
  },
  windowResize = (e) => {
    (mouseXEndPoint = window.innerWidth),
      (mouseYEndPoint = window.innerHeight),
      (mouseXRange = mouseXEndPoint - mouseXStartPoint);
  };
window.addEventListener("mousemove", mouseMove),
  window.addEventListener("resize", windowResize);
