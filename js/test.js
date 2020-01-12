 // инициализируем и находим все переменные из html 
const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const start = document.querySelector('.start');

 // начальное значение секунд и минут 
let countSec = 0;
let countMin = 0;

 // задание времени
plus.onclick = () =>{
  if(countSec < 59) ++countSec;
  else{
    countSec = 0;
    ++countMin;
  }
  updateText()
}

minus.onclick = () =>{
  if(countMin <= 0 && countSec===0){
    countSec = 0;
    countMin = 0;
    return;
  }
  if(countSec > 0) --countSec;
  else{
    countSec = 59;
    --countMin;
  }
  updateText();
}

start.onclick = () => {
    countDown();  
}

const updateText = () =>{ 
  seconds.innerHTML = countSec;
  minutes.innerHTML = countMin;
}
updateText();

const countDown = () => { 
  let total = countSec + countMin * 60;
  const timeinterval = setTimeout(countDown, 1000);
  if (total <= 0) {
    clearInterval(timeinterval);
    window.alert('Лупа и Пупа')
  }
  if(countSec > 0) countSec--;
  else{
    countSec = 59;
    countMin--;
  } 
  updateText();
}

