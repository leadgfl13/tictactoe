const playerFactory = (name, token) =>{
    return{name, token}
}
//players
const playerOne = playerFactory("p1", 'O')
const playerTwo = playerFactory('p2', 'X')



//gamearea
const gameBoard = (()=>{


//changes players on clicks
    const getcurrentPlayer = () =>{
        if(currentPlayer == playerOne){
            currentPlayer = playerTwo
        }
      else  if(currentPlayer ==playerTwo){
            currentPlayer = playerOne
        }
    }


    //need function for checking score
    const getScore = () =>{

        if(
            gameArray[0].innerHTML && gameArray[1].innerHTML && gameArray[2].innerHTML && gameArray[3].innerHTML && gameArray[4].innerHTML && 
            gameArray[5].innerHTML && gameArray[6].innerHTML && gameArray[7].innerHTML && gameArray[8].innerHTML){
                console.log("Tie")
                for(let i =0; i<gameArray.length; i++){
                    gameArray[i].innerHTML = ''
                }     
            }
        if(gameArray[0].innerHTML == 'X' && gameArray[1].innerHTML == 'X' && gameArray[2].innerHTML =='X' || 
            gameArray[0].innerHTML == 'X' && gameArray[3].innerHTML == 'X'  && gameArray[6].innerHTML =='X' ||
            gameArray[0].innerHTML == 'X' && gameArray[4].innerHTML == 'X'  && gameArray[8].innerHTML =='X' ||
            gameArray[1].innerHTML == 'X' && gameArray[4].innerHTML == 'X' && gameArray[7].innerHTML =='X' ||
            gameArray[2].innerHTML == 'X' && gameArray[5].innerHTML == 'X' &&  gameArray[8].innerHTML =='X' ||
            gameArray[3].innerHTML == 'X' && gameArray[4].innerHTML  == 'X' && gameArray[5].innerHTML =='X' ||
            gameArray[6].innerHTML == 'X' && gameArray[7].innerHTML == 'X' && gameArray[8].innerHTML =='X' ||
            gameArray[2].innerHTML == 'X' && gameArray[5].innerHTML == 'X' && gameArray[6].innerHTML =='X' ){
            console.log("p1 wins")
            for(let i =0; i<gameArray.length; i++){
                gameArray[i].innerHTML = ''
            }
            currentPlayer == playerTwo
        }
       if(
        gameArray[0].innerHTML == 'O' && gameArray[1].innerHTML == 'O' && gameArray[2].innerHTML =='O' || 
            gameArray[0].innerHTML == 'O' && gameArray[3].innerHTML == 'O'  && gameArray[6].innerHTML =='O' ||
            gameArray[0].innerHTML == 'O' && gameArray[4].innerHTML == 'O'  && gameArray[8].innerHTML =='O' ||
            gameArray[1].innerHTML == 'O' && gameArray[4].innerHTML == 'O' && gameArray[7].innerHTML =='O' ||
            gameArray[2].innerHTML == 'O' && gameArray[5].innerHTML == 'O' &&  gameArray[8].innerHTML =='O' ||
            gameArray[3].innerHTML == 'O' && gameArray[4].innerHTML  == 'O' && gameArray[5].innerHTML =='O' ||
            gameArray[6].innerHTML == 'O' && gameArray[7].innerHTML == 'O' && gameArray[8].innerHTML =='O' ||
            gameArray[2].innerHTML == 'O' && gameArray[5].innerHTML == 'O' && gameArray[6].innerHTML =='O' )
            {
            console.log("p2 wins")
            for(let i =0; i<gameArray.length; i++){
                gameArray[i].innerHTML = ''
            }      

            
            }    
    }
        
    

    


    //creates gameboard
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
                getScore()
            })
            gameArray.push(square)
            gameArea.append(gameArray[i])
            }
            

    })();


    

    



