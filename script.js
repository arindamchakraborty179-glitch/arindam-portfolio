document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("#toggle");
  const links = document.querySelector("#links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("active");
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
});