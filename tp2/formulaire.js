function validation ()
{
    document.getElementById("resultat").hidden;
document.getElementById("error").hidden;

    if (document.getElementById("nom").value.length < 5 ) { 
        document.getElementById("error").innerHTML = "Le nom doit contenir au moins 5 caractère !";
       
       
    }  

     
     else if(document.getElementById("nom").value.length < 5 ) { 
        document.getElementById("error").innerHTML = "Le prenom doit contenir au moins 5 caractère !";
       
    }    
      
     else if(document.getElementById("adresse").value.length < 5 ) { 
        document.getElementById("error").innerHTML = "L'adresse doit contenir au moins 5 caractère !";
        
    }    
     
     else if(document.getElementById("mail").value.length < 5 ) { 
        document.getElementById("error").innerHTML = "Le mail doit contenir au moins 5 caractère !";
       
    }    
     else {
        
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;

     }

 }