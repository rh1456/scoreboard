let score = 0

const main = () => {
  console.log('Hello World')
}
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
//quarter tracker attempt

//team score count functions
const addOneToTeamOneCount = () => {
  console.log('add 1 to team one score')
  //get the score from the input
  score = score + 1
  console.log(score)
  document.querySelector('.team-1-score').textContent = score
}
const subtractOneToTeamOneCount = () => {
  console.log('subtract 1 to team one score')
  score = score - 1
  console.log(score)
  document.querySelector('.team-1-score').textContent = score
}
const addOneToTeamTwoCount = () => {
  console.log('add 1 to team 2 score')
  //define what the score is
  score = score + 1
  console.log(score)
  document.querySelector('.team-2-score').textContent = score
}
const subtractOneFromTeamTwoScore = () => {
  console.log('subtract 2 from team 2 score')
  score = score - 1
  console.log(score)
  document.querySelector('.team-2-score').textContent = score
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

document.addEventListener('DOMContentLoaded', main)
