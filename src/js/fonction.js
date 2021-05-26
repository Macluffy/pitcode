import{Patient,marcus,optimus,sangoku,darthvader,semicolon,docteur,Lieu,Pharmacie,pharmacie,cimetiere,salledattente,Traitement,medicament1,medicament2,medicament3,medicament4,medicament5} from "./class.js"
let pitcode=()=>{
    pharmacie.stock.push(medicament1,medicament2,medicament3,medicament4,medicament5)
salledattente.nbrP.push(marcus,optimus,sangoku,darthvader,semicolon)
console.log(`dans la ${salledattente.nom} il ya ${salledattente.nbrP.length} personne`);
docteur.patientin(marcus)
docteur.diagnostique(marcus)
marcus.payedocteur(docteur)
docteur.patientout(marcus)
marcus.goTo(salledattente,pharmacie)
marcus.traitement(marcus)


console.log(`dans la ${salledattente.nom} il ya ${salledattente.nbrP.length} personne`);
docteur.patientin(optimus)
docteur.diagnostique(optimus)
optimus.payedocteur(docteur)
docteur.patientout(optimus)
optimus.goTo(salledattente,pharmacie)
optimus.traitement(optimus)
optimus.takecare()

console.log(`dans la ${salledattente.nom} il ya ${salledattente.nbrP.length} personne`);
docteur.patientin(sangoku)
docteur.diagnostique(sangoku)
sangoku.payedocteur(docteur)
docteur.patientout(sangoku)
sangoku.goTo(salledattente,pharmacie)
sangoku.traitement(sangoku)

console.log(`dans la ${salledattente.nom} il ya ${salledattente.nbrP.length} personne`);
docteur.patientin(darthvader)
docteur.diagnostique(darthvader)
darthvader.payedocteur(docteur)
docteur.patientout(darthvader)
darthvader.goTo(salledattente,pharmacie)
darthvader.traitement(darthvader)
darthvader.takecare()

console.log(`dans la ${salledattente.nom} il ya ${salledattente.nbrP.length} personne`);
docteur.patientin(semicolon)
docteur.diagnostique(semicolon)
semicolon.payedocteur(docteur)
docteur.patientout(semicolon)
semicolon.goTo(salledattente,pharmacie)
semicolon.traitement(semicolon)


}
export{pitcode}