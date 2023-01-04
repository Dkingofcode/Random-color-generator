const Input = document.querySelector(".input");
const Randomcolor = document.querySelector(".random");

Randomcolor.addEventListener("click", () => {
    randomColor();
})



function randomColor(){
  const color =  Math.random().toString(16).substring(2, 8);
   document.body.style.backgroundColor = "#" + color;
   Input.innerHTML = "#" + color;
   console.log(color);
}









