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
let con2=document.getElementById('number2');
let con3=document.getElementById('number3');
let con4=document.getElementById('number4');
let con5=document.getElementById('number5');

let can1=0,can2=0,can3=0,can4=0,can5=0;
let time=25;

let tiempo1 = setInterval(()=>{
    con1.textContent=can1+=1;

    if(can1==30){
        clearInterval(tiempo1);
    }

},200);

let tiempo2 = setInterval(()=>{
    con2.textContent=can2+=1;
    
    if(can2==50){
        clearInterval(tiempo2);
    }

},200);

let tiempo3 = setInterval(()=>{
    con3.textContent=can3+=1;
    
    if(can3==20){
        clearInterval(tiempo3);
    }

},200);
let tiempo4 = setInterval(()=>{
    con4.textContent=can4+=1;
    
    if(can4==30){
        clearInterval(tiempo4);
    }

},200);
let tiempo5 = setInterval(()=>{
    con5.textContent=can5+=1;
    
    if(can5==50){
        clearInterval(tiempo5);
    }

},200);