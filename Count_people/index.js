let count = 0;
let prevCount = count;
let firstCharacter = true;

let entriesP = document.getElementById("entries-p");
let countEl = document.getElementById("count-el");

function increment()
{
    count += 1;
    countEl.innerText = count;
}

function save()
{
    if(firstCharacter == true)
        {
            entriesP.textContent += " "+ count ;
            firstCharacter = false;
        }
        else
            entriesP.textContent += " - "+ count ;
    count = 0;
    countEl.textContent = count;
}



