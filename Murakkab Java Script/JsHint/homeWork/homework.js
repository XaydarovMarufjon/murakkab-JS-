//  12 -dars 
// 1-) numberOfSeries nomli o’zgaruvchi yarating va unga “Nechta serial ko’rdingiz?” degan javobini qo’ying. 
let numberOfSeries = +prompt("Nechta serial ko'rdingiz?");
// console.log(numberOfSeries);

// 2-) seriesDB nomli object yasang va unga quydagi xususiyatlarni yozib chiqing:
// - count - bu yerga birinchi savoldagi javob qo’yilish kerak.
// - series- bu yerga bo’sh object yozing.
// - actors - bosh object joylang.
// - genres - bu yerga bo’sh massiv joylang
// - privat - bu yerda boolean ma’lumot turi bo’lishi kerak, boshlang’ich qiymat false bo’lsin.
 
let seriesDB = {
    count : numberOfSeries ,
    series : {} ,
    actors : "Cobra Cai",
    genres : [] , 
    privat  : false ,

    start: function(){
        
    }
}


// 3-) Foydalanuvchiga ushbu savolni ikki marotaba bering:
// - “Oxirgi ko’rgan serialingiz?”
// - “Nechi baxo berasiz?”
// Ushbu savollardagi javobni o’zgaruvchilarga joylashtirishingiz kerak.
// Javoblarni series objectga quyidagi formatda joylang:
// series: {
// 	“Ahmad ibn Hanbal”: “10”,
// 	“Umar ibn Hattob”: “10”
// }








// 1-) Serial haqida bergan savollarimizni kodini optimillashtirish.
// 2-) Foydalanuvchi bizni savollarimizni bo’sh qoldirmasligi kerak va cancel tugamni bosgan 
//taqdirda ham biz savollarni qayta qayta berishimiz kerak, javob bermagunga qadar. Ushbu vazifa tsikl yordamida qilinadi.
 

// for (let i = 0; i < 2; i++) {
//     let savol1 = prompt("Oxirgi  ko’rgan turk serialingiz?");
//     let savol2 = prompt(" turk serialiga Nechi baxo berasiz?");

//     if(savol1 != null && savol1 != '' && savol2 != null && savol2 != ''){
//         seriesDB.series[`${savol1}`] = savol2;    
//         console.log('done');
     
//     }else {
//         i--;
//         console.log('error !!!');
//     }
// }
///=>>> while da 

// let cycleCount = 0;
// while (cycleCount <2 ) {
//     let savol1 = prompt("Oxirgi  ko’rgan turk serialingiz?");
//     let savol2 = prompt(" turk serialiga Nechi baxo berasiz?");
//     if(savol1 != null && savol1 != '' && savol2 != null && savol2 != ''){
//         seriesDB.series[`${savol1}`] = savol2;    
//         console.log('done');
     
//     }else {
//         i--;
//         console.log('error !!!');
//     }
//     cycleCount++
// }

///==>> do  whileda 

// let cycleCount2 = 0;
// do{
//     let savol1 = prompt("Oxirgi  ko’rgan turk serialingiz?");
//         let savol2 = prompt(" turk serialiga Nechi baxo berasiz?");
//         if(savol1 != null && savol1 != '' && savol2 != null && savol2 != ''){
//             seriesDB.series[`${savol1}`] = savol2;    
//             console.log('done');
         
//         }else {
//             i--;     /// new   tsiklni ortga qaytarish 
//             console.log('error !!!');
//         }
//         cycleCount2++
// }
//  while(cycleCount2 < 2 )


// if (seriesDB.count <= 5 && seriesDB > 0) {
//     alert('Kam serial ko’ripsiz')
// }
// else if(seriesDB.count > 5 && seriesDB.count <= 10){
//     alert('Siz classik tamoshabin ekansiz')
// }
// else if(seriesDB.count > 10 ){
//     alert('Siz serialchi zvezda ekansiz')
// }else{
//     alert("qandaydir xatolik bor!!")
// }
// console.log(seriesDB);


   
  



// 3-) Shartli operator yordamida foydalanuvchi ko’rgan seriallar sonin tekshirib 
// agar u 5 dan kam serial ko’rgan bo’lsa unga consolega “Kam serial ko’ripsiz” xabarni ko’rsatishimiz kerak,
// agarda 5 va 10 oralig’ ida ko’rgan bo’lsa “Siz classik tamoshabin ekansiz” deyishimiz kerak,
// agarda 10 dan ziyod ko’rgan bo’lsa “Siz serialchi zvezda ekansiz” yozuv chiqarishimiz kerak.


