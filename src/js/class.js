class Patient {
    constructor(nom,maladie,argent,poche,etatsante){
        this.nom=nom,
        this.maladie=maladie,
        this.argent=argent,
        this.poche=poche,
        this.etatsante=etatsante,
        this.traitement=(patient)=>{
            
            if(patient.maladie == "mal indenté" && this.argent>=medicament1.prix){
                this.poche.push(medicament1)
                console.log(`le traitement de ${this.nom} cout ${medicament1.prix}€` );
            }else if(patient.maladie == "unsave" && this.argent>=medicament2.prix){
                this.poche.push(medicament2)
                console.log(`le traitement de ${this.nom} cout ${medicament2.prix}€` );
            }else if(patient.maladie == "404" && this.argent>=medicament3.prix){
                this.poche.push(medicament3)
                console.log(`le traitement de ${this.nom} cout ${medicament3.prix}€` );
            }else if(patient.maladie == "azmatique" && this.argent>=medicament4.prix){
                this.poche.push(medicament4)
                console.log(`le traitement de ${this.nom} cout ${medicament4.prix}€` );
            }else if(patient.maladie == "syntaxError" && this.argent>=medicament5.prix){
                this.poche.push(medicament5)
                console.log(`le traitement de ${this.nom} cout ${medicament5.prix}€` );
            }else{
                console.log(`le traitement de ${this.nom} cout ${medicament1.prix}€` );
                pharmacie.nbrP.splice(0,1)
                cimetiere.nbrP.push(this)
                console.log(`${this.nom} est mort et va au ${cimetiere.nom}`);
            }
            
        },
        this.goTo=(depart,arriver)=>{
            depart.nbrP.splice(0,1)
            arriver.nbrP.push(this)
            console.log(`${this.nom} est arrivé au ${arriver.nom}`);

        },
        this.takecare=()=>{
            this.poche.splice(0,1)
            this.etatsante="guérri"
            console.log(`${this.nom} a pris son médicament et il est ${this.etatsante}`);
        },
        this.payedocteur=(monsieur)=>{
            this.argent-=50
            monsieur.argent+=50
            console.log(`${this.nom} lui reste ${this.argent} €`);
            console.log(`${monsieur.nom} a dans sa caisse ${monsieur.argent} €`);
        }


        this.paye=(monsieur)=>{
            let o =this.poche[0].prix
            this.argent-=o
            pharmacie.caisse+=o
            console.log(`${this.nom} lui reste ${this.argent} €`);
            console.log(`${monsieur.nom} a dans sa caisse ${monsieur.argent}`);
        }
    }

}
let marcus = new Patient("marcus","mal indenté",100,[],"malade");
let optimus = new Patient("optimus","unsave",200,[],"malade");
let sangoku = new Patient("sangoku","404",80,[],"malade")
let darthvader = new Patient("darthvader","azmatique",110,[],"malade")
let semicolon = new Patient("semicolon","syntaxError",60,[],"malade")

let docteur ={
    nom:"docteur",
    argent:0,
    cabinet:[],
    diagnostique(patient){
        if(patient.maladie == "mal indenté"){
            console.log(`votre maladie est mal indenté`);
            console.log(`votre traitement est ${medicament1.nom}`);
        }else if(patient.maladie == "unsave"){
            console.log(`votre maladie est unsave`);
            console.log(`votre traitement est ${medicament2.nom}`);
        }else if(patient.maladie == "404"){
            console.log(`votre maladie 404`);
            console.log(`votre traitement est ${medicament3.nom}`);
        }else if(patient.maladie == "azmatique"){
            console.log(`votre maladie est azmatique`);
            console.log(`votre traitement est ${medicament4.nom}`);
        }else if(patient.maladie == "syntaxError"){
            console.log(`votre maladie est syntaxError`);
            console.log(`votre traitement est ${medicament5.nom}`);
        }
    },
    patientin(patient){
        docteur.cabinet.push(patient);
        let y = salledattente.nbrP.indexOf(patient.nom)
        salledattente.nbrP.splice(y,1)
        console.log(`${patient.nom} est renté dans le cabinet`);
    },

    patientout(patient){
        let u = docteur.cabinet.indexOf(patient)
        salledattente.nbrP.push(patient)
        docteur.cabinet.splice(u,1)
        console.log(`${patient.nom} a quitté le cabinet`);
        
    }

}

class Lieu {
    constructor(nom,nbrP){
        this.nom=nom;
        this.nbrP=nbrP;
    }


}
class Pharmacie extends Lieu{
    constructor(nom,nbrP,stock,argent){
        super(nom,nbrP),
        this.stock=stock,
        this.argent=argent
    }

}

let pharmacie= new Pharmacie("pharmacie",[],[],0);
let cimetiere= new Lieu("cimetiere",[]);
let salledattente= new Lieu("salle d'attente",[]);

class Traitement{
    constructor(nom,prix){
        this.nom=nom;
        this.prix=prix;
    }
}

let medicament1 = new Traitement("ctrl+maj+f",60)
let medicament2 = new Traitement("saveonfocus",100)
let medicament3 = new Traitement("Checklinkrelation",35)
let medicament4 = new Traitement("ventoline",40)
let medicament5 = new Traitement("f12+doc",20)




let chat ={
    nom:"chat",
    miole(){

    }
}

export{Patient,marcus,optimus,sangoku,darthvader,semicolon,docteur,Lieu,Pharmacie,pharmacie,cimetiere,salledattente,Traitement,medicament1,medicament2,medicament3,medicament4,medicament5}