let inputBtn = document.getElementById("input-btn");
let tabBtn = document.getElementById("tab-btn");
let deleteBtn = document.getElementById("delete-btn");
let inputEl = document.getElementById("input-el");
let ulEl = document.getElementById("ul-el");

let urlList = [];
let favicon = [];


if(localStorage.getItem("favicon") != null)
    {
        favicon = JSON.parse(localStorage.getItem("favicon"));
        display();
    }
if(localStorage.getItem("urlList") != null)
    {
        urlList = JSON.parse(localStorage.getItem("urlList"));
        display();
    }

function display()
{
    let aux = "";
    for(let i=0; i<urlList.length; i++)
        if(favicon[i] == null)
            aux += `<li>
                        <a href='${urlList[i]}' target="_blank">${urlList[i]}</a>
                    </li>`;
        else
            aux += `<li>
                        ${favicon[i]}<a href='${urlList[i]}' target="_blank">${urlList[i]}</a>
                    </li>`;
    ulEl.innerHTML = aux;
}

inputBtn.addEventListener("click", function(){
    
    urlList.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("urlList",JSON.stringify(urlList));
    localStorage.setItem("favicon",JSON.stringify(favicon));
    display();
})

tabBtn.addEventListener("click", function(){
    

    chrome.tabs.query({active: true, currentWindow: true}, function(tab){
        favicon.push (`<img src="${tab[0].favIconUrl}">`);
        urlList.push(tab[0].url);
        localStorage.setItem("urlList",JSON.stringify(urlList));
        localStorage.setItem("favicon",JSON.stringify(favicon));
        display();
    })

})

deleteBtn.addEventListener("click", function(){
    
    urlList = [];
    favicon = [];
    localStorage.setItem("urlList",JSON.stringify(urlList));
    localStorage.setItem("favicon",JSON.stringify(favicon));
    display();   
})
