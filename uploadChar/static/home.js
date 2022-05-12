const unpromotedBtn = document.getElementById('unpromotedBtn')
const promotedBtn = document.getElementById('promotedBtn')

const unpromotedBox = document.getElementById('unpromotedBox')
const promotedBox = document.getElementById('promotedBox')

const classInput = document.getElementById("charClass")

function switchBtn(e){

    let btn = e.target

    if (btn.classList.contains('active') === true ) {
        return
    }

    btn.classList.toggle('active')

    if (btn.id === 'promotedBtn'){

        let uncheck = document.getElementById('unpromotedBtn')
        uncheck.classList.remove('active')

        unpromotedBox.classList.toggle('active')
        promotedBox.classList.toggle('active')

    }

    else{

        let uncheck = document.getElementById('promotedBtn')
        uncheck.classList.remove('active')

        unpromotedBox.classList.toggle('active')
        promotedBox.classList.toggle('active')

    }

}

function setRole(e){

    let role = e.target.parentElement
    className = role.getElementsByClassName('name')

    classInput.value = className[0].innerText

}

unpromotedBtn.addEventListener('click', switchBtn)
promotedBtn.addEventListener('click', switchBtn)

unpromotedBoxItems = unpromotedBox.getElementsByClassName("item")
promotedBoxItems = promotedBox.getElementsByClassName("item")

for (var i = 0; i < unpromotedBoxItems.length; i++){

    let image = unpromotedBoxItems[i].getElementsByClassName('logo')
    image[0].addEventListener('click', setRole)

}

for (var i = 0; i < promotedBoxItems.length; i++){

    let image = promotedBoxItems[i].getElementsByClassName('logo')
    image[0].addEventListener('click', setRole)

}