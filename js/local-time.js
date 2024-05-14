function localTime () { setInterval (function upDate() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  
  let hh = document.querySelector(".hours");
  if (hours>9) {
    hh.innerHTML =`${hours} :`
  }
  else {
    hh.innerHTML =`0${hours} :`
  };

  let mm = document.querySelector(".minutes");
  if (minutes>9){
    mm.innerHTML =`${minutes} :`
  }
  else {
    mm.innerHTML =`0${minutes} :`
  };
  
  let ss = document.querySelector(".seconds");
  if (seconds>9){
    ss.innerHTML =`${seconds}`
  }
  else {
    ss.innerHTML =`0${seconds}`
  };
}, 1000)}
localTime()






