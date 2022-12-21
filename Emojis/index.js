let emojiArray = ["👨‍💻", "⛷", "🍲"];

let emojiContainer = document.getElementById("emoji-container");
let emojiInput = document.getElementById("emoji-input");
let pushBtn = document.getElementById("push-btn");
let unshiftBtn = document.getElementById("unshift-btn");
let popBtn = document.getElementById("pop-btn");
let shiftBtn = document.getElementById("shift-btn");

display();

emojiInput.addEventListener("input", function(){
    let emojiInput = document.getElementById("emoji-input");
})

pushBtn.addEventListener("click", function(){
    if(emojiInput.value != '')
        {
            emojiArray.push(emojiInput.value);
            display();
            emojiInput.value = "";
        }
})

unshiftBtn.addEventListener("click", function(){
    if(emojiInput.value != '')
    {
        emojiArray.unshift(emojiInput.value);
        display();
        emojiInput.value = "";
    }
})

popBtn.addEventListener("click", function(){
    if(emojiArray.length > 0)
    {
        emojiArray.pop();
        display();
    }
})

shiftBtn.addEventListener("click", function(){
    if(emojiArray.length > 0)
    {
        emojiArray.shift();
        display();
    }
})

function display(){
    let string = "";
    for(let i=0; i<emojiArray.length; i++)
        string += " " + emojiArray[i];
    emojiContainer.innerHTML = string;
    emojiContainer.style.fontSize = "40px";
}

