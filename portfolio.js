document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav a,div a");
  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  // Form submission
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);
  }

  // Scroll to top button
  createScrollToTopButton();

  // Optional: Add animation to skills when they come into view
  const skillItems = document.querySelectorAll(".skill-item");
  if ("IntersectionObserver" in window) {
    const skillsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    skillItems.forEach((item) => skillsObserver.observe(item));
  }
});

function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute("href");
  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    );
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

// Easing function
function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

function handleFormSubmit(e) {
  e.preventDefault();
  const name = this.querySelector('input[name="name"]').value;
  const email = this.querySelector('input[name="email"]').value;
  const message = this.querySelector('textarea[name="message"]').value;

  if (!name || !email || !message) {
    alert("Please fill in all fields");
    return;
  }

  // Here you would typically send the form data to a server
  // For this example, we'll just log it to the console
  console.log("Form submitted:", { name, email, message });
  alert("Thank you for your message! I'll get back to you soon.");
  this.reset();
}

function createScrollToTopButton() {
  const button = document.createElement("button");
  button.innerHTML = "&uarr;";
  button.setAttribute("aria-label", "Scroll to top");
  button.classList.add("scroll-to-top");
  document.body.appendChild(button);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      button.classList.add("show");
    } else {
      button.classList.remove("show");
    }
  });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const brightnessItem = document.getElementById("brightness");

  brightnessItem.addEventListener("click", function () {
    if (this.classList.contains("fa-toggle-off")) {
      this.classList.remove("fa-toggle-off");
      this.classList.add("fa-toggle-on");
    } else {
      this.classList.remove("fa-toggle-on");
      this.classList.add("fa-toggle-off");
    }
  });
});

const skillsList = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
];
const skillLst = {
  JavaScript: 0.3,
  HTML5: 0.6,
  CSS3: 0.3,
  React: 0.2,
  "Node.js": 0.2,
  "Express.js": 0.1,
  MongoDB: 0.1,
  Git: 0.1,
  GitHub: 0.1,
};

const formatter = Intl.NumberFormat("en-US", {
  style: "percent",
});

const star = "⭐";
const skillDiv = document.querySelector(".skill-item");
skillDiv.forEach((skill) => {
  const para = skillDiv.appendChild(document.createElement("p"));
  para.textContent = formatter.format(skillLst[skill]);
});

skillItem = document.querySelector(".skill-item");
skillItem.addEventListener("click", function () {});
