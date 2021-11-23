window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
     
     // Y mettre le code Javascript pour valider tous les champs du formulaire
     var myModal = new bootstrap.Modal(document.getElementById('myModal'));

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted!");


        if (document.getElementById("name").value.length < 5) {
            console.log("nom error");
            document.querySelector(".modal-title").textContent = "Erreur"

            document.querySelector(".modal-body").innerHTML = "Le champs NOM doit contenir au moins 5 caractère !";  
            myModal.show();

        }
    
    
        else if (document.getElementById("Prenom").value.length < 5) {
            console.log("prenom error");
            
            document.querySelector(".modal-title").textContent = "Erreur"

            document.querySelector(".modal-body").innerHTML = "Le champs Prénom doit contenir au moins 5 caractère !";  
            myModal.show();



        }
        else if (document.getElementById("Adresse").value.length < 5) {
            console.log("adresse error");
            
            document.querySelector(".modal-title").textContent = "Erreur"

            document.querySelector(".modal-body").innerHTML = "Le champs Prénom doit contenir au moins 5 caractère !";  
            myModal.show();



        }
        else if (validateDate(document.getElementById("inputDate3").value) == false) {
            console.log("Date error");
            document.querySelector(".modal-title").textContent = "Erreur";
            document.querySelector(".modal-body").textContent = "VOUS VENEZ DU FUTURE !!! Veuillez saisir une date de naissance valide";
            myModal.show();
        }

        else { 
            console.log('OK');
        document.querySelector(".modal-title").textContent = " Bienvenue " + document.getElementById("Prenom").value + document.getElementById("  name").value;
        document.querySelector(".modal-body").innerHTML = " vous êtes nés le :" + document.getElementById("inputDate3").value + " et vous habitez à ";

          myModal.show();
        }
      });
    }
    
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };

      function validateDate() {
        const inputDateDeNaissance = document.getElementById('inputDate3').value;
    
        let dateNaissance = new Date(inputDateDeNaissance);
        let dateNaissanceTimestamp = dateNaissance.getTime();
    
        let nowTimestamp = Date.now();
    
        return (dateNaissanceTimestamp < nowTimestamp)
    };
    