
/* ---------------------------- Class d'un invité ---------------------------- */

class Invite {
    constructor(data) {
        this.nom = data.firstName;
        this.prenom = data.lastName;
        this.mail = data.emails;
        this.tel = data.phoneNumbers[0].number
    }
}

export default Invite