// set array equal to gameboard object
//this should be a module
let gameBoard = (() =>{

    const gameboardArray = []
    let gamearea = document.getElementById('gamearea')
    for (let i =0; i<9; i++){
        const square = document.createElement('div')
        square.setAttribute('id', 'square')
        square.innerHTML= 'X'
        gameboardArray.push(square)
        console.log(gameboardArray.length)
        for (squares in gameboardArray){
            gamearea.append(square)
        }
    }
 
})()


