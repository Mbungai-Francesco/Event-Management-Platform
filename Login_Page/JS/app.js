const squeeze = document.querySelector("#squeeze")
const side = document.querySelector("#bar")
// onload(side.classList.toggle("side_bar"))
squeeze.addEventListener("click",function (){
  side.classList.toggle("min_side")
  side.classList.toggle("side_bar" )
})