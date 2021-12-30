const slides = document.querySelectorAll('.slide');
const btnPrev = document.querySelector('#prev-btn');
const btnNext = document.querySelector('#next-btn');
const pagination = document.querySelector('#pagination');

for (let i = 0; i < slides.length; i++) {
  const elemPagination = document.createElement('span');
  elemPagination.classList.add('circle');
  elemPagination.setAttribute('data-id', i)
  pagination.append(elemPagination);
}

const circles = document.querySelectorAll('.circle');

let activeCircle = 0;
let currentSlide = 0;

const showActiveSlide = (slideNumber) => {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  circles.forEach(circle => {
    circle.classList.remove('active-circle');
  })

  slides[slideNumber].classList.add('active');
  circles[slideNumber].classList.add('active-circle');
}

btnPrev.addEventListener('click', () => {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
    showActiveSlide(currentSlide);
  } else {
    currentSlide--;
    showActiveSlide(currentSlide);
  }
});

btnNext.addEventListener('click', () => {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
    showActiveSlide(currentSlide);
  } else {
    currentSlide++;
    showActiveSlide(currentSlide);
  }
});

pagination.addEventListener('click', e => {
  if (e.target.classList.contains('circle')) {
    showActiveSlide(e.target.dataset.id);
  }
});

showActiveSlide(currentSlide);