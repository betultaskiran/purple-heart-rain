function createHeart() {
  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  /*vw (viewport width), tarayıcının görünür genişliğinin yüzde birimini temsil eden bir CSS birimidir. */

  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = "💜";

  document.body.appendChild(heart);
}
setInterval(createHeart, 300);
