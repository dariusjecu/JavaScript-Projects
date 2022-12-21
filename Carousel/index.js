let leftBtn = document.getElementById("left-btn");
let rightBtn = document.getElementById("right-btn");
let number = document.getElementById("number");

let images = document.getElementsByClassName("slide-img");

let poz = 0;
number.innerHTML = 1;

let interval = setInterval(function(){
    RightButton(0);
}, 3000);

rightBtn.addEventListener("click", function(){
    RightButton(1);
})

leftBtn.addEventListener("click", function(){
    if(poz === 0)
    {
        images[poz].style.display = "none";
        poz = images.length - 1;
        images[poz].style.display = "block";
        number.innerHTML = images.length;
    }
    else 
    {
        images[poz].style.display = "none";
        poz--;
        images[poz].style.display = "block";
        number.innerHTML--;
    }
    clearInterval(interval);
    interval = setInterval(function(){
        RightButton(0);
    }, 3000);
})

function RightButton(x){
    if(poz === images.length - 1)
    {
        
        images[poz].style.display = "none";
        poz = 0;
        images[poz].style.display = "block";
        number.innerHTML = 1;
    }
    else 
    {
        images[poz].style.display = "none";
        poz++;
        images[poz].style.display = "block";
        number.innerHTML++;
    }
    if(x>0)
    {
        clearInterval(interval);
        interval = setInterval(function(){
            RightButton(0);
        }, 3000);
    }
}