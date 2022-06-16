/* notion addevent clicker sur le des et n'avoi le choix quavec 6 chiffre*/
/*



/*comptabiliser les points */


function random(){
    var result = Math.floor(Math.random()* 7);
    if(result==0) {
        result = 7; }

    return result;

}

function ly() {
document.getElementById("des").value= random();


        if (random() > 1){
            document.getElementById("des").innerHTML= result;
        }
        if (random() == 1) {
            document.getElementById("des").innerHTML= "stop";

        }
        if(random() == 6){
            document.getElementById("des").innerHTML= alert ("you win");

        }
    
        
    }


/*
Resultplayer1= resultPlayer1+i
Math.floor(Math.random()* 7)

/* if on tome sur le 1 tour de lautre joueur 

function myFuction() {
    if (result = 1) {
        document.getElementById("round").innerHTML= "au tour de l'autre joueur"

    }
    else {
        document.getElementById("round").innerHTML= "Continuez"
    }
} */

