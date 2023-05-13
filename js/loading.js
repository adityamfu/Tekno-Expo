document.addEventListener('DOMContentLoaded', function () {
  const preloadElements = document.querySelectorAll('.preload');
  const body = document.querySelector('body');
  const highestZIndex = 99999; // Z-index tertinggi
  const lowestZIndex = -1; // Z-index terendah

  preloadElements.forEach((element) => {
    element.style.zIndex = highestZIndex; // Set z-index menjadi tertinggi
    body.insertBefore(element, body.firstChild);
    element.style.opacity = '1';

    const timeoutId = setTimeout(() => {
      element.style.opacity = '0';

      setTimeout(() => {
        element.style.zIndex = lowestZIndex; // Set z-index menjadi terendah
        body.appendChild(element);
        element.style.display = 'none';
      }, 1000);

      clearTimeout(timeoutId);
    }, 5000);
  });
});

const dots = document.querySelectorAll('.loading-dot');
let dotIndex = 0;

setInterval(() => {
  dots.forEach((dot) => (dot.style.opacity = '0.5'));
  dots[dotIndex].style.opacity = '1';
  dotIndex = (dotIndex + 1) % dots.length;
}, 300);
