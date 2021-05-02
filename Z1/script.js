
function generateBord() {
    //входные данные
    var chessBoard = document.getElementById('chessBoard')

    //решение
    for (i = 0; i < 8; i++) {
        newRow = document.createElement('div');
        if (i % 2 == 0) {
            newRow.setAttribute('class', 'firstBlack')
            for (let j = 0; j < 8; j++) {
                space = document.createElement('div')
                if (j % 2 == 0) {
                    space.setAttribute('class', 'black')
                } else {
                    space.setAttribute('class', 'white')
                }
                newRow.appendChild(space)
            }
        } else {
            newRow.setAttribute('class', 'firstWhite')
            for (let j = 0; j < 8; j++) {
                space = document.createElement('div')
                if (j % 2 == 0) {
                    space.setAttribute('class', 'white')
                } else {
                    space.setAttribute('class', 'black')
                }
                newRow.appendChild(space)
            }
        }
        chessBoard.appendChild(newRow)
    }

}

generateBord()
