const button = document.getElementById("button_nav");
const el = document.getElementById("menu");

button.addEventListener("click", () => {
  if (!el.classList.contains("active")) {
    el.classList.add("active");
    el.classList.remove("hidden");
  } else {
    el.classList.add("hidden");
    el.classList.remove("active");
  }
});
