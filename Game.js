var result;


function random(){
    result = (Math.floor(Math.random()* 6+1));  
   
    
   
     if (result===1)
        {		total = 0;
         		result = 0;
        		
           
            
            document.getElementById("RandomNumb").value= total;  
            document.getElementById("des").value= 1;
            document.getElementById("Titre").innerHTML = "Au tour de Player 2" ;
        }   
        
        else {
         total = result + total;
     		ttal = result + ttal;
    
    document.getElementById("RandomNumb").value = total;
    document.getElementById("des").value= result
        
        }

        return result;
       
}



var total = 0;
var ttal = 0;


 function test(){

 total = 0;
    document.getElementById("Titre").innerHTML = "Au tour de Player 2" ;
     document.getElementById("compteur").innerHTML = ttal + total;  /* quelque chose "+" total */
     
 	
    document.getElementById("RandomNumb").value = total;
   
   

    if (total>=100)
        {
        document.getElementById("des").value="Vous avez Gagné";
        }    

    return total;

}


/*  PLAYER TWO */


var result2;


function random2(){
    result2 = (Math.floor(Math.random()* 6+1));  
   
    
   
     if (result2===1)
        {		total2 = 0;
         		result2 = 0;
        		
           
            
            document.getElementById("RandomNumb2").value= total2;  
            document.getElementById("des2").value= 1;
            document.getElementById("Titre").innerHTML = "Au tour de Player 1" ;
        }   
        
        else {
         total2 = result2 + total2;
     		ttal2 = result2 + ttal2;
    
    document.getElementById("RandomNumb2").value = total2;
    document.getElementById("des2").value= result2
        
        }

        return result2;
       
}



var total2 = 0;
var ttal2 = 0;


 function test2(){

 total2 = 0;
    document.getElementById("Titre").innerHTML = "Au tour de Player 1" ;
     document.getElementById("compteur2").innerHTML = ttal2 + total2;  
 	
    document.getElementById("RandomNumb2").value = total2;
   
   

    if (total2>=100)
        {
        document.getElementById("des2").value="Vous avez Gagné";
        }    

    return total2;

}