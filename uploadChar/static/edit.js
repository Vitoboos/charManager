const unpromotedBtn = document.getElementById('unpromotedBtn')
const promotedBtn = document.getElementById('promotedBtn')

const unpromotedBox = document.getElementById('unpromotedBox')
const promotedBox = document.getElementById('promotedBox')

const nameInput = document.getElementById("charName")
const classInput = document.getElementById("charClass")
const sexInput = document.getElementById("charSex")

const hpInput = document.getElementById("charHp")
const strInput = document.getElementById("charStr")
const sklInput = document.getElementById("charSkl")
const spdInput = document.getElementById("charSpd")
const lkInput = document.getElementById("charLk")
const defInput = document.getElementById("charDef")
const resInput = document.getElementById("charRes")
const conInput = document.getElementById("charCon")

const hpGrowthInput = document.getElementById("charHpGrowth")
const strGrowthInput = document.getElementById("charStrGrowth")
const sklGrowthInput = document.getElementById("charSklGrowth")
const spdGrowthInput = document.getElementById("charSpdGrowth")
const lkGrowthInput = document.getElementById("charLkGrowth")
const defGrowthInput = document.getElementById("charDefGrowth")
const resGrowthInput = document.getElementById("charResGrowth")

// Set form values to URL object //

charTable = document.getElementById('charTable')

nameInput.value = charTable.children[0].innerText
classInput.value = charTable.children[1].innerText

if (charTable.children[2].innerText === "Male"){

    maleBtn = document.getElementById('charSex_0')
    maleBtn.checked = true

}

else{

    femaleBtn = document.getElementById('charSex_1')
    femaleBtn.checked = true

}


hpInput.value = charTable.children[2].innerText
hpInput.value = charTable.children[3].innerText
strInput.value = charTable.children[4].innerText
sklInput.value = charTable.children[5].innerText
spdInput.value = charTable.children[6].innerText
lkInput.value = charTable.children[7].innerText
defInput.value = charTable.children[8].innerText
resInput.value = charTable.children[9].innerText
conInput.value = charTable.children[10].innerText


hpGrowthInput.value = charTable.children[13].innerText
hpGrowthInput.value = charTable.children[14].innerText
strGrowthInput.value = charTable.children[15].innerText
sklGrowthInput.value = charTable.children[16].innerText
spdGrowthInput.value = charTable.children[17].innerText
lkGrowthInput.value = charTable.children[18].innerText
defGrowthInput.value = charTable.children[19].innerText
resGrowthInput.value = charTable.children[20].innerText


//

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