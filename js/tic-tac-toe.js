function vid (){
    video = document.createElement("video");
        video.setAttribute("id", "Myvideo");
        video.setAttribute("controls", "controls");
        video.autoplay=true;
        video.src = "vid.mp4"; 
        
        document.body.appendChild(video);  
        
    }
    function vid2 (){
        video = document.createElement("video");
            video.setAttribute("id", "Myvideo");
            video.setAttribute("controls", "controls");

            video.autoplay=true;
            video.src = "vid1.mp4"; 
            
            document.body.appendChild(video);  
            
        }
    
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
            vid();
            return;
                    

        }
        if (compare(winLines[j], oWin)) {
            vid2();
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
        document.getElementById("turn").innerText="TAIWAN"
        // prevent double click on the cell
        if (document.getElementById(s).innerText == '') {
            document.getElementById(s).innerText="TAIWAN"
        }
        // the counter for the drow condition
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
        document.getElementById("turn").innerText="TYRION"

        if (document.getElementById(s).innerText == '') {

            document.getElementById(s).innerText = "TYRION";
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
