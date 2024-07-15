// var penumpang = [];
// var tambahPenumpang = (nama = null) => {
//     if (penumpang.length === 0) {
//         penumpang.unshift(nama);
//         return penumpang;
//     } else {
//         if(penumpang.includes(nama.toLowerCase())) {
//             console.log("Penumpang dengan nama " + nama + " sudah berada di dalam angkot.");
//         } else {
//             var index = penumpang.findIndex(val => val === undefined)
//             console.log(index);
//             if (index !== -1) {
//                 penumpang[index] = nama
//             } else {
//                 penumpang.push(nama)
//             }
//         }
//         return penumpang;
//     }
// }
// tambahPenumpang("tsabit");
// console.log(penumpang);

var penumpang = []
var tambahPenumpang = nama => {
    var maxPenumpang = 15
    if (penumpang.length === 0) {
        penumpang.unshift(nama)
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang.length <= maxPenumpang) {
                if (nama.toLowerCase() === penumpang[i].toLowerCase()) {
                    console.log("Penumpang dengan nama " + nama + " sudah berada di dalam angkot.");
                    return penumpang
                } else if (penumpang[i] === undefined) {
                    penumpang[i] = nama
                    return penumpang
                } else if (i == penumpang.length -1){
                    penumpang.push(nama)
                    return penumpang
                }
            }
        }
    }
}

var hapusPenumpang = nama => {
    if (penumpang.length === 0) {
        console.log("Angkot sedang kosong")
    } else {
        penumpang.forEach((val, key) => {
            if (val.toLowerCase() === nama.toLowerCase()) {
                penumpang[key] = undefined
            } else if (val.toLowerCase() !== nama.toLowerCase()) {
                console.log("Tidak ada nama " + nama + " didalam angkot")
            }
        })
    }
    return penumpang
}


console.log(penumpang);