// for breadcrumb
function goBack() {
  window.history.back();
}
// breadcrum ends here



document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicators button');
    let currentIndex = 0;
    let interval;
  
    function updateActiveIndicator(index) {
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
      });
    }
  
    function showSlide(index) {
      items[currentIndex].classList.remove('active');
      items[currentIndex].classList.add('prev');
      items[index].classList.remove('next');
      items[index].classList.add('active');
  
      setTimeout(() => {
        items[currentIndex].classList.remove('prev');
        currentIndex = index;
      }, 4000); // Match this duration to your transition duration
  
      updateActiveIndicator(index);
    }
  
    function showNextSlide() {
      const nextIndex = (currentIndex + 1) % items.length;
      showSlide(nextIndex);
    }
  
    function showPrevSlide() {
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      showSlide(prevIndex);
    }
  
    // Set up event listeners for next/prev buttons
    document.querySelector('.carousel-next').addEventListener('click', showNextSlide);
    document.querySelector('.carousel-prev').addEventListener('click', showPrevSlide);
  
    // Set up event listeners for indicators
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        showSlide(index);
      });
    });
  
    // Optionally, start an automatic slideshow
    function startAutoSlide() {
      interval = setInterval(showNextSlide, 6000); // Adjust the interval as needed
    }
  
    function stopAutoSlide() {
      clearInterval(interval);
    }
  
    startAutoSlide();
  
    // Pause the automatic slideshow when hovering over the carousel
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseover', stopAutoSlide);
    carousel.addEventListener('mouseout', startAutoSlide);
  });
  