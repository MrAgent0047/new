for(a=1;a<=3;a++){
    console.log('Bonjour Mr SAAG')
}
let doc = Array('Berger allemand','booldog','sphings')
for(b=0; b < doc.length;b++){
    console.log(b,doc[b])
}

for( vue of doc){
    console.log('nom:' + vue)
}
const blur = [
    [6,5,3,17,67],
    [5,9,12,35,23],
    [56,4,7,89,45],
]
for(let con of blur){
    let sum=0;
    for( big of con){
        sum += big;
    }
    console.log('la ligne ' + ' [ ' + con + ' ] ' + ' a pour somme: ' + sum)
}

 function to(){
    const look = {
    banane: 3900,
    serise: 6000,
    plantain: 4000,
}
    somme = 0;
    for(let bin in look){
      somme += look[bin];
    }
    console.log("l'addition de tout cela est: " + somme)
}
// console.log(look.additio())
console.log(to())


// les call-back
function text(){
    const tout = {
        view: {
        banane: 2000,
        haricot: 3000,
        voiture: 9000000,
    },
        heli : {
        maison:14000000,
        transport: 2000000,
        ecole: 23000000,
    }
};
//  for(cal in tout){
    for( view in tout && heli in tout){
        som = 0;
     for(let see in tout[view] && let (con) in tout[heli]){
        som = tout[view[see]] + tout[heli[con]];
     }  
     console.log("le resultat des dépenses faites sont  " + som )
    }
 }
// }