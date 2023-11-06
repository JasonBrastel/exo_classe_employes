let today = new Date();



class Employe {
    constructor(nom,prenom,datedEmbauche,poste,salaireKBrutAnnuel,service){
        this.nom = nom;
        this.prenom = prenom;
        this.datedEmbauche=datedEmbauche;
        this.poste=poste;
        this.salaireKBrutAnnuel=salaireKBrutAnnuel;
        this.service=service;
    }

Anciennete(today){
    
    today -= this.datedEmbauche ;
    console.log("L'employé bosse ici depuis",+today+ " ans");
}

Prime(){

   let primeAnnuel=(this.salaireKBrutAnnuel * 5) /100;
   let primeAnciennete =(this.salaireKBrutAnnuel * 2) /100;



   
}



}