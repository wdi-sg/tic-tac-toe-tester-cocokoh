var grid = [0,1,2,3,4,5,6,7,8]
var playerOne = 'playerOne won!'
var playerTwo = 'playerTwo won!'

var isGameOver = function () {
  if(grid[0] && grid[1] && grid[2]) {
    return true
  } else if (grid[0] && grid[3] && grid[6]) {
  return true
} else if (grid[0] && grid[4] && grid[8]) {
  return true
} else if (grid[8] && grid[3] && grid[4]){
  return false
} else if (grid[8] && grid[0] && grid[1]){
  return false
}  else if (grid[2] && grid[0] && grid[4]){
  return false
} else if (grid[0] && grid[3] && grid[6]){
  return false
} else if (grid[0] && grid[2] && grid[3]){
  return false
} else if (grid[0] && grid[1] && grid[3]){
  return false
} else if (grid[1] && grid[2] && grid[5]){
  return false
} else if (grid[0] && grid[1] && grid[3]){
  return false
} else { return 'draw'}
}

var restart = function (){
  // if (isGameOver===true)
}

var whoWon = function (){
if (isGameOver == true) {
  return playerOne
} else if (isGameOver == false) {
  return playerTwo
} else if(isGameOver == 'draw') {
  return 'it\'s a draw!'
} else { return 0}
}

var playTurn = function () {
 
}
