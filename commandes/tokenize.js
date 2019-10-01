const tokenize = (phrase) =>{
    const tokens = phrase.split(/\s|\d|\(|\)|\[|\]|'|"|\.|http|www|com|-|:|\/|;|pdf|cloud|clone|&|,|<|>|with|between|for|has|per|condition|jpg|whole|from|beginning|end|also|suggested|that|should|this|less|than|expiration|date/g);
    return tokens.filter(elem => elem.length > 2)
}

/*const tokenizeObject = object =>{
    var res = [];
    var i;
    const values = Object.values(object);
    object.vector = {}
    for(i= 0; i < values.length; i++){
        if(typeof values[i] === "string"){
            tokenize(values[i]).map(token =>{
                if(typeof object.vector[token.toLowerCase()] === "number"){
                        
                    object.vector[token.toLowerCase()]++
                }else{
                        
                    object.vector[token.toLowerCase()]= 1
                }
            })
        }
    }
}*/


const tokenizeObject = object =>{
    object.vector = {}

    tokenize(object.nom).map(token =>{
        if(typeof object.vector[token.toLowerCase()] === "number"){
            object.vector[token.toLowerCase()]++
        }else{
            object.vector[token.toLowerCase()]= 1
        }
    })
}

module.exports = tokenizeObject