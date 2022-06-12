"use strict";

document.addEventListener("DOMContentLoaded" , ()=>{
    
    const seriesDB = {
        series : [
           'OMAR' , 
           'The Final Legacy' ,
           'ERTUGRUL' , 
           'MAGNIFICENT CENTURY' , 
           'GREAT SELJUKS: GUARDIANS...' 
        ]
       }
   
    let form = document.querySelector('form.add');
    let input = form.querySelector('.adding__input') ;
    let  checkBox = form.querySelector(".checkbox");

     
    form.addEventListener('submit' , (event)=>{
       event.preventDefault();
       let newSeries = input.value ;
       let checkboxCheck = checkBox.checked  ; 
       if (newSeries) {
            if (newSeries.length > 18 ) {
                newSeries =  `${newSeries.substring(0 , 18)}...`
            }
            if (checkboxCheck) {
              alert(`${newSeries} - sevimli kinoga qoshidi...`); 
            //   newSeries.style.backgroundColor = 
            }
           seriesDB.series.push(newSeries) ;
           sortedArr(seriesDB.series);
           createSeriesList(seriesDB.series , promo__interactive_list)
       }
 
       event.target.reset()
     })

const delAdv = () =>{
    const promo__adv = document.querySelector('.promo__adv');
    promo__adv.remove()
    
}
const makeChanges = ()=>{
    const promo__genre = document.querySelector('.promo__genre')
    promo__genre.innerHTML = "Comedy"
    
    const promo__bg = document.querySelector('.promo__bg ');
    promo__bg.style.backgroundImage = `url('./img/1.jpg')`;
}

function sortedArr(arr){
    arr.sort()
    console.log(arr);
}
   
    
    const promo__interactive_list = document.querySelector('.promo__interactive-list');

    function createSeriesList(series , parent) {
        parent.innerHTML = '' ;
       sortedArr(series)
        series.forEach( (item , index)=>{
              parent.innerHTML += `
              <li class="promo__interactive-item">
              ${index +1}. ${item}
              <div class="delete"></div>
              </li>
              `
        })
        document.querySelectorAll('.delete') .forEach((trash , inx)=>{
            trash.addEventListener( 'click' , ()=>{
                trash.parentElement.remove()
                seriesDB.series.splice(inx , 1)
                createSeriesList(series , parent)
            })

        })
    }




    sortedArr(seriesDB.series)
    makeChanges()
    delAdv()
    createSeriesList(seriesDB.series , promo__interactive_list)

  
})








