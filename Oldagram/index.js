let posts = [
    {
        name: "Vincent van Gogh",
        location: "Zudert, Netherlands",
        icon: "./images/avatar-vangogh.jpg",
        post: "./images/post-vangogh.jpg",
        likes:"21,492 likes",
        who: "vincey1853",
        comment: "just took a few mushrooms lol"
    },
    {
        name: "Gustave Courbet",
        location: "Ornans, France",
        icon: "./images/avatar-courbet.jpg",
        post: "./images/post-courbet.jpg",
        likes:"15,137 likes",
        who: "jd1735",
        comment: "i'm feelin a bit stressed tbh"
    },
    {
        name: "Joseph Ducreux",
        location: "Paris, France",
        icon: "./images/avatar-ducreux.jpg",
        post: "./images/post-ducreux.jpg",
        likes:"21,492 likes",
        who: "vincey1853",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI"
    }
 ]

 let content = document.getElementById("content");
 
 function display(){
    for(let i=0; i<posts.length; i++)
    {
        content.innerHTML += `<div class="container">
                                <div class="description">
                                    <img class="icon" src="${posts[i].icon}">
                                    <div class="text">
                                        <h3>${posts[i].name}</h3>
                                        <p>${posts[i].location}</p>
                                    </div>
                                </div>
                                <img class="post-image" src="${posts[i].post}">
                                <div>
                                    <div class="buttons">
                                        <img class="fav" src="./images/icon-heart.png">
                                        <img class="fav" src="./images/icon-comment.png">
                                        <img class="fav" src="./images/icon-dm.png">
                                    </div>
                                    <p class="bolded">${posts[i].likes}</p>
                                    <p class="bolded space">${posts[i].who} <span>${posts[i].comment}</span></p>
                                    <div class="spacer"></div>
                                </div>
                              </div>`
    }
 }

 display();
