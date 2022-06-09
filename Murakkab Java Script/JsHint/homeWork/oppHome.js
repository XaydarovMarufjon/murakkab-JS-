// 1-) Bizda tayyor funksiyalardan tashkil topgan dastur mavjud, va biz ushbu funksiyalarni obyektning metodlariga 
// o’zgartirishimiz kerak bo’ladi. Ya’ni seriesDB obyektiga, yozgan funksiyalarimizni metod ko’rinishda yozishimiz kerak.
//  Bunday xolat real loyihalarda uchrab turadi. 

// 2-) visibleDB nomli metod yarating, qachonki ushbu metodni chaqirsak private xususiyati true bo’lgan bo’lsa
//  false bo’lsin va teskari.

// 3-)  ga ok va cancel tugmasini bosganda savolni qayta bering. Agarda foydalanuvchi hammasini
//  tog’ri qilgan bo’lsa massivni forEach metodi yordamida itteratsiya qilib consolega ushbu xabarni yuboring
//   “Yaxshi ko’rgan janringiz #(son) - nomi (massivdagi element)”

'use strict'

const seriesDB = {
  count: 0,
  series: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    seriesDB.count = +prompt("Nechta serial ko'rdingiz?", '')

    while (
      seriesDB.count == '' ||
      seriesDB.count == null ||
      isNaN(seriesDB.count)
    ) {
      seriesDB.count = +prompt("Nechta serial ko'rdingiz?", '')
    }
  },
  rememberMySeries: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Oxirgi ko'rgan serialingiz?"),
        b = prompt('Nechi baxo berasiz?')

      if (a != null && b != null && a != '' && b != '') {
        seriesDB.series[a] = b
        console.log('done')
      } else {
        console.log('error')
        i--
      }
    }
  },
  detectLevelSeries: function () {
    if (seriesDB.count < 5) {
      console.log('Kam serial ko’ripsiz')
    } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
      console.log('Siz classik tamoshabin ekansiz')
    } else if (seriesDB.count >= 10) {
      console.log('Siz serialchi zvezda ekansiz')
    } else {
      console.log('Error')
    }
  },
  showDb: function () {
    if (!seriesDB.private) {
      console.log(seriesDB)
    }
  },
  visibleDB: function () {
    if (seriesDB.private) {
      seriesDB.private = false
    } else {
      seriesDB.private = true
    }
  },
  writeGenres: function () {
    for (let i = 0; i < 3; i++) {
    const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`, '')
    if (genre === '' || genre === null) {
      console.log("Siz notog'ri ma'lumot kiritdingiz")
      i--
    } else {
      seriesDB.genres[i] = genre
    }
    }

    let genres = prompt(
      "Yaxshi ko'rgan janringizni vergul yordamida yozing"
    ).toLowerCase()

    if (genres === '' || genres === null) {
      console.log("Siz notog'ri ma'lumot kiritdingiz")
      i--
    } else {
      seriesDB.genres = genres.split(', ')
      seriesDB.genres.sort()
    }

    seriesDB.genres.forEach((item, idx) => {
      console.log( `Yaxshi ko’rgan janringiz ${idx + 1} - nomi ${item}`)
    })
  },
}