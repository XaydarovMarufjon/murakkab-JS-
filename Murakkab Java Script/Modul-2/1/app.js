const btns = document.querySelectorAll('button'); 

// console.log(btns[0].classList.length);

const wrapper = document.querySelector('.btn-block'); 
wrapper.addEventListener('click' , (event)=>{

    if (event.target && event.target.classList.contains('red')) {
        console.log("click");
    }
    event.target.style.backgroundColor = "red"
    console.log(event.target);
})


