// var userChoise = prompt('Pilih : Gajah, Semut, Manusia');
// var userChoise = userChoise.toLowerCase();
// var kompChoise = getRandomItem(['Gajah', 'Semut', 'Manusia']);
// var kompChoise = kompChoise.toLowerCase();
var cont = true;
while (cont) {


    userChoise = prompt('Pilih : Gajah, Semut, Manusia');
    userChoise = userChoise.toLowerCase();
    kompChoise = getRandomItem(['Gajah', 'Semut', 'Manusia']);
    kompChoise = kompChoise.toLowerCase();
    if (userChoise == 'gajah') {
        if (kompChoise == 'manusia') {
            alert('Kamu Menang.'+'\n'+'Komputer memilih : ' + kompChoise + '\n' + 'Kamu Memilih : ' + userChoise)
        } else if (kompChoise == 'semut') {
            alert('Kamu Kalah.'+'\n'+'Komputer memilih : ' + kompChoise + '\n' + 'Kamu Memilih : ' + userChoise)
        } else {
            alert('Seri!!'+ '\n' +'Komputer memilih : ' + kompChoise + '\n' + 'Kamu Memilih : ' + userChoise)
        }
    cont = confirm('Lanjut ?');

    } else if (userChoise == 'semut') {
        if (kompChoise == 'manusia') {
            alert('Kamu Kalah.'+'\n'+'Komputer memilih : ' + kompChoise + '\n' + 'Kamu Memilih : ' + userChoise)
        } else if (kompChoise == 'gajah') {
            alert('Kamu Menang.'+'\n'+'Komputer memilih : ' + kompChoise + '\n' + 'Kamu Memilih : ' + userChoise)
        } else {
            alert('Seri!!'+ '\n' +'Komputer memilih : ' + kompChoise + '\n' + 'Kamu Memilih : ' + userChoise)
        }
    cont = confirm('Lanjut ?');

    } else if (userChoise == 'manusia') {
        if (kompChoise == 'semut') {
            alert('Kamu Menang.'+'\n'+'Komputer memilih : ' + kompChoise + '\n' + 'Kamu Memilih : ' + userChoise)
        } else if (kompChoise == 'gajah') {
            alert('Kamu Kalah.'+'\n'+'Komputer memilih : ' + kompChoise + '\n' + 'Kamu Memilih : ' + userChoise)
        } else {
            alert('Seri!!'+ '\n' +'Komputer memilih : ' + kompChoise + '\n' + 'Kamu Memilih : ' + userChoise)
        }
    cont = confirm('Lanjut ?');

    }
}

alert('Terimakasih Telah Bermain!!');
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
}