/* ------------------------------------ */
/* --- Exercice 1 --- */

const button = document.querySelector("#ex1 .button");
console.log(button);

button.addEventListener('click', function (event) {
    //remove enlève sans possibilité de remettre
    // button.parentElement.removeChild(p1);
    document.getElementById('p1').classList.toggle("display-hidden")
});

/* ------------------------------------ */
/* --- Exercice 2 --- */

// ex2-scroll-value = scrollY
const scrollvalue = document.querySelector('#ex2-scroll-value')
console.log(scroll);

window.addEventListener('scroll', function (event) {
    scrollvalue.textContent = Math.round(window.scrollY)
})

/* ------------------------------------ */
/* --- Exercice 3 --- */

const animal = document.querySelector('#ex3-animals');
console.log(animal);

const lastAnimal = animal.lastElementChild;
console.log(lastAnimal);

button = document.querySelector('#ex3 .button')

button.addEventListener('click', function(event){
    animal.appendChild(lastAnimal)
})

/* ------------------------------------ */
/* --- Exercice 4 --- */


/* ------------------------------------ */
/* --- Exercice 5 --- */


/* ------------------------------------ */
/* --- Exercice 6 --- */



/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse"
];


/* ------------------------------------ */
/* --- Exercice 8 --- */
