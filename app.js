const customCursor = document.querySelector(".custom-cursor");

// Mettre le curseur au milieu du rond
// Sinon il serait en haut à gauche
window.addEventListener("mousemove", (e) => {
  customCursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`
})

const title = document.querySelector("h1");
const subtitle = document.querySelector(".subtitle");
const heroPushLink = document.querySelector(".hero-push-link");
const texte =  "Porsche, set free .."

function typewriter(word, index) {
  if (index > 3) {subtitle.classList.add("active")};
  if (index > 6) {heroPushLink.classList.add("active")};
  if (index < word.length) {
    setTimeout(() => {
      title.innerHTML += `<span>${word[index]}</span>`
      typewriter(word, index +1)
    }, 200)
  }
}

setTimeout(() => {
  typewriter(texte, 0)
}, 300);


// Push Down Button

heroPushLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: document.querySelector(`${e.target.getAttribute("href")}`).offsetTop,
    behavior: "smooth"
  })
})

// Scroll animation

const generalAnimatedElements = [
  ...document.querySelectorAll("h2"),
  ...document.querySelectorAll(".section-subtitle"),
]
const discoverSectionElements = [
  document.querySelector(".text-discover-content h3"),
  document.querySelector(".text-discover-content p"),
  document.querySelector(".discover-link"),
  document.querySelector(".discover-main-img"),
]
const slideInContent = [
  ...document.querySelectorAll(".side-apparition-container")
]
const animatedContents = [
  ...generalAnimatedElements,
  ...discoverSectionElements,
  ...slideInContent,
]

const intersectionObserver = new IntersectionObserver(handleIntersect, {rootMargin: "-10%"})

animatedContents.forEach(el => intersectionObserver.observe(el))

function handleIntersect(entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("active");
      intersectionObserver.unobserve(entry.target);
    }
  })
}
