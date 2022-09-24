function openingModal (){
    let queryOpenPost = document.querySelectorAll(`.openPost`)

    for (i = 0; i < queryOpenPost.length; i++){
        queryOpenPost[i].addEventListener(`click`, (event) => {
            let shortcut = event.target.parentNode.parentNode.childNodes

            modal (shortcut)

            let queryButton = document.querySelector(`.closeModal`)

            queryButton.addEventListener(`click`, function (){
                let queryDivBackground = document.querySelector(`.modalBackground`)
                queryDivBackground.remove()
            })
        })
    }
}

function modal (shortcut){
    let divBackground = document.createElement(`div`)
        divBackground.classList = `modalBackground`

    let divModal = document.createElement(`div`)
        divModal.classList = `modal`

    let buttonExit = document.createElement(`button`)
        buttonExit.classList = `closeModal`
        buttonExit.innerHTML = `X`

    let divConteiner = document.createElement(`div`)
        divConteiner.classList = `userInfo`

    let imgConteiner = document.createElement(`figure`)
        imgConteiner.classList = `userImg`

    let imgUser = document.createElement(`img`)
        imgUser.src = `${shortcut[0].childNodes[0].childNodes[0].src}`
        imgUser.alt = `${shortcut[0].childNodes[0].childNodes[0].alt}`

    let divOcupation = document.createElement(`div`)
        divOcupation.classList = `nameOcupation`

    let h2User = document.createElement(`h2`)
        h2User.classList = `nameUser`
        h2User.innerHTML = `${shortcut[0].childNodes[1].childNodes[0].innerHTML}`

    let smallUser = document.createElement(`small`)
        smallUser.classList = `ocupation`
        smallUser.innerHTML = `${shortcut[0].childNodes[1].childNodes[1].innerHTML}`

    let h1 = document.createElement(`h1`)
        h1.innerHTML = `${shortcut[1].innerHTML}`
        
    let p = document.createElement(`p`)
        p.innerHTML = `${shortcut[2].innerHTML}`

    let queryBody = document.querySelector(`body`)

    queryBody.append(divBackground)
    divBackground.append(divModal)
    divModal.append(buttonExit, divConteiner, h1, p)
    divConteiner.append(imgConteiner, divOcupation)
    imgConteiner.append(imgUser)
    divOcupation.append(h2User, smallUser)
}

openingModal ()