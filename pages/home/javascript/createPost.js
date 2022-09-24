function getPostUser (users, posts){
    for (i = 0; i < users.length; i++){
        for (j = 0; j < posts.length; j++){
            if (users[i].id == posts[j].user){
                createPost ()
            }
        }
    }
}

function createPost (){
    let section = document.createElement(`section`)
        section.classList = `post`
        
        let divConteiner = document.createElement(`div`)
        divConteiner.classList = `userInfo`
        
        let imgConteiner = document.createElement(`figure`)
        imgConteiner.classList = `userImg`
        
        let imgUser = document.createElement(`img`)
        imgUser.src = `${users[i].img}`
        imgUser.alt = `${users[i].user}`
        
        let divOcupation = document.createElement(`div`)
        divOcupation.classList = `nameOcupation`
        
        let h2User = document.createElement(`h2`)
        h2User.classList = `nameUser`
        h2User.innerHTML = `${users[i].user}`

        let smallUser = document.createElement(`small`)
        smallUser.classList = `ocupation`
        smallUser.innerHTML = `${users[i].stack}`
        if (!users[i].stack){
            smallUser.innerHTML = `Não mencionado`
        }
        
        let h1 = document.createElement(`h1`)
        h1.innerHTML = `${posts[j].title}`
        
        let p = document.createElement(`p`)
        p.innerHTML = `${posts[j].text}`    
        
        let divFooter = document.createElement(`div`)
        divFooter.classList = `postFooter`
        
        let buttonModalPost = document.createElement(`button`)
        buttonModalPost.classList = `openPost`
        buttonModalPost.innerHTML = `Abrir Post`
        
        let buttonLike = document.createElement(`button`)
        buttonLike.classList = `like`
        
        let imgLike = document.createElement(`img`)
            imgLike.classList = `heartLike`
            imgLike.src = `assets/img/heart.svg`
            imgLike.alt = `Like button`
        
        let queryMain = document.querySelector(`.postArea`)
        
        queryMain.append(section)
        section.append(divConteiner, h1, p, divFooter)
        divConteiner.append(imgConteiner, divOcupation)
        imgConteiner.append(imgUser)
        divOcupation.append(h2User, smallUser)
        divFooter.append(buttonModalPost, buttonLike)
        buttonLike.append(imgLike)
    }
    
getPostUser (users, posts)