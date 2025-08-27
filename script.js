let input = document.querySelector(".input")
let result  = document.querySelector(".result")
let clear = document.querySelector(".clear")
let equal = document.querySelectorAll(".equal")
let history = document.querySelector(".history")


function handleclick(e){
  let btnvalue = e.innerText

  console.log(btnvalue)
  let inputValue = `${input.value}${btnvalue}`
  input.value = inputValue;
  if(['+', '-', '*', '/'].includes(e.innerText)) return 
  result.value = eval(inputValue)
 
}

function finalResult(){
  
  
   result.style.fontWeight = "bold";
   result.style.color = "orangered"
   return result.value
   

}

clear.addEventListener("click", ()=>{
  result.value= ""
  input.value = ""
})


function showhistory(){
  let record = `${input.value} = ${finalResult}`
    history.push(record)

}