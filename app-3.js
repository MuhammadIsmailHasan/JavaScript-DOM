// EVENT HANDLER
const p3 = document.querySelector('.p3');
p3.onclick = ubahWarna;

function ubahWarna() {
    p3.style.backgroundColor = 'lightblue';
}



// ADDEVENTLISTENER
const pB = document.querySelector('section#b p');
pB.addEventListener('click', function() {
    const ul = document.querySelector('#b ul');

    const liBaru = document.createElement('li');
    const textLiBaru = document.createTextNode('item Baru Event');
    liBaru.appendChild(textLiBaru);

    ul.prepend(liBaru);
});

// PERBEDAAN
const p1 = document.querySelector('.p1');
p1.onclick = function() { //  anonymous function
    p1.style.backgroundColor = 'lightblue';
}
p1.onclick = function() { //  anonymous function
    p1.style.color = 'red';
}

const p2 = document.querySelector('.p2');
p2.addEventListener('click', function () {
    p2.style.backgroundColor = 'magenta';
});
p2.addEventListener('click', function () {
    p2.style.color = 'blue';
});