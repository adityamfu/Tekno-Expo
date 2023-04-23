const contain = document.querySelector('.contain');
const services_section_2 = document.querySelector('.services_section_2');
const colors = ['linear-gradient(to left, #800080, #ffc0cb)', 'linear-gradient(to bottom right, #5f2c82, #49a09d)', 'linear-gradient(to bottom right, #01B7C4, #A8FF7A)', 'linear-gradient(to bottom right, #42275A, #734B6D)'];

function addEffect(event) {
  if (event.target.closest('.service_box')) {
    const index = Array.from(contain.children).indexOf(event.target.closest('.service_box'));
    services_section_2.style.backgroundImage = colors[index];
    services_section_2.style.transition = 'background-color 0.5s ease-in-out';
  }
}

function removeEffect() {
  services_section_2.style.backgroundImage = '';
  services_section_2.style.backgroundColor = '';
}

// Tambahkan event listener pada layar yang lebih besar dari 768 piksel
if (window.innerWidth >= 575) {
  contain.addEventListener('mouseover', addEffect);
  contain.addEventListener('mouseout', removeEffect);
}

// Hapus event listener pada layar yang lebih kecil dari 768 piksel
if (window.innerWidth < 767) {
  contain.removeEventListener('mouseover', addEffect);
  contain.removeEventListener('mouseout', removeEffect);
}
