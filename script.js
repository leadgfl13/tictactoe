// set array equal to gameboard object
//this should be a module
let gameBoard = (() =>{
    let gamearea = document.getElementById('gamearea')
    let square = document.createElement('div')
    square.setAttribute('id', 'square')
    gamearea.append(square)
})()