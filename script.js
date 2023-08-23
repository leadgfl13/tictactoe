const playerFactory = (name, token) =>{
    return{name, token}

}

const playerOne = playerFactory("p1", 'O')
const playerTwo = playerFactory('p2', 'X')




const gameBoard = (()=>{

    const getcurrentPlayer = () =>{
        if(currentPlayer == playerOne){
            currentPlayer = playerTwo
        }
      else  if(currentPlayer ==playerTwo){
            currentPlayer = playerOne
        }
    }
    const gameArray= []
    let currentPlayer = playerOne
    const gameArea = document.getElementById('gamearea')
    for(let i = 0; i<9; i++){
        const square = document.createElement('button')
        square.setAttribute('id', 'square')
        square.addEventListener('click', ()=>{
            getcurrentPlayer()
            square.innerHTML = currentPlayer.token
            console.log(currentPlayer)
        })
        gameArray.push(square)
        gameArea.append(gameArray[i])
        }
        
     // const makeMark = (player,token) =>{
        //console.log

      //}
     
    })();








