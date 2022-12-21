let inputColor = document.getElementById("inputColor");
let sliderEl = document.getElementById("slider");
let sliderText = document.getElementById("sliderText");
let alteredColor = document.getElementById("alteredColor");
let alteredText = document.getElementById("alteredText");
let colorPick = document.getElementById("color-pick");

let RGB = [];

function Hex_in_input(){
    hexInput = document.getElementById("hexInput");

    console.log(hexInput.innerHTML);

    if(isValidHex(hexInput.value))
            {
                inputColor.style.backgroundColor = Hex_to_RGB(hexInput.value, 2);
                sliderText.innerHTML = `0%`;
                sliderEl.value = 0;
                alteredColor.style.backgroundColor = alterColor(hexInput.value, sliderEl.value);
                console.log(hexInput.value);
            }
}

hexInput.addEventListener("keyup", function(){
    Hex_in_input();
})

colorPick.addEventListener('change' , function(){
    Hex_in_input();
})
// inputColor.addEventListener("mouseover")

alteredText.addEventListener("click", function(){
    let val = alteredText.innerHTML.replace("Altered Color:","");
    console.log(val);
    navigator.clipboard.writeText(val);
    alert(`Copied to clicboard: ${val}`);
 
})

sliderEl.addEventListener("input", function(){
    sliderText.innerHTML = sliderEl.value + "%";
    if(isValidHex(hexInput.value))
        {
            if(darkenText.classList.contains("unselected"))
                alteredColor.style.backgroundColor = alterColor(hexInput.value, sliderEl.value);
            else
                alteredColor.style.backgroundColor = alterColor(hexInput.value, -sliderEl.value);
        }
})

toggleBtn.addEventListener('click', function(){
    if(toggleBtn.classList.contains('toggled')){
      toggleBtn.classList.remove('toggled');
      lightenText.classList.remove('unselected');
      darkenText.classList.add('unselected');

      sliderText.innerHTML = `0%`;
      sliderEl.value = 0;
      alteredColor.style.backgroundColor = alterColor(hexInput.value, 0);

    } else {
      toggleBtn.classList.add('toggled');
      lightenText.classList.add('unselected');
      darkenText.classList.remove('unselected');

      sliderText.innerHTML = `0%`;
      sliderEl.value = 0;
      alteredColor.style.backgroundColor = alterColor(hexInput.value, 0);
    } 
  })


  colorPick.addEventListener("input", function(){
        hexInput.value = colorPick.value;
  })


function alterColor(hex, percentage){
    let RGBColor = Hex_to_RGB(hex, 1);

    RGBColor[0] += parseInt(RGBColor[0] * (percentage/100));
    RGBColor[1] += parseInt(RGBColor[1] * (percentage/100));
    RGBColor[2] += parseInt(RGBColor[2] * (percentage/100));

    if(RGBColor[0] > 255)
        RGBColor[0] = 255;
    if(RGBColor[1] > 255)
        RGBColor[1] = 255;
    if(RGBColor[2] > 255)
        RGBColor[2] = 255;

    alteredText.innerHTML = `Altered Color: ${RGB_to_Hex(RGBColor)}`;

    return `rgb(${RGBColor[0]}, ${RGBColor[1]}, ${RGBColor[2]})`
}

// console.log(alterColor("#43f", 10));
// console.log(parseInt("ff",16));

function Hex_to_RGB(hex, ver){
    RGB = [];
    let aux = hex.replace("#", "");
    if(aux.length === 3)
    {
        RGB.push(parseInt(`${aux[0]}${aux[0]}`, 16));
        RGB.push(parseInt(`${aux[1]}${aux[1]}`, 16));
        RGB.push(parseInt(`${aux[2]}${aux[2]}`, 16));
    }
    else if(aux.length === 6)
    {
        RGB.push(parseInt(`${aux[0]}${aux[1]}`, 16));
        RGB.push(parseInt(`${aux[2]}${aux[3]}`, 16));
        RGB.push(parseInt(`${aux[4]}${aux[5]}`, 16));
    }
    if(ver === 1)
        return RGB;
    else
        return `rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`;
}

function RGB_to_Hex(RGB){
    let num1 = "";
    let num2 = "";
    let num3 = "";

    num1 = RGB[0].toString(16);
    num2 = RGB[1].toString(16);
    num3 = RGB[2].toString(16);

    if(num1.length === 1)
        num1 = "0" + num1;
    if(num2.length === 1)
        num2 = "0" + num2;
    if(num3.length === 1)
        num3 = "0" + num3;

    return `#${num1}${num2}${num3}`
}

function isValidHex(hex) {
    if(!hex) return false;

    let strippedHex = hex.replace('#', '');
    if(strippedHex.length === 6 || strippedHex.length === 3)
        for(let i=0; i<strippedHex.length; i++)
        {
                if(strippedHex[i] >= "0" && strippedHex[i] <= "f")
                    continue;
                else
                    return false;
        }
    else
        return false;
    
    return true;
}