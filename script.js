var css = document.querySelector("h3");
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")
let generate = document.querySelector(".generate")


function setGradient(){    
    body.style.background = "linear-gradient(to right," + color1.value + ", "+ color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

window.addEventListener("load",setGradient());

color1.addEventListener("input", function(e){
    console.log(e.target.value)
});

generate.addEventListener("click",function(e){
    const alpha = ['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9]
    let hash1 = '#'
    let hash2 = '#'
    for (let i = 0; i < 6; i++) {
       random = Math.floor(Math.random() * alpha.length)       
       let jono1 = hash1 += alpha[random]       
    //    console.log("jono1",jono1) 
       random1 = Math.floor(Math.random() * alpha.length)       
       let jono2 = hash2 += alpha[random1]       
    //    console.log("jono2",jono2)
       body.style.background = "linear-gradient(to right," + jono1 + ", "+ jono2 + ")";
       css.textContent = body.style.background + ";";
       e.target.style.background = "linear-gradient(to right," + jono1 + ", "+ jono2 + ")"
    }
})

