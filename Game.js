var result;

function random(){
    result = (Math.floor(Math.random()* 6+1));   
    document.getElementById("des").value=result;
    total = result + total;
    document.getElementById("RandomNumb").value = total;
    
     if (result===1)
        {
            total = 0;
            document.getElementById("RandomNumb").value= 0;  
            
            document.getElementById("Titre").innerHTML = "Au tour de Player 2" ;
        }     

        return result;    
}


var total = 0;
    

 function test(){
    document.getElementById("Titre").innerHTML = "Au tour de Player 2" ;
    document.getElementById("RandomNumb").value= total;
    
    total = result + total;
    document.getElementById("compteur").innerHTML = total ;
    
    if (total>=100)
        {
        document.getElementById("des").value="Vous avez Gagné";
        }    

    return total;
}


/* -----------------------------Player2----------------------------- */


        
var result2 = 0;

function random2(){
    result2 = (Math.floor(Math.random()* 6+1));   
    
    
    document.getElementById("RandomNumb2").value = result2;
    
     if (result2===1)
        {
            total2 = 0;
            document.getElementById("compteur2").innerHTML= total2;  
            document.getElementById("des2").value="Vous avez Perdu";
            document.getElementById("Titre").innerHTML = "Au tour de Player 1" ;
        }     

        return result2;
        
}



var total2 = 1;


 function test2(){
    document.getElementById("Titre").innerHTML = "Au tour de Player 1" ;
    total2 = result2 + total2;
    document.getElementById("compteur2").innerHTML = total2 ;

    if (total2>=100)
        {
        document.getElementById("des2").value="Vous avez Gagné";
        }    

    return total2;

}