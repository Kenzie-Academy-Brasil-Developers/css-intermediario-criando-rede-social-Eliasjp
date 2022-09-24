function getFollowUser (users, sugestUsers){
     for (i = 0; i < users.length; i++){
        for (j = 0; j < sugestUsers.length; j++){
            if (users[i].id == sugestUsers[j]){
                createUserFollow ()
            }
        }
     }
}

function createUserFollow (){
    let divFollowConteiner = document.createElement(`div`)
        divFollowConteiner.classList = `followConteiner`

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

    let buttonFollow = document.createElement(`button`)
        buttonFollow.classList = `eventButton followButton`
        buttonFollow.innerHTML = `Seguir`

        let queryDivAllUsers = document.querySelector(`.allFollowUserConteiner`)

    queryDivAllUsers.append(divFollowConteiner)
    divFollowConteiner.append(divConteiner, buttonFollow)
    divConteiner.append(imgConteiner, divOcupation)
    imgConteiner.append(imgUser)
    divOcupation.append(h2User, smallUser)
}

getFollowUser (users, sugestUsers)