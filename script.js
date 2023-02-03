var tanya = true
while (tanya == true) {
    // menangkap pilahan player
    var player = prompt(' pilih : gajah, semut , orang ')

    // menangkap pilahan computer
    // membangkitkan bilangn random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah'
    } else if ( comp >= 0.34 && comp < 0.67) {
        comp = 'orang'
    } else {
        comp = 'semut'
    }

    // menentukan rules
    var hasil = '';

    if (player == comp) {
        hasil = 'SERI !!'
    } else if (player == 'gajah') {
        // if ( comp == 'orang') {
        //     hasil = 'MENANG !!'
        // } else {
        //     hasil = 'KALAH !!'
        // }
        hasil = (comp == 'orang') ? 'MENANG !!' : 'KALAH !!'

    } else if (player == 'orang') {
        hasil = ( comp == 'gajah') ? 'KALAH !!' : 'MENANG !!'

    } else if ( player == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH !!' : 'MENANG !!'

    } else {
        hasil = 'Memasukkan pilihan yang salah'
    }

    //tampilkan hasilnya
    alert('kamu memilih : ' + player + ' dan komputer memilih : ' + comp + '\n hasil : kamu ' + hasil)

    tanya = confirm('lagi ??');
}

alert('Terima kasih :)')