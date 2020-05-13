// 1
// const tutup = document.querySelector('.close');
// const card = document.querySelector('.card');
// tutup.addEventListener('click', function() {
//     card.style.display = 'none';
// });

// 2
// const tutup = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');
// for (let index = 0; index < tutup.length; index++) {
//     tutup[index].addEventListener('click', function() {
//         card[index].style.display = 'none';
//     });
// }

// 3
// const tutup = document.querySelectorAll('.close');
// for (let index = 0; index < tutup.length; index++) {
//     tutup[index].addEventListener('click', function() {
//         tutup[index].parentElement.style.display = 'none';
//     });
// }

// 4 (dengan event pada function)
// const tutup = document.querySelectorAll('.close');
// for (let index = 0; index < tutup.length; index++) {
//     tutup[index].addEventListener('click', function(event) {
//         console.log(event.target);
//         event.target.parentElement.style.display = 'none';
//     });
// }

// 5 (dengan dengan forEach)
// const tutup = document.querySelectorAll('.close');
// tutup.forEach(function(element){
//     element.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//     })
// });

// 6 (macam macam DOM Traversal)
const nama = document.querySelector('.nama');
console.log("parentElemet : ");
console.log(nama.parentElement);
console.log("parentNode : ");
console.log(nama.parentNode);
console.log("Kakek : ");
console.log(nama.parentElement.parentElement);
console.log("nextSibling : ");
console.log(nama.nextSibling);
console.log("nextElementSibling : ");
console.log(nama.nextElementSibling);
console.log("previousSibling : ");
console.log(nama.previousSibling);
console.log("previousElementSibling : ");
console.log(nama.previousElementSiblingSibling);

// // 7 (preventDefault dan EventBubbling)
// const tutup = document.querySelectorAll('.close');
// tutup.forEach(function(element){
//     element.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault(); // mencegah aksi default nya
//         e.stopPropagation(); // bubbling agar tidak menjalankan event parentnya
//     })
// });
// const cards = document.querySelectorAll('.card');
// cards.forEach(function(element){
//     element.addEventListener('click', function(e){
//         alert('klik card');
//     })
// });

// 8 (KODING YANG PALING EEFEKTIF)
const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
    console.log(e.target);
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
    }
    if (e.target.className == 'nama') {
        alert(e.target.textContent);
    }
});
