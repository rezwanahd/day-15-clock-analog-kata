const h = document.querySelector('.h');
const m = document.querySelector('.m');
const s = document.querySelector('.s');
const bgtext = document.querySelector('.bgtext')




setInterval(() => {

let date = new Date();

let current_hour = date.getHours();
let current_min = date.getMinutes();
let current_sec = date.getSeconds();


s.style.transform = `rotate(${ kata(60, current_sec) }deg)`;
m.style.transform = `rotate( ${ kata(60 , current_min)}deg)`;
h.style.transform = `rotate( ${ kata(12 , current_hour)}deg)`;
    

}, 1000);




function kata(time , current) {
    return (360* current ) / time;
    
}


