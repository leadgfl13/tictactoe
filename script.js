const playerFactory = (name, token) =>{
    return{name, token}
}
//players
let playerOne = playerFactory('play1', 'O')
let playerTwo = playerFactory('play2', 'X')


const interaction = (()=>{
    let sub = document.getElementById('submit')
    sub.addEventListener('click', function(event){
       event.preventDefault()
    })
   sub.addEventListener('click', ()=>{
       let p1name = document.getElementById('p1').value 
       let p2name = document.getElementById('p2').value
       playerOne.name = p1name
       playerTwo.name = p2name
       let formy = document.getElementById('form')
       formy.style.display ='none'})
       let rest = document.getElementById('reset')
       rest.addEventListener('click', ()=>{
        location.reload()
       })

})();
 



//gamearea
const gameBoard = (()=>{
//changes players on clicks
var p1wins = 0
var p2wins = 0
    const getcurrentPlayer = () =>{
        if(currentPlayer == playerOne){
            currentPlayer = playerTwo
        }
      else  if(currentPlayer ==playerTwo){
            currentPlayer = playerOne
        }
    }
    //need function for win conditions on board
    const getScore = () =>{
        if(
            gameArray[0].innerHTML && gameArray[1].innerHTML && gameArray[2].innerHTML && gameArray[3].innerHTML && gameArray[4].innerHTML && 
            gameArray[5].innerHTML && gameArray[6].innerHTML && gameArray[7].innerHTML && gameArray[8].innerHTML){
                console.log("Tie")
                let display = document.getElementById('display')
                display.innerHTML = 'Tie'
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
            let poop = document.getElementById('p1').value
            console.log(p1.name)
            let display =document.getElementById('display')
            display.innerHTML= playerOne.name + ' wins!'
            let scores = document.getElementById('scores')
            p1wins = p1wins+1
            scores.innerHTML = playerOne.name + ":" + p1wins + '   ' + playerTwo.name + ' :' + p2wins
            for(let i =0; i<gameArray.length; i++){
                gameArray[i].innerHTML = ''
            }
        }
       if(
        gameArray[0].innerHTML == 'O' && gameArray[1].innerHTML == 'O' && gameArray[2].innerHTML =='O' || 
            gameArray[0].innerHTML == 'O' && gameArray[3].innerHTML == 'O'  && gameArray[6].innerHTML =='O' ||
            gameArray[0].innerHTML == 'O' && gameArray[4].innerHTML == 'O'  && gameArray[8].innerHTML =='O' ||
            gameArray[1].innerHTML == 'O' && gameArray[4].innerHTML == 'O' && gameArray[7].innerHTML =='O' ||
            gameArray[2].innerHTML == 'O' && gameArray[5].innerHTML == 'O' &&  gameArray[8].innerHTML =='O' ||
            gameArray[3].innerHTML == 'O' && gameArray[4].innerHTML  == 'O' && gameArray[5].innerHTML =='O' ||
            gameArray[6].innerHTML == 'O' && gameArray[7].innerHTML == 'O' && gameArray[8].innerHTML =='O' ||
            gameArray[2].innerHTML == 'O' && gameArray[4].innerHTML == 'O' && gameArray[6].innerHTML =='O' )
            {
            console.log(playerTwo.name + ' wins')
            let display =document.getElementById('display')
            display.innerHTML = playerTwo.name + 'wins'
            p2wins = p2wins+1
            scores.innerHTML = playerOne.name + ":" + p1wins + '   ' + playerTwo.name + ' :' + p2wins
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
                if(square.innerHTML == ''){
                    square.innerHTML = currentPlayer.token
                }
                else{return}
                square.innerHTML = currentPlayer.token
                console.log(currentPlayer)
                getScore()
            })
            gameArray.push(square)
            gameArea.append(gameArray[i])
            }
    })();


    

    



