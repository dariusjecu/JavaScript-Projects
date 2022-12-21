import Dog from "./dog.js"
import dogs from "./data.js"

const main = document.getElementById("add");
const likeBtn = document.getElementById("like");
const nopeBtn = document.getElementById("nope");

let dog = new Dog(dogs.shift());
main.innerHTML = dog.getHtml(dog);

likeBtn.addEventListener("click", () => {

    if(dog.hasBeenSwiped == false)
    {
        document.getElementById(dog.LikeId).classList.add("active");
        likeBtn.classList.add("color-1");
        dog.hasBeenLiked = true;
    }

    if(dogs.length > 0)
    {
        dog = new Dog(dogs.shift());
        setTimeout(() => {
            main.innerHTML = dog.getHtml(dog);
            likeBtn.classList.remove("color-1");
        }, 1000);
    }
})

nopeBtn.addEventListener("click", () => {

    if(dog.hasBeenLiked == false)
    {
        document.getElementById(dog.NopeId).classList.add("active");
        nopeBtn.classList.add("color-2");
        dog.hasBeenSwiped = true;
    }

    if(dogs.length > 0)
    {
        dog = new Dog(dogs.shift());
        setTimeout(() => {
            main.innerHTML = dog.getHtml(dog);
            nopeBtn.classList.remove("color-2");
        }, 1000);
    }
})
