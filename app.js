let btnEl = document.getElementById("btn-el")
let zeroEl = document.getElementById("zero-el")
// console.log(zeroEl)

let count = 0;
// console.log(zeroEl + 1)

btnEl.addEventListener("click",cart)

function cart(){
  zeroEl.innerHTML = count++
}
