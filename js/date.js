let numberField = document.querySelector('.number')
let monthField = document.querySelector('.month')

let month = new Date().getMonth()
let number = new Date().getDate()

numberField.innerHTML = `${number}  `

switch (month){
  case 1:
    monthField.innerHTML = 'лютого'
    break;
  case 2:
    monthField.innerHTML = 'березня'
    break;
  case 3:
    monthField.innerHTML = 'квітня'
    break;
  case 4:
    monthField.innerHTML = 'травня'
    break;
  case 5:
    monthField.innerHTML = 'червня'
    break;
  case 6:
    monthField.innerHTML = 'липня'
    break;
      case 7:
    monthField.innerHTML = 'серпня'
    break;
  case 8:
    monthField.innerHTML = 'вересня'
    break;
  case 9:
    monthField.innerHTML = 'жовтня'
    break;
  case 10:
    monthField.innerHTML = 'листопада'
    break;
  case 11:
    monthField.innerHTML = 'грудня'
    break;
  case 12:
    monthField.innerHTML = 'січня'
    break;
  }
