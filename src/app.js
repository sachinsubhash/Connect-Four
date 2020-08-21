document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1

    for (var i = 0, len = squares.length;i<len ; i++)

    (function(index){
        //add an onclick to each square in your grid
        squares[i].onclick = function() {
            //if your square below your current square is taken, you can go ontop of it
            if (squares[index + 7].classList.contains('taken')){
                if (currentPlayer === 1) {
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-one')  
                    //Change Player
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                }else if (currentPlayer === 2) {
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-two')
                    //Change Player
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
                //if the square below your current square not taken, you can't go here
            } else alert('Can Go Here')
        }
    })(i)

    //check the board for win or lose
    function checkBoard() {
        const winningArrays = [
            [0,1,2,3],[41,40,39,38],[7,8,9,10],[34,33,32,31],[14,15,16,17],[27,26,25,24],[21,22,
            23,24],[28,29,30,31],[20,19,18,17],[13,12,11,10],[35,36,37,38],[6,5,4,3],[0,7,4,21],
            [41,34,27,20],[1,8,15,22],[40,33,26,19],[2,9,16,23],[39,32,25,18],[0,1,2,3],[38,31,
            24,17],[4,11,18,25],[37,30,23,16],[5,12,19,26],[36,29,22,15],[0,1,2,3],[0,1,21,14],
            [0,8,16,24],[41,33,25,17],[7,15,23,31],[34,26,18,10],[14,22,30,3],[0,1,2,3],[35,29,
            23,17],[6,12,18,24],[28,22,16,10],[13,19,25,31],[21,15,9,3],[0,1,2,3],[0,1,2,18],
            [5,11,17,23],[37,31,25,19],[4,10,16,22],[2,10,18,26],[39,31,23,15],[0,1,2,3],[0,32,
            24,16],[9,7,25,33],[8,16,24,32],[11,7,23,29],[12,18,24,30],[0,1,2,3],[0,1,2,9],
            [0,1,10,11],[12,11,10,9],[15,16,17,18],[19,18,17,16],[22,23,24,25],[0,1,2,3],[29,30,
            31,32],[33,32,31,30],[36,37,38,39],[40,39,38,37],[7,14,21,28],[0,1,2,3],[0,1,2,3],
            [10,17,24,31],[11,18,25,32],[12,19,26,33],[13,20,27,34]
        ]
        //now take 4 values in each winningArrays and plug them into the squares
    }
    for (let y = 0;y < winningArrays.length;y++) {
        const square1 = squares[winningArray[y][0]]
        const square2 = squares[winningArray[y][1]]
        const square3 = squares[winningArray[y][2]]
        const square4 = squares[winningArray[y][3]]

        //now check those arrays to if they all have class of player-one
        if (square1.classList.contains('player-one') &&
        square2.classList.contains('player-one') &&
        square3.classList.contains('player-one') &&
        square4.classList.contains('player-one')) {
            //if they do, player-one is passed as winner
            result.innerHTML = 'Player One Wins!!!'
        }
        //now check to see if they all have class of player-two
        else if (square1.classList.contains('player-two') &&
        square2.classList.contains('player-two') &&
        square3.classList.contains('player-two') &&
        square4.classList.contains('player-two')) {
            //if they do, player-two is passed as winner
            result.innerHTML = 'Player Two Wins!!!'
        }
    }


//add an eventListener to each square that will trigger the Checkboard Function on Click
squares.forEach(square => square.addEventListener('click',checkBoard))
})