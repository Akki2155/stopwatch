let index=0;

function startClick() {
  const hour = document.getElementById("hour");
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");
  const minSec = document.getElementById("minSec");


  const clockInterval=setInterval(() => {
    minSec.innerText = parseInt(minSec.innerText) + 1;
    if (minSec.innerText < 100) {
      if (minSec.innerText < 10) {
        minSec.innerText = `00${minSec.innerText}`;
      } else {
        minSec.innerText = `0${minSec.innerText}`;
      }
    }
    if (minSec.innerText == 1000) {
      sec.innerText = parseInt(sec.innerText) + 1;
      if (sec.innerText < 10) {
        sec.innerText = `0${sec.innerText}`;
      }
      minSec.innerText = "000";
      if (sec.innerText == 60) {
        min.innerText = parseInt(min.innerText) + 1;
        if (min.innerText < 10) {
          min.innerText = `0${min.innerText}`;
        }
        sec.innerText = "00";
        if (min.innerText == 60) {
          hour.innerText = parseInt(hour.innerText) + 1;
          if (hour.innerText < 10) {
            hour.innerText = `0${hour.innerText}`;
          }
          min.innerText = "00";
        }
      }
    }
  }, 1);

  document.getElementById('pause').addEventListener('click', ()=>{  clearInterval(clockInterval) })

  document.getElementById('reset').addEventListener('click', ()=>{
      hour.innerText='00';
      min.innerText='00';
      sec.innerText='00';
      minSec.innerText='000';
      document.getElementById('castTimer').innerHTML=''
      index=0;  
  })




}


document.getElementById('cast').addEventListener('click', ()=>{
    index++;
    document.getElementById('castTimer').innerHTML+=`<div class='castConatiner'>CAST ${index} : ${hour.innerText}:${min.innerText}:${sec.innerText}:${minSec.innerText}</div>`
})