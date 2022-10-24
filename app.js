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
