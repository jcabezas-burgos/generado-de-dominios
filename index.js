var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];


for(let a=0; a<pronoun.length; a++){
    for(let b=0; b<adj.length; b++){
        for(let c=0; c<noun.length; c++){
            console.log(pronoun[a] + adj[b] + noun[c] + ".com");
        }
    }  
}
