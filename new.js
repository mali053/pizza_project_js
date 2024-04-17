
const pop = document.querySelector('#popup');
const upper = document.createElement('h2');
upper.innerHTML = localStorage.getItem('prodName');
console.log(localStorage.getItem('prodName'));
pop.appendChild(upper);