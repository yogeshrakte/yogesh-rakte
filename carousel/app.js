   const slider = document.getElementById('slider');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    const itemWidth = slider.querySelector('.slide-item').offsetWidth;
    let scrollPosition = 0;

    nextBtn.addEventListener('click', () => {
      scrollPosition += itemWidth;
      if (scrollPosition > (slider.scrollWidth - slider.offsetWidth)) {
        scrollPosition = 0; // loop to start
      }
      slider.style.transform = `translateX(-${scrollPosition}px)`;
    });

    prevBtn.addEventListener('click', () => {
      scrollPosition -= itemWidth;
      if (scrollPosition < 0) {
        scrollPosition = slider.scrollWidth - slider.offsetWidth; // loop to end
      }
      slider.style.transform = `translateX(-${scrollPosition}px)`;
    });

    // Auto-scroll every 3 seconds
    setInterval(() => {
      scrollPosition += itemWidth;
      if (scrollPosition > (slider.scrollWidth - slider.offsetWidth)) {
        scrollPosition = 0;
      }
      slider.style.transform = `translateX(-${scrollPosition}px)`;
    }, 3000);