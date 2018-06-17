const game = () => {

for ( var i = 0; i < 5; i++ ) {

const computerPlay = () => {
    const items = ['rock', 'paper', 'scissors']
    return items[ Math.floor((Math.random() * 3)) ]
}

const playRound = (player, computer) => {
    if (player === computer) {
        return "it's a TIE!"
    } else if (player === 'rock' && computer === 'paper') {
        return "you LOSE! paper beats rock"
    } else if (player === 'rock' && computer === 'scissors') {
        return "you WIN! rock beats scissors"
    } else if (player === 'paper' && computer === 'rock') {
        return "you WIN! paper beats rock"
    } else if (player === 'paper' && computer === 'scissors') {
        return "you LOSE! scissors beat paper"
    } else if (player === 'scissors' && computer === 'rock') {
        return "you LOSE! rock beats scissors"
    } else if (player === 'scissors' && computer === 'paper') {
        return "you WIN! scissors beats paper"
    }
} 

console.log('This is game ' + (i + 1))
const player = prompt('rock, paper, scissors').toLowerCase()
console.log('you: ' + player)
const computer = computerPlay()
console.log('computer: ' + computer)
console.log(playRound(player, computer))
console.log('------------------------------------')
}

}
