var total = 0;

function random(){
    var result = (Math.floor(Math.random()* 6+1));
    
    total = result + total;
    
    
    

    document.getElementById("compteur").value = result;
    document.getElementById("compteur2").innerHTML = total;
    
  

    if (result===6)
        {
            document.getElementById("des").value="Vous avez Gagné";
        }

     if (result===1)
        {
            document.getElementById("des").value="Vous avez Perdu";
        }

        
        
        
        return total;
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

