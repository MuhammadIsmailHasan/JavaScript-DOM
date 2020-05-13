const container = document.querySelector('.container');
const kecils = document.querySelectorAll('.kecil');

container.addEventListener('click', function(e){
    const besar = document.querySelector('.besar');

    if (e.target.className == 'kecil') {
        besar.src = e.target.src;
        besar.classList.add('fade');

        setTimeout(function(){
            besar.classList.remove('fade');
        }, 500);

        kecils.forEach(function(kecil){
            kecil.className = 'kecil';
        });

        e.target.classList.toggle('active');
    }

});