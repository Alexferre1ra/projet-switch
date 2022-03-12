// Récupérer toutes les div .sousTitre__wrapper
const sousTitre__wrapper = document.querySelectorAll('.sousTitre__wrapper');

// Récupérer tout les h3 .multi__soustitre
const sousTitre = document.querySelectorAll('.multi__sousTitre'); // retourne un tableau de valeurs
// Pour chaque .multi__sousTitre dans le tableau enlever la classe titre__transition
for(i=0; i<sousTitre.length; i++)
   { 
		sousTitre[i].classList.remove('titre__transition');
   }

// Créer un observer qui attend de voir l'entrée paramétrée:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
		// si l'oberserver voit l'entrée alors
    if (entry.isIntersecting) {
			// Pour chaque .multi__sousTitre dans le tableau, ajouter la classe titre__transition
      for(i=0; i<sousTitre.length; i++)
   		{ 
				sousTitre[i].classList.add('titre__transition');
   		}
      return;
    }
		// Pour chaque .multi__sousTitre dans le tableau, enlever la classe titre__transition
		for(i=0; i<sousTitre.length; i++)
		{ 
		 sousTitre[i].classList.remove('titre__transition');
		}
  });
});

// Pour chaque .sousTitre__wrapper dans le tableau, paramètrage de l'observer pour qu'il attende de voir la nouvelle entrée
for(i=0; i<sousTitre__wrapper.length; i++)
   { 
		observer.observe(sousTitre__wrapper[i]);
   }