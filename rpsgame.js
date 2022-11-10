
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

