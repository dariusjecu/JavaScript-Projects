let characters =["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
"6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
"_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

console.log(characters.length);

let Pass1 = document.getElementById("pass1");
let Pass2 = document.getElementById("pass2");
let passLenght;

let symbolsCheck = true;
let numbersCheck = true;

function getValue()
{
    passLenght = document.getElementById("pass-lenght").value;
}

function generate_pass()
{
    Pass1.textContent = "";
    Pass2.textContent = "";
    for(let i=0; i<passLenght ; i++)
    {
        let randNr1 = Math.floor(Math.random() * characters.length);
        Pass1.textContent += characters[randNr1];

        let randNr2 = Math.floor(Math.random() * characters.length);
        Pass2.textContent += characters[randNr2];
    }
}

function copy_text( file )
{
    let copyText = document.getElementById(file).textContent;

    navigator.clipboard.writeText(copyText).then(function(x) {
        alert("Link copied to clipboard: " + copyText);
      });

}

function symbols()
{
    let symbolEL = document.getElementById("symbol-el");
    if(symbolsCheck == true)
        {
            symbolsCheck = false;
            symbolEL.textContent = "Symbols: OFF";
        }
    else
        {
            symbolsCheck = true;
            symbolEL.textContent = "Symbols: ON";
        }
    change_Array();
}

function numbers()
{
    let numberslEL = document.getElementById("numbers-el");
    if(numbersCheck == true)
        {
            numbersCheck = false;
            numberslEL.textContent = "Numbers: OFF";
        }
    else
        {
            numbersCheck = true;
            numberslEL.textContent = "Numbers: ON";
        }
    change_Array();
}

function change_Array()
{
    if(symbolsCheck == true && numbersCheck == true)
        characters = ["A","B","C","D","E","F","G","H","I","J","K",
        "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
        "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
        "r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
        "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
        "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
    else if(symbolsCheck == true && numbersCheck == false) 
        characters = ["A","B","C","D","E","F","G","H","I","J","K",
        "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
        "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
        "r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")",
        "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
    else if(symbolsCheck == false && numbersCheck == true)
        characters = ["A","B","C","D","E","F","G","H","I","J","K",
        "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
        "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
        "r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
        "6", "7", "8", "9"];
    else if(symbolsCheck == false && numbersCheck == false)
        characters = ["A","B","C","D","E","F","G","H","I","J","K",
        "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
        "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
        "r","s","t","u","v","w","x","y","z"];
}