/**
 * [Görev 1] nesneyiTrimle bir nesne alır ve proplarını trimler (trim; bir stringin başında ve sonunda bulunan boşlukları(whitespaces) temizlemek)
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - stringleri trimlenmiş bir nesne döndürür
 *
 * ÖRNEK
 * nesneyiTrimle({ isim: '  jane  ' }) // yeni bir nesne döndürür { name: 'jane' }
 */
function nesneyiTrimle(obj) {
  var copyObj = {...obj}
  for (var key in copyObj) {
    copyObj[key] = copyObj[key].trim();
  }
  return copyObj;
}
console.log(nesneyiTrimle({ isim: '  jane  ' }));
/**
 * [Görev 2] verileniTrimle propları string olan bir nesne alır ve gönderilen propu trimler.
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - istenilen propu trimlenmiş nesneyi döndürür
 *
 * ÖRNEK
 * verileniTrimle({ isim: '  jane  ' , yas: ' 34 '}, 'isim') // şunu döndürür { isim: 'jane', yas: ' 34 '}
 */
function verileniTrimle(obj, prop) {
  // ✨ kodlar buraya
  for (var key in obj) {
    if (key === prop) {
      obj[key] = obj[key].trim();
    }
  }
  return obj;
}

console.log(verileniTrimle({ isim: "  jane  ", yas: " 34 " }, "isim"));
/**
 * [Görev 3] enBuyukTamsayiyiBul bir dizi nesne içinde bulunan tamsayılardan en büyük olanı bulur { tamsayi: 1 }
 * @param {object[]} tamsayilar - bir dizi nesne
 * @returns {number} - en büyük tamsayı
 *
 * ÖRNEK
 * enBuyukTamsayiyiBul([{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }]) // 3 döndürür
 */
function enBuyukTamsayiyiBul(tamsayilar) {
  // ✨ kodlar buraya

  // var max = tamsayilar.sort((a,b) => b.tamsayi - a.tamsayi)[0].tamsayi;

  // var max = Math.max(...tamsayilar.map(max => max.tamsayi));

  var max = -Infinity;

  tamsayilar.forEach((el) => {
    if (el.tamsayi > max) {
      max = el.tamsayi;
    }
  });

  return max;
}

console.log(
  enBuyukTamsayiyiBul([{ tamsayi:-5 }, { tamsayi: -1 }, { tamsayi: -2 }])
);

function Sayici(ilkSayi) {
  /**
   * [Görev 4A] Sayici bir sayaç oluşturur
   * @param {number} ilkSayi - Sayacin ilk değeri
   */

  // ✨ gerekli propları ekleyin

  /**
   * [Görev 4B] asagiSay metodu sıfıra doğru sayar
   * @returns {number} - bir sonraki sayı, sıfırdan küçük olamaz
   *
   * Örnek
   * const sayac = new Sayici(3)
   * sayac.asagiSay() // 3 döndürür
   * sayac.asagiSay() // 2 döndürür
   * sayac.asagiSay() // 1 döndürür
   * sayac.asagiSay() // 0 döndürür
   * sayac.asagiSay() // 0 döndürür
   */
  this.ilkSayi = ilkSayi;
  this.asagiSay = () => {
    if (this.ilkSayi > 0) {
      return this.ilkSayi--;
    } else {
      return 0;
    }
  };
}
var Counter = new Sayici(4);
console.log(Counter.asagiSay());
console.log(Counter.asagiSay());
console.log(Counter.asagiSay());
console.log(Counter.asagiSay());
console.log(Counter.asagiSay());
console.log(Counter.asagiSay());

function Mevsimler() {
  /**
   * [Görev 5A] Mevsimler , bir mevsimler nesnesi oluşturur
   */

  // ✨ gerekli propları ekleyin

  /**
   * [Görev 5B] sonraki metodu bir sonraki mevsimi gösterir
   * @returns {string} - bir sonraki mevsim "yaz" olarak yüklenir
   *
   * ÖRNEK
   * const mevsimler = new Mevsimler()
   * mevsimler.sonraki() // "yaz" döndürür
   * mevsimler.sonraki() // "sonbahar" döndürür
   * mevsimler.sonraki() // "kış" döndürür
   * mevsimler.sonraki() // "ilkbahar" döndürür
   * mevsimler.sonraki() // "yaz" döndürür
   */
  this.index = 0;
  this.mevsimler = ["ilkbahar", "yaz", "sonbahar", "kış"];
  this.sonraki = () => {
    var nextIndex = (this.index + 1) % this.mevsimler.length;
    var newMevsim = this.mevsimler[nextIndex];
    this.index = nextIndex;
    return newMevsim;
  };
}
const mevsimler = new Mevsimler();
console.log(mevsimler.sonraki());
console.log(mevsimler.sonraki());
console.log(mevsimler.sonraki());
console.log(mevsimler.sonraki());
console.log(mevsimler.sonraki());
console.log(mevsimler.sonraki());
console.log(mevsimler.sonraki());
console.log(mevsimler.sonraki());

function Araba(isim, depoBenzin, kml) {
  /**
   * [Görev 6A] Araba 3 argüman alarak bir araba nesnesi oluşturur
   * @param {string} isim - arabanın ismi
   * @param {number} depo - benzin deposu kapasitesi
   * @param {number} kml - arabanın litre başına kat edebileceği km yol
   */

  this.odometer = 0; // araba 0 kilometrede yüklenecek
  this.depo = depoBenzin; // araba full depoyla yüklenecek
  // ✨ gerekli propları ekleyin
  this.isim = isim;
  this.kml = kml;
  this.maxDepo = depoBenzin;

  /**
   * [Görev 6B] sur metodu odometera km ekler ve aynı oranda depodan benzin tüketir
   * @param {string} gidilecekyol - arabayı sürmek istediğimiz km yol
   * @returns {number} - güncellenen odometer değeri
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(100) // 100 döndürür
   * focus.sur(100) // 200 döndürür
   * focus.sur(100) // 300 döndürür
   * focus.sur(200) // 500 döndürür
   * focus.sur(200) // 600 döndürür (100 km sonra benzin bitti)
   */
  this.sur = (gidilecekyol) => {
    // ✨ kodlar buraya

    let maxYol = this.depo * this.kml;
    if (gidilecekyol <= maxYol) {
      this.odometer += gidilecekyol;
      this.depo -= gidilecekyol / this.kml;
    } else {
      this.depo = 0;
      this.odometer += maxYol;
    }

    return this.odometer;
  };

  /**
   * [Görev 6C] Depoya benzin ekleme
   * @param {number} litre - depoya eklemek istediğimiz benzin litresi
   * @returns {number} - benzin eklendikten sonra gidilebilecek maksimum yol
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(600) // 600 döndürür
   * focus.sur(1) // 600 döndürür (depo boş olduğundan yol gidilemedi)
   * focus.benzinal(99) // 600 döndürür (depo yalnızca 20 litre alabiliyor)
   */
  this.benzinal = (litre) => {
    // ✨ kodlar buraya

    const kalanKapasite = this.maxDepo - this.depo;

    if (litre <= kalanKapasite) {
      this.depo = this.depo + litre;
    } else {
      this.depo = this.maxDepo;
    }

    return this.depo * this.kml;
  };
}
const focus = new Araba("focus", 20, 30);
console.log(focus.sur(100)); // 100 döndürür
console.log(focus.sur(100)); // 200 döndürür
console.log(focus.sur(100)); // 300 döndürür
console.log(focus.sur(200)); // 500 döndürür
console.log(focus.sur(600)); // 500 döndürür
console.log(focus.sur(1)); // 600 döndürür
console.log(focus.benzinal(99)); // 6000 döndürür
/**
 * [Görev 7] Bir sayının çift olup olmadığını asenkron olarak çözümler
 * @param {number} sayi - kontrol edilecek sayı
 * @returns {promise} - sayı çiftse true, aksi takdirde false
 *
 * ÖRNEK
 * asenkronCiftSayi(2).then(result => {
 *    // sonuç true
 * })
 * asenkronCiftSayi(3).then(result => {
 *    // sonuç false
 * })
 */
function asenkronCiftSayi(sayi) {
  this.sayi = sayi;
  return new Promise((res, rej) => {
    sayi % 2 === 0 ? res(true) : res(false);
  });
}
asenkronCiftSayi(2).then((result) => {
  console.log(result); 
});
asenkronCiftSayi(3).then((result) => {
  console.log(result); 
});

module.exports = {
  nesneyiTrimle,
  verileniTrimle,
  enBuyukTamsayiyiBul,
  asenkronCiftSayi,
  Sayici,
  Mevsimler,
  Araba,
};
