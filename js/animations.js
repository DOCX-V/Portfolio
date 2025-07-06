// Fade-in Animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  });
  
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
  
  const element = document.getElementById('rotating-element')

  function rotateElement(){
    element.style.transform = 'rotate(${angle}deg)';
    angle += 1;
    requestAnimationFrame(rotateElement);
  }
  let angle = 0;
  requestAnimationFrame(rotateElement);


