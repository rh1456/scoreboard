const main = () => {
  console.log('Hello World')
}

let scoreOne = 0
let scoreTwo = 0
let scoreRes = 0

//main

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds
  setInterval(function() {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)

    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    display.textContent = minutes + ':' + seconds

    if (--timer < 0) {
      timer = duration
    }
  }, 1000)
}
window.onload = function() {
  var fiveMinutes = 60 * 5
  display = document.querySelector('#time')
  startTimer(fiveMinutes, display)
}
//winner message

//team score count functions
const addOneToTeamOneCount = () => {
  // console.log('add 1 to team one score')
  // //get the score from the input
  // scoreTwo = scoreTwo + 1
  // console.log(score)
  if (scoreOne < 21) {
    scoreOne = scoreOne + 1
    document.querySelector('.team-1-score').textContent = scoreOne
  } else if (scoreOne === 21) {
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    document.querySelector('.team-1-name').textContent = ''
    document.querySelector('.team-1-name').textContent = 'Team 1 Wins!'
    document.querySelector('.team-2-name').textContent = 'Loser'
  }
}
const subtractOneToTeamOneCount = () => {
  // console.log('subtract 1 to team one score')
  // score = score - 1
  // console.log(score)
  if (scoreOne >= 1) {
    scoreOne = scoreOne - 1
    document.querySelector('.team-1-score').textContent = scoreOne
  }
}

const addOneToTeamTwoCount = () => {
  // console.log('add 1 to team 2 score')
  // //define what the score is
  // scoreTwo = scoreTwo + 1
  // console.log(score)
  if (scoreTwo < 21) {
    scoreTwo = scoreTwo + 1
    document.querySelector('.team-2-score').textContent = scoreTwo
  } else if (scoreTwo === 21) {
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    document.querySelector('.team-2-name').textContent = 'Team 2 Wins'
    document.querySelector('.team-1-name').textContent = 'Loser'
  }
}

const subtractOneFromTeamTwoScore = () => {
  if (scoreTwo >= 1) {
    scoreTwo = scoreTwo - 1
    document.querySelector('.team-2-score').textContent = scoreTwo
  }
}
//resetfunction button

function refreshPage() {
  window.location.reload()
}

//define constants to change names

const updateTeamOneName = () => {
  console.log('change team one name')
  //get the value of team name
  const newName = document.querySelector('.team-1-input').value
  //change the name
  document.querySelector('.team-1-name').textContent = newName
}
const updateTeamTwoName = () => {
  console.log('change team two name')
  const newName = document.querySelector('.team-2-input').value
  document.querySelector('.team-2-name').textContent = newName
}
//add or subtract the score function
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addOneToTeamOneCount)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtractOneToTeamOneCount)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addOneToTeamTwoCount)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtractOneFromTeamTwoScore)

//change the names
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeamOneName)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeamTwoName)

document.querySelector('.resetButton').addEventListener('click', resetButton)

document.addEventListener('DOMContentLoaded', main)
