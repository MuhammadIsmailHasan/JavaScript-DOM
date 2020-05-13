// return node element
const judul = document.getElementById('judul'); 
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = '<b>Judul Terganti</b>';

// return HTMLCollection
const pBanyak = document.getElementsByTagName('p');
pBanyak[0].style.color = 'red';

// return HTMLCollection
const p2 = document.getElementsByClassName('p2');
p2[0].style.color = 'yellow';

// return node element
const p4 = document.querySelector('#b p');
p4.style.backgroundColor = 'red';
p4.style.fontSize = '20px';

// return 1 data p
const pPertama = document.querySelector('p');

// return banyak data p, NodeList
const pBanyak2 = document.querySelectorAll('p');


// get data tidak dari root
const sectionA = document.querySelector('#a');
const link = sectionA.getElementsByTagName('a');

// DOM Manipulation set and Get Attribute
link[0].setAttribute('name', 'ini link');
const attr = link[0].getAttribute('href');

// classList
let p3 = document.querySelector('.p3');
p3.classList.add('label');