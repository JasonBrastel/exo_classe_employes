let today = new Date()


class Employes {
    constructor(nom, prenom, dateEmbauche, poste, salaireKBrutAnnuel, service) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateEmbauche = new Date(dateEmbauche);
        this.poste = poste;
        this.salaireKBrutAnnuel = salaireKBrutAnnuel;
        this.service = service;
    }

    getAnciennete() {

        
        let diffAnnee = today.getFullYear() - this.dateEmbauche.getFullYear();

        return diffAnnee;


    }



    primeAnnuel() {

        if (today.getMonth() == 10 && today.getDate() == 7) {
            let primeAnnuel = (this.salaireKBrutAnnuel * 5) / 100; // primeAnnuel 750euro


            let primeAnciennete = (this.salaireKBrutAnnuel * 2) / 100; //prime de 300 euro
            
                if (this.getAnciennete() >= 0) {
                    primeAnciennete = primeAnciennete * this.getAnciennete()
                }
           
            let totalPrime = 0;
            totalPrime = primeAnnuel + primeAnciennete;

            
            return console.log ("L'employé "+this.nom+ " aura " +totalPrime+" de prime cette année ");
        
        }
        
        else { 
            return console.log("La prime sera disponible le 30 novembre de chaque année") }
    }

    nombreEmploye(){
        nombreEmploye = table_employe.length;
        console.log(nombreEmploye);
        return(nombreEmploye);
     }

}//fermeture classe

