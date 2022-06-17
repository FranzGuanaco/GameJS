

function random(){
    var result = Math.floor(Math.random()* 6+1);
    

    if (result===1)
        {
            document.write("Vous avez perdu");
        }

    if (result===6)
        {
            document.write("Vous avez gagné");
        }

        else {
            document.getElementById("compteur").innerHTML = "ee";
        }

    return result;
}


function ly() {
document.getElementById("des").value= random();


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

