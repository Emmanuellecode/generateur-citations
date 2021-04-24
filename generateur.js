// Tableau de citations
let citations = [
    ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
    ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
    ["Méritez votre statut de leader chaque jour.", "Mickael Jordan"],
    ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi"],
    ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain"],
    ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot"],
    ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais"],
    ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy"],
    ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher"],
    ["Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.", "Anita Roddick"],
    ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson"],
    ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso"],
    ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill"],
    ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki"],
    ["Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.", "Zig Ziglar"],
    ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy"],
    ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt"],
    ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis"],
    ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill"]
  ];
  
  // Je selectionne les éléments nécéssaires au fonctionnement du projet.
  let citation = document.querySelector('#citation');
  let auteur = document.querySelector('#auteur');
  let btn = document.querySelector('#nouveau');
  
  // Je déclare les variables nécéssaires au fonctionnement du projet.
  let dernier = citations[[0][0]];
  let nombreAleatoire = genererNombreEntier(18);
      
  // Fonction qui permet de générer un nombre entier grâce à la méthode Math.random et d'arrondir le nombre généré à l'entier inférieur grâce à la méthode Math.floor.
  function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
  };
  
  
  //Evenement qui réagit au click sur le bouton.
  btn.addEventListener('click', () => { 
    do{
      citation.innerHTML  = citations[nombreAleatoire][0];
      auteur.innerHTML    = citations[nombreAleatoire][1];
      dernier             = citations[[0][0]];
      nombreAleatoire     = genererNombreEntier(18);
      } 
    while (nombreAleatoire == dernier);
   });