

let user1 = {
    firstName: "Bilgin",
    lastName: "Uzman",
    score: Array(4),
    isActive: true,
    shortName: function () { return `${this.firstName[0].toUpperCase()}. ${this.lastName}` }
}

var birey = {
    isim: 'Ali',
    soyisim: 'Veli',
    dogumYili: 1989,
    merhabaDe: (age) => ` Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yaşındayım, `
};
birey.yasHesapla = function () {
    return 2021 - this.dogumYili;
};

console.log(birey.merhabaDe(birey.yasHesapla()));

let Araba = ""
Araba.proto.korna = function () {
    console.log("Korna sesi")
}

Araba.proto.korna = "Korna Sesi"; Araba.prototype.korna = "Korna Sesi";