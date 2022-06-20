var total = 0;

function random(){
    var result = (Math.floor(Math.random()* 6+1));   
    total = result + total;
    
    document.getElementById("compteur").value = result;
    
     if (result===1)
        {
            document.getElementById("compteur2").innerHTML= 0;  
        }     

        return total;
}





function test(){
    document.getElementById("compteur2").innerHTML = total;

    if (total>=100)
        {
        document.getElementById("des").value="Vous avez Gagné";
        }    
}

        
