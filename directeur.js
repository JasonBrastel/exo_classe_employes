
class Directeur extends Employes{

    primeAnnuelDirecteur() {

        if (today.getMonth() == 10 && today.getDate() == 9) { // A CHANGER TOUS LES JOURS
            let primeAnnuel = (this.salaireKBrutAnnuel * 7) / 100; // primeAnnuel 750euro

            let primeAnciennete = (this.salaireKBrutAnnuel * 3) / 100; //prime de 300 euro

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