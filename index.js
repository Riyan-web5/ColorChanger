const colors = ["red", "blue", "rgb(227, 61, 103)", "#c7592a"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
     let randonumber = getrandomcolor();
     document.body.style.backgroundColor = colors[randonumber];
     color.textContent = colors[randonumber];
});
function getrandomcolor(){
    return Math.floor(Math.random() * colors.length);
}