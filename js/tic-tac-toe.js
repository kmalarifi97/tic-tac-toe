let tableSize = 0;
//let gameFininshed = false;
//array will contain the win ways 
winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [2, 5, 8],
    [1, 4, 7],
    [0, 3, 6]];

function chickWin() {
    xWin = ['X', 'X', 'X']
    oWin = ['O', 'O', 'O']
    //looping the comparing function in the array winLines to chick x win
    for (j = 0; j < winLines.length; j++) {
        // comparing the winLines where index equals the counter j 
        if (compare(winLines[j], xWin)) {
            alert("X");
            return;
        }
        if (compare(winLines[j], oWin)) {
            alert("O");
            return;
        }
        
        
    }
            if (tableSize == 9 ) {
                alert("draw");
                tableSize = 0;
    
            }
}

//the comparing function 
const compare = function (arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] !== arr2[i]) {

            return false;


        }

        if (arr1[i] !== arr2[i]) {

            return false;


        }
    }

    return true;

}
turn = true;

function turnClick(s) {
    // boolean turn to switch the turn
    if (turn == true) {
        document.getElementById("turn").innerText="X TURN"
        if (document.getElementById(s).innerText == '') {
            document.getElementById(s).innerText = "X";
        }
        tableSize += 1
        for (let i = 0; i < winLines.length; i++) {
            // i will indecat the and the s will indecat the ck
            let index = winLines[i].indexOf(+s);
            if (index !== -1) {

                winLines[i][index] = "X";
            }
            winLines
        }
        turn = false;
    }
    else {
        //to stop 
        document.getElementById("turn").innerText="O TURN"

        if (document.getElementById(s).innerText == '') {

            document.getElementById(s).innerText = "O";
            tableSize += 1
        }
        turn = true;
        for (let i = 0; i < winLines.length; i++) {
            let index = winLines[i].indexOf(+s);
            if (index !== -1) {

                winLines[i][index] = "O";

            }
        }

    }

    chickWin();


}
