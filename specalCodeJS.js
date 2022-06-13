   const tabsParent = document.querySelector('.tabheader__items') ,
   tabs = document.querySelectorAll('.tabheader__item'),
   tabsContent = document.querySelectorAll('.tabcontent')

tabsParent.addEventListener('click' ,  (event)=>{
    const target = event.target
     if(target && target.classList.contains('tabheader__item')){
        tabs.forEach( (item , indx)=>{
           if (target == item) {
             console.log(indx);
           }
        })
     }
  })

///  bir tugmani tanlaganda aynan osha tugmani ozini indexini olish  />

