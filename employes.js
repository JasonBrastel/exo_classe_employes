let today = new Date()


class Employes {
    constructor(nom, prenom, dateEmbauche, poste, salaireKBrutAnnuel, service, agence) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateEmbauche = new Date(dateEmbauche);
        this.poste = poste;
        this.salaireKBrutAnnuel = salaireKBrutAnnuel;
        this.service = service;
        this.agence = agence;
        if(this.getAnciennete>1){
            this.chequeVacance = true;
        }
        else{
            this.chequeVacance = false;
        }
    }

    getAnciennete() {


        let diffAnnee = today.getFullYear() - this.dateEmbauche.getFullYear();
        return diffAnnee;
    }
    primeAnnuel() {

        if (today.getMonth() == 10 && today.getDate() == 8) {
            let primeAnnuel = (this.salaireKBrutAnnuel * 5) / 100; // primeAnnuel 750euro

            let primeAnciennete = (this.salaireKBrutAnnuel * 2) / 100; //prime de 300 euro

            if (this.getAnciennete() >= 0) {
                primeAnciennete = primeAnciennete * this.getAnciennete()
            }

            let totalPrime = 0;
            totalPrime = primeAnnuel + primeAnciennete;

            let totalSalaire = 0
            totalSalaire = this.salaireKBrutAnnuel + totalPrime;

            return totalSalaire;

        }

    }
}

class Agences {

    constructor(nom, adresse, code_postal, ville, mode_de_restauration) {
        this.nom = nom;
        this.adresse = adresse;
        this.code_postal = code_postal;
        this.ville = ville;
        this.mode_de_restauration = mode_de_restauration
    }
}