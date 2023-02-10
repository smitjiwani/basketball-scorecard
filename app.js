let homeScore = 0
let awayScore = 0


document.getElementById("homeScore").textContent = homeScore
document.getElementById("awayScore").textContent = awayScore

let newhomescore = document.getElementById("homeScore")
let newawayscore = document.getElementById("awayScore")

function addOnehome() {
    homeScore += 1
    newhomescore.textContent = homeScore
    leader()
}
function addtwohome() {
    homeScore += 2
    newhomescore.textContent = homeScore
    leader()
}
function addthreehome() {
    homeScore += 3
    newhomescore.textContent = homeScore
    leader()
}
function subtractOnehome() {
    homeScore -= 1
    newhomescore.textContent = homeScore
    leader()
}
function subtracttwohome() {
    homeScore -= 2
    newhomescore.textContent = homeScore
    leader()
}
function subtractthreehome() {
    homeScore -= 3
    newhomescore.textContent = homeScore
    leader()
}
function addOneaway() {
    awayScore += 1
    newawayscore.textContent = awayScore
    leader()
}
function addtwoaway() {
    awayScore += 2
    newawayscore.textContent = awayScore
    leader()
}
function addthreeaway() {
    awayScore += 3
    newawayscore.textContent = awayScore
    leader()
}

function subtractOneaway() {
    awayScore -= 1
    newawayscore.textContent = awayScore
    leader()
}
function subtracttwoaway() {
    awayScore -= 2
    newawayscore.textContent = awayScore
    leader()
}
function subtractthreeaway() {
    awayScore -= 3
    newawayscore.textContent = awayScore
    leader()
}

function leader() {
    if(homeScore > awayScore){
        newhomescore.style.color = "green"
        newawayscore.style.color = "red"
    }
    else if(awayScore > homeScore){
        newawayscore.style.color = "green"
        newhomescore.style.color = "red"
    }
    else{
        newawayscore.style.color = "white"
        newhomescore.style.color = "white"
    }
}




