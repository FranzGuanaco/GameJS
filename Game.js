var result;

function random(){
    result = (Math.floor(Math.random()* 6+1));   
    
    
    document.getElementById("compteur").value = result;
    
     if (result===1)
        {
            total = 0;
            document.getElementById("compteur2").innerHTML= total;  
        }     

        return result;
        
}



var total = 1;
    


 function test(){
    
    total = result + total;
    
    document.getElementById("compteur2").innerHTML = total ;

    if (total>=100)
        {
        document.getElementById("des").value="Vous avez Gagné";
        }    

    return total;

}

        
