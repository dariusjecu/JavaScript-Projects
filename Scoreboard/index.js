let home = document.getElementById("home-el");
let guest = document.getElementById("guest-el");

function add(x, num)
{
    let el = document.getElementById(x);
    el.textContent = parseInt(el.textContent) + num;

    if(x == "score-home")
    {
        let ta = document.getElementById("score-guest");
        guest.innerHTML = guest.textContent;
        home.innerHTML = home.textContent;
        
        if(parseInt(el.textContent)>parseInt(ta.textContent))
        {
            home.innerHTML = '<u>' + home.innerHTML + '</u>';
            console.log(home.innerHTML);
        }
        else if(parseInt(el.textContent)<parseInt(ta.textContent))
        {
            guest.innerHTML = '<u>' + guest.innerHTML + '</u>';
            console.log(guest.innerHTML);
        }
    }
    else if(x == "score-guest")
    {
        let ta = document.getElementById("score-home");
        guest.innerHTML = guest.textContent;
        home.innerHTML = home.textContent;

        if(parseInt(el.textContent)<parseInt(ta.textContent))
        {
            home.innerHTML = '<u>' + home.innerHTML + '</u>';
            console.log(home.innerHTML);
        }
        else if(parseInt(el.textContent)>parseInt(ta.textContent))
        {
            guest.innerHTML = '<u>' + guest.innerHTML + '</u>';
            console.log(guest.innerHTML);
        }
    }
}

function reset(x,y)
{
    let el = document.getElementById(x);
    let ta = document.getElementById(y);

    guest.innerHTML = guest.textContent;
    home.innerHTML = home.textContent;

    el.textContent = 0;
    ta.textContent = 0;
}

