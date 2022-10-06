let firstScore = document.getElementById('first-score')
let secondScore = document.getElementById('second-score')
let count = 0
function plusone() {
    count += 1
    firstScore.textContent = count
    console.log(count)
}


function plustwo() {
    count += 2
    firstScore.textContent = count
    console.log(count)


}function plusthree() {
    count += 3
    firstScore.textContent = count
    console.log(count)
}
let score = 0
function incrementone() {
    score += 1
    secondScore.textContent = score
    console.log(score)
}


function incrementtwo() {
    score += 2
    secondScore.textContent = score
    console.log(score)
}


function incrementthree() {
    score += 3
    secondScore.textContent = score
    console.log(score)
}

