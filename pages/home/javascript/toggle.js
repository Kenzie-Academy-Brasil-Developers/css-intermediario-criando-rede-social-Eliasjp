function toggleFollow () {
    let queryButton = document.querySelectorAll(`.followButton`)
    for (i = 0; i < queryButton.length; i++){
        queryButton[i].addEventListener(`click`, function (event){
            event.target.classList.toggle(`toggledButton`)
            if (event.target.innerHTML == `Seguir`){
                event.target.innerHTML = `Seguindo`
            }else{
                event.target.innerHTML = `Seguir`
            }
        })
    }
}

toggleFollow ()

function toggleLike () {
    let queryButton = document.querySelectorAll(`.like`)
    for (i = 0; i < queryButton.length; i++){
        queryButton[i].addEventListener(`click`, function (event){
            if (event.target.src.includes(`heart.svg`)){
                event.target.src = `assets/img/heartFocus.svg`
            } else {
                event.target.src = `assets/img/heart.svg`
            }
        })
    }
}

toggleLike ()