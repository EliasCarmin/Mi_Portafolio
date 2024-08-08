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
let con_database=document.getElementById('database');
let con_python=document.getElementById('number_python');
let con_java=document.getElementById('number_java');
let con5=document.getElementById('powerbi');
let con_excel=document.getElementById('excel');

let can1=0,can_database=0,can_python=0,can_java=0,can5=0,can_excel=0;
let time=225;

let tiempo1 = setInterval(()=>{
    con1.textContent=can1+=1;

    if(can1==30){
        clearInterval(tiempo1);
    }

},200);

let tiempo_database = setInterval(()=>{
    con_database.textContent=can_database+=1;
    
    if(can_database==80){
        clearInterval(tiempo_database);
    }

},200);

let tiempo_python = setInterval(()=>{
    con_python.textContent=can_python+=1;
    
    if(can_python==50){
        clearInterval(tiempo_python);
    }

},200);
let tiempo_java = setInterval(()=>{
    con_java.textContent=can_java+=1;
    
    if(can_java==50){
        clearInterval(tiempo_java);
    }

},200);
let tiempo5 = setInterval(()=>{
    con5.textContent=can5+=1;
    
    if(can5==50){
        clearInterval(tiempo5);
    }

},200);
let tiempo_excel = setInterval(()=>{
    con_excel.textContent=can_excel+=1;
    
    if(can_excel==80){
        clearInterval(tiempo_excel);
    }

},200);