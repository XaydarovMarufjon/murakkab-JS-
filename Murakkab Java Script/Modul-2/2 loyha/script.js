window.addEventListener('DOMContentLoaded' , ()=>{

const tabsParent = document.querySelector('.tabheader__items') ,
   tabs = document.querySelectorAll('.tabheader__item'),
   tabsContent = document.querySelectorAll('.tabcontent')
  loader  =document.querySelector('.loader')
  /// loader

  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = 'none';  
    }, 500);
  }, 900);


   // tabs
   function hideTabContent() {

    tabsContent.forEach( (item)=>{
        item.classList.add('hide')
        item.classList.remove('show' ,'fade')
    })

    tabs.forEach( (item)=>{
        item.classList.remove('tabheader__item_active')
    })
   }

   function showTabContent(i = 0) {
    tabsContent[i].classList.add('show' , 'fade')
    tabsContent[i].classList.remove('hide')
    tabs[i].classList.add('tabheader__item_active')
   }

   hideTabContent()
   showTabContent()

  tabsParent.addEventListener('click' ,  (event)=>{
    const target = event.target
     if(target && target.classList.contains('tabheader__item')){
        tabs.forEach( (item , indx)=>{
           if (target == item) {
            hideTabContent()
            showTabContent(indx)
           }
        })
     }

  })

 
const deadline = '2023-12-11';

function gettimeRemaning(endtime) {
 const timer = Date.parse(endtime) - Date.parse(new Date())
  days = Math.floor(timer/ (1000 * 60 * 60 *24))  
  hours = Math.floor((timer/ (1000 * 60 * 60 )) % 24)  
  minutes = Math.floor((timer/ 1000 / 60 ) % 60)  
  seconds = Math.floor((timer/ 1000 ) % 60)  
  
   return {
     timer,
     days,
     hours,
     minutes,
     seconds
   }
 }

 function getZero(num) {
   if (num >= 0 && num < 10) {
    return `0${num}` 
   } else {
    return num
   }
 }

 function setClock(selector , endtime) {
   const timer = document.querySelector(selector),
   days = timer.querySelector('#days'),
   hours = timer.querySelector('#hours'),
   minutes = timer.querySelector('#minutes'),
   seconds = timer.querySelector('#seconds')
   timeInteval = setInterval(updateClock ,1000);

   function updateClock() {
     const t = gettimeRemaning(endtime)

     days.innerHTML =getZero(t.days) 
     hours.innerHTML = getZero(t.hours)
     minutes.innerHTML = getZero(t.minutes)
     seconds.innerHTML = getZero(t.seconds)

     if (t.timer <= 0) {
      clearInterval(timeInteval)
     }
   }
 }

setClock('.timer' , deadline)

/// class

class MenuCard {
   constructor(src , alt , title , decription , price , parentSelector , ...classes){
     this.src = src 
     this.alt = alt
     this.title = title
     this.decription = decription
     this.price = price
     this.classes = classes
     this.parent = document.querySelector(parentSelector)
     this.transfer = 11000
     this.changeToUZS()
   }

   changeToUZS() {
      this.price = this.price * this.transfer
   }
   
   render(){
    const element = document.createElement('div');

    if (this.classes.length == 0) {
      element.classList.add("menu__item")
    } else {
      this.classes.forEach( classname => element.classList.add(classname))
    }

    element.innerHTML = `
            <img src=${this.src} alt=${this.alt} />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">
              ${this.decription}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Price:</div>
              <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
            </div>`

          this.parent.append(element)
   }
}

new MenuCard(
  'img/tabs/1.png' ,
  "usual" , 
  'Plan "Usual"',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
  10,
  '.menu .container',
).render()

new MenuCard(
  'img/tabs/2.jpg' ,
  "usual" , 
  'Plan "Usual"',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
  20,
  '.menu .container',
).render()


new MenuCard(
  'img/tabs/3.jpg' ,
  "usual" , 
  'Plan "Usual"',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
  30,
  '.menu .container',
).render()

function calc(number , def=2) {
  console.log(number + def);
}
calc(3 )  /// agar defga qiymat berilmasa def 2 ni oladi bu default qiymat xisoblanadi

})