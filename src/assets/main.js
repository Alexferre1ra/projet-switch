// Remove the transition class
const titre = document.querySelector('.multi__sousTitre');
titre.classList.remove('titre-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      titre.classList.add('titre-transition');
      return;
    }

    titre.classList.remove('titre-transition');
  });
});

observer.observe(document.querySelector('.content_multi'));