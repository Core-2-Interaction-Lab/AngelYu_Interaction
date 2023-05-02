// Button to Scroll Top
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Counting Up
function animateCount(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = document.getElementById("count");
  animateCount(obj, 0, 533306, 6000 );
  
  document.addEventListener("DOMContentLoaded", function() {
  function animateCountOnScroll() {
    const obj = document.getElementById("count");
    const rect = obj.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const topVisible = rect.top <= windowHeight && rect.top + rect.height >= 0;
    if (topVisible) {
      animateCount(obj, 0, 533306, 6000);
      window.removeEventListener("scroll", animateCountOnScroll);
    }
  }

  window.addEventListener("scroll", animateCountOnScroll);
});

//Add AutoScroller button