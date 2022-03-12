// Remove the transition class
const sousTitre = document.querySelector('.multi__sousTitre');
sousTitre.classList.remove('titre__transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sousTitre.classList.add('titre__transition');
      return;
    }

    sousTitre.classList.remove('titre__transition');
  });
});

observer.observe(document.querySelector('.square-wrapper'));