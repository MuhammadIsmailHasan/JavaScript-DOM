function randomKomputer() {
    let comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function aturan(player, komp) {
    if (player == komp) return 'SERI';
    if (player == 'gajah') return (komp == 'semut') ? 'KALAH' : 'MENANG';
    if (player == 'orang') return (komp == 'gajah') ? 'KALAH' : 'MENANG';
    if (player == 'semut') return (komp == 'orang') ? 'KALAH' : 'MENANG';
}

function acakGambar() {
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(function(e) {
        // setInterval akan selalu dijalankan
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            console.log('+');
            return; // agar keluar jadi function, shg code dibawah tdk dijalankan
        }

        imgKomp.setAttribute('src', 'assets/' + gambar[i++] + '.png');
        if (i >= gambar.length) i = 0;
    }, 100);
}

const player = document.querySelectorAll('.player');
const imgKomp = document.getElementsByClassName('img-komputer')[0];
player.forEach(function(e) {
    e.addEventListener('click', function() {
        const pilihanKomputer = randomKomputer();
        const pilihanPlayer = e.getAttribute('id');
        const hasil = aturan(pilihanPlayer, pilihanKomputer);
        
        acakGambar();
        setTimeout(function() {
            imgKomp.setAttribute('src', 'assets/' + pilihanKomputer + '.png');
            const textHasil = document.querySelector('.info');
            textHasil.innerHTML = hasil;
        }, 1000);


    });
});