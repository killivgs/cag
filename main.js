onload = () =>{
        document.body.classList.remove("container");
}
let dontClickBTN = document.getElementById('dontClick');
let x = 1

let clicks = 0
dontClickBTN.onmouseover = function () {
    if (x === 1) {
        x += 1
        dontClickBTN.style.left = "500px"
        dontClickBTN.style.backgroundColor = "#00b2ff"
        dontClickBTN.style.transition = '0.4s'

    } else if (x === 2) {
        x += 1
        dontClickBTN.style.left = "-500px"
        dontClickBTN.style.backgroundColor = "#e5ff00"
        dontClickBTN.style.transition = '0.4s'

    } else if (x === 3) {
        x += 1
        dontClickBTN.style.left = "300px"
        dontClickBTN.style.backgroundColor = "#3be824"
        dontClickBTN.style.transition = '0.4s'


    } else if (x === 4) {
        x -= 3
        dontClickBTN.style.left = "0px"
        dontClickBTN.style.backgroundColor = null
        dontClickBTN.style.transition = '0.4s'
    }
}

dontClickBTN.onclick = function() {
    alert('How? You are a cheater!')
}
      

