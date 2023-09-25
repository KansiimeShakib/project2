let btnEl = document.getElementById("btn-el")
let zeroEl = document.getElementById("zero-el");
let zero2El = document.getElementById("zero2-el");
let delEl = document.getElementById("del-el");
let subEl = document.getElementById("sub-el");
let addEl = document.getElementById("add-el");
let exEl = document.getElementById("ex-el");
let tryingEl = document.getElementById("trying-el");
let cartCollector = document.getElementById("cart-collector");

let lex = [
  {
    image: "image/shoe 2.jpg",
    tittle: "Snikers",
    price: 35,
  },
]
 
const copy = [...new setInterval(lex.map((item)=>
  {return item}))]

  let i = "";

// exEl.addEventListener("click",()=>{
//   return cartCollector
//   console.log()
// })


let innert = 0;

btnEl.addEventListener("click",()=>{
  zeroEl.innerHTML = innert++
});


addEl.addEventListener("click",()=>{
  zero2El.innerHTML = innert++
})

subEl.addEventListener("click",()=>{
  innert = innert++
  zero2El.innerHTML = innert--
})


delEl.addEventListener("click", ()=>{
  tryingEl.remove();
})











