window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
     
     // Y mettre le code Javascript pour valider tous les champs du formulaire
     var myModal = new bootstrap.Modal(document.getElementById('myModal'));

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted!");


        if (document.getElementById("nom").value.length < 5) {
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

            document.querySelector(".modal-body").innerHTML = "Le champs Adresse doit contenir au moins 5 caractère !";  
            myModal.show();



        }
        else if (validateDate(document.getElementById("date").value) == false) {
            console.log("Date error");
            document.querySelector(".modal-title").textContent = "Erreur";
            document.querySelector(".modal-body").textContent = "VOUS VENEZ DU FUTURE !!! Veuillez saisir une date de naissance valide";
            myModal.show();
        }

        else { 
            console.log('OK');
        document.querySelector(".modal-title").textContent = " Bienvenue " + document.getElementById("Prenom").value + " "+document.getElementById("nom").value;
        document.querySelector(".modal-body").innerHTML = " Vous  êtes maintenant sur  la liste de nos contacts";
       contactStore.add(document.getElementById("nom").value, document.getElementById("Prenom").value, document.getElementById("date").value, document.getElementById("Adresse").value, document.getElementById("email").value);
        localStorage.setItem('contactList', JSON.stringify(contactStore.getList()));
  
        AfficheList();
          myModal.show();
        }
      });
    }
    
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };

      function validateDate() {
        const inputDateDeNaissance = document.getElementById('date').value;
    
        let dateNaissance = new Date(inputDateDeNaissance);
        let dateNaissanceTimestamp = dateNaissance.getTime();
    
        let nowTimestamp = Date.now();
    
        return (dateNaissanceTimestamp < nowTimestamp)
    };

    function calcNbChar(id) {
        document.querySelector(`#${id} + span`).textContent = document.querySelector(`#${id}`).value.length + " car.";
      };
      
    function AfficheList() {
      
        var contactList = JSON.parse(localStorage.getItem("contactList"));
        for (var index in contactList) {
      
          document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
      
            '<tr>' +
            '<td>' + contactList[index].nom + '</td>' +
            '<td>' + contactList[index].Prenom + '</td>' +
            '<td>' + contactList[index].date + '</td>' +
            '<td>' + contactList[index].Adresse + '</td>' +
            '<td><a href=mailto:>' + contactList[index].email + '</a></td>' +
            '</tr>'
        };
    
    }