//For animation name 
let element = document.getElementById("name-id");
let text = "Ahmad Adil Karim";
let i = 0;

let typing = true;
let speed = 100;
let typingSpeed = 150;
let deletingSpeed = 150;
let pauseAfterTyping = 1000;
let pauseAfterDeleting = 500;
function type() {
    if (typing) {
        if (i < text.length) {
            element.innerHTML += text[i];
            i++;
            setTimeout(type, typingSpeed);
        } else {
            typing = false;
            setTimeout(type, pauseAfterTyping);
        }
    } else {
        if (i > 0) {
            i--;
            element.innerHTML = text.substring(0, i);
            setTimeout(type, deletingSpeed);
        } else {
            typing = true;
            setTimeout(type, pauseAfterDeleting);
        }
    }
}

window.onload = function () {
    type();
};

//Animation for scroll
const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  revealElements.forEach((el) => {
    observer.observe(el);
  });