// DOM NODE MANIPULATION
// appendChild
const p5 = document.createElement('p');
const textP5 = document.createTextNode('Paragraf 5 Baru');
// Jadikan 1 elemet
p5.appendChild(textP5);
// Get Parent Node
const sectionA = document.getElementById('a');
// Set Element to Parent (diakhir)
sectionA.appendChild(p5);


// insertBefore
const li4 = document.createElement('li');
const textLi4 = document.createTextNode('item 4 Baru');
li4.appendChild(textLi4);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(li4, li2);

// removeChild
const link = document.querySelector('a');
sectionA.removeChild(link);

// replaceChild
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Judul Baru');
h2Baru.appendChild(textH2Baru);
sectionB.replaceChild(h2Baru, p4);

p5.style.backgroundColor = 'lightblue';
li4.style.backgroundColor = 'lightblue';
h2Baru.style.backgroundColor = 'lightblue';


// METHOD BARU
// append
const p6Baru = document.createElement('p');
const textP6Baru = document.createTextNode('Paragraf Baru Append');
p6Baru.appendChild(textP6Baru);
sectionA.append(p6Baru);
p6Baru.style.backgroundColor = 'red';

// prepend
const p7Baru = document.createElement('p');
const textP7Baru = document.createTextNode('Paragraf Baru Prepend');
p7Baru.appendChild(textP7Baru);
sectionA.prepend(p7Baru);
p7Baru.style.backgroundColor = 'red';

// before
const li5 = document.createElement('li');
const textLi5 = document.createTextNode('item before');
li5.appendChild(textLi5);
li2.before(li5)
li5.style.backgroundColor = 'red';

// after
const li6 = document.createElement('li');
const textLi6 = document.createTextNode('item after');
li6.appendChild(textLi6);
li2.after(li6)
li6.style.backgroundColor = 'red';