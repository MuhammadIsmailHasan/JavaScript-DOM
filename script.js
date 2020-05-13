const btnUbah = document.querySelector('#btn_ubah');
btnUbah.addEventListener('click', function () { 
    document.body.setAttribute('class', 'ubah-warna');
});

const btnAcak = document.createElement('button');
const textBtnAcak = document.createTextNode('Acak Warna');
btnAcak.appendChild(textBtnAcak);
btnAcak.setAttribute('type', 'button');
btnUbah.after(btnAcak);

btnAcak.addEventListener('click', function () { 
    const r = Math.round(Math.random() * 255 + 0);
    const g = Math.round(Math.random() * 255 + 0);
    const b = Math.round(Math.random() * 255 + 0);
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

const rMerah = document.querySelector('input[name=r_merah]');
const rHijau = document.querySelector('input[name=r_hijau]');
const rBiru = document.querySelector('input[name=r_biru]');
rMerah.addEventListener('change', function() {
    const r = rMerah.value;
    const g = rHijau.value;
    const b = rBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});
rHijau.addEventListener('change', function() {
    const r = rMerah.value;
    const g = rHijau.value;
    const b = rBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});
rBiru.addEventListener('change', function() {
    const r = rMerah.value;
    const g = rHijau.value;
    const b = rBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

// ganti warna dengan mouse
document.body.addEventListener('mousemove', function(e) {
    const x = Math.round((e.clientX / window.innerWidth) * 255) ;
    const y = Math.round((e.clientY / window.innerHeight) * 255) ;
    document.body.style.backgroundColor = 'rgb('+ x +', '+ y +', 100)';
});