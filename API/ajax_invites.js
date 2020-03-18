/* --- RÉCUPÉRATION DES INVITÉS ENREGISTRÉS EN BASE DE DONNÉES --- */

function afficheInvites()
{

let fetchOptions = {method: GET};

const url = "http://webmmi.iut-tlse3.fr/~vtl3128a/API/liste_invites.php";

fetch(url, fetchOptions)
.then( (response) => { return response.json() } )
.then( (dataJSON) => {

    console.log(dataJSON);

})
}

/* --- ENVOI DES NOUVEAUX INVITÉS EN BASE DE DONNÉES --- */

function envoiInvites()
{

    const url = "http://webmmi.iut-tlse3.fr/~vtl3128a/API/envoi_invites.php";
    
    let invite = {
        "nom" : "Aïolah",
        "prenom" : "Vaïti",
        "numero de telephone" : "0627387150",
        "mail" : "yoyo31.music@gmail.com"
    }
    
    let fetchOptions = {
        method: 'POST',
        body: JSON.stringify(invite)
    }

    // Avec fetch, on envoie à l'url indiquée l'élément fetchOptions. Grâce à celui-ci, on transmet des données au serveur en post
    fetch(url, fetchOptions)
    // Dans le cas d'une requête en POST, la réponse renvoyée est celle indiquée dans le doc php, ici un "echo"
    .then( (response) => { return response.json() } )
    .then( (dataJSON) => {
        console.log(dataJSON);
    })
}
