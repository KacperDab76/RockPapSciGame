function game () {
        let msg = "Make Your Choice:\n 1: Rock\n 2: Paper\n 3: Scissors ";
        let info = "";
        let userPick;
        let myPick
        
        let i = 0;
        let userWin = false;

        while (i<3 && !userWin){
                
                userPick = parseInt(prompt(info+msg));
                        
                // using random number as computer choice
                myPick = Math.floor(Math.random()*3)+1;
                let result = winner(userPick,myPick);
                
                // if user lost increase iterator i
                if (result == 2){
                        i++;
                        info = "You lost."
                }
                // if user wins set userWin to true to exit loop
                else if (result == 1){
                        info = "You Win !!"
                        userWin = true;
                        i++;
                }
                // if draw 
                else if(result == 0){
                        info = "It's a DRAW ";
                        i++;
                }
                //something wrong play again
                else {
                        info ="Wrong input. Play again;"
                }
                info += " \n "+numTostring(userPick)+" vs "+numTostring(myPick)+"\n";
        }

        alert(info+"\n GAME OVER");
        // showing result in #result <div> element on page
        document.getElementById("result").innerHTML = info + "<br />GAME OVER";

}

/**
 * Function returns 0 if it's a DRAW
 * 1 if user wins
 * 2 if user lost
 * -1 if something went wrong
 *  */
function winner(userPick,myPick){
        // 1 - Rock
        // 2 - paper
        // 3 - scissors

        // first if draw
        if (userPick == myPick){
                return 0;
        }
        // user wins if
        else if(   (userPick==2 && myPick==1)           // 2 paper beats 1 rock
                || (userPick==3 && myPick==2)           // 3 scissors beats 2 paper
                || (userPick==1 && myPick==3)           // 1 rock beats 3 scissors
                ){
                return 1;
        } 
        // user loses if
        //      2 paper loses to 3 scissors      3 scissors loses to 1 rock       1 rock loses to 2 paper
        else if ((userPick==2 && myPick==3) || (userPick==3 && myPick==1) || (userPick==1 && myPick==2)){
               return 2;
        }
        else {
                return -1;
        }
}

function choice(n){
        // 1 - Rock
        // 2 - paper
        // 3 - scissors
        let userPick= parseInt(n);
        document.getElementById("result").innerHTML = "Your choice is "+numTostring(userPick);

        // using random number as computer choice
        let myPick = Math.floor(Math.random()*3)+1;

        document.getElementById("result").innerHTML += "<br>My choice is "+ numTostring(myPick);

        let msg = "<br><Strong>Game result:</Strong><br>";
        // First we check for a draw
        if(userPick == myPick ){
                msg = "<br>It's a <strong>DRAW</strong>.";
        }
        // user wins if
        else if((userPick==2 && myPick==1) || (userPick==3 && myPick==2) || (userPick==1 && myPick==3)){
                msg = "<br> You <strong>WIN</strong>";
        } 
        // user loses if
        else if ((userPick==2 && myPick==3) || (userPick==3 && myPick==1) || (userPick==1 && myPick==2)){
                msg = "<br> You <strong>Lost</strong>";
        }
        else {
                msg = "something went wrong"
        }

        msg +=  "<br> it's "+numTostring(userPick)+" vs "+numTostring(myPick);
                
        // showing result in #result <div> element on page
        document.getElementById("result").innerHTML += msg;

}

// function changes number 1,2,3 to Rock,Paper Scissors String
function numTostring(x){
        let name = "Unknown";

        if (x==1) {
                name = "Rock";
        }
        else if (x==2){
                name = "Paper";
        }
        else if (x==3){
                name = "Scissors";
        }
        else {
                name = "Error";
        }

        return name;
}

