let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');

let logospan = document.querySelectorAll('.logo-parts');

window.addEventListener('DOMContentLoaded',() => {

    setTimeout(() => {
        logospan.forEach((span,index)=>{
            setTimeout(() => {
                span.classList.add('active');
            }, (index+1)*100);
        });

        setTimeout(() => {
            logospan.forEach((span,index)=>{
                setTimeout(() => {
                    
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (span+1)*50);
            });
        }, 2500);

        setTimeout(() => {
            intro.style.top='-100vh';
        }, 3000);

    });
});

//Código para el contador 
let con1=document.getElementById('number1');
let con2=document.getElementById('numero2');
let con3=document.getElementById('numero3');

let can1=0,can2=0,can3=0;
let time=25;

let tiempo1 = setInterval(()=>{
    con1.textContent=can1+=1;

    if(can1==30){
        clearInterval(tiempo1);
    }

},200);