
 function random(){
    var result = (Math.floor(Math.random()* 6+1));
    
    
    return result;

}

var resultat = random();
var total = 0;

function myFuction() {
    total = resultat + total;
    return total;
}



function win(){


            document.getElementById("compteur").value = random();

           
            
}

function winner(){
    

            document.getElementById("global").innerHTML = myFuction();

            
            
}






 /* Player two */
 
var total2 = 0;

function Secondrandom(){

    var result2 = (Math.floor(Math.random()* 6+1));
    
    total2 = result2 + total2;


    document.getElementById("compteur_Player2").value = result2;
    document.getElementById("compteur2_Player2").innerHTML = total2;
    
  
    if (total2>=100 )
        {
            document.getElementById("des_round2").value="Vous avez Gagné";
        }

     if (result2===1)
        {
            document.getElementById("des_round2").value="Vous avez Perdu";
        }

          
        return total2;
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

