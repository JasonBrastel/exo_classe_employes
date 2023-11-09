let today = new Date()

new DataTable('#example');
class Employes {
    constructor(nom, prenom, dateEmbauche, poste, salaireKBrutAnnuel, service, agence,enfant) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateEmbauche = new Date(dateEmbauche);
        this.poste = poste;
        this.salaireKBrutAnnuel = salaireKBrutAnnuel;
        this.service = service;
        this.agence = agence;
        this.enfant = enfant
        
        if(this.getAnciennete()<1){
            this.chequeVacance = false;
        }
        else{
            this.chequeVacance = true;
        }
    }

    getAnciennete() {


        let diffAnnee = today.getFullYear() - this.dateEmbauche.getFullYear();
        return diffAnnee;
        
    }
    primeAnnuel() {

        if (today.getMonth() == 10 && today.getDate() == 30) { // A CHANGER TOUS LES JOURS
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

