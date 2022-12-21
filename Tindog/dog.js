class Dog{
    constructor(data){
        Object.assign(this, data);
    }
    getHtml(data){
        const {name, avatar, age, bio, NopeId, LikeId, hasBeenSwiped, hasBeenLiked} = data;
        return `<img id="${LikeId}" class="react" src="./images/badge-like.png">
                <img id="${NopeId}" class="react" src="./images/badge-nope.png">
                <img src="${avatar}">
                <div class="text">
                    <h2>${name}, ${age}</h2>
                    <p>${bio}</p>
                </div>`
    }
}

export default Dog