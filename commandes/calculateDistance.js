const calculateDistance = (vector1, vector2) =>{
    var i;
    const values2 = Object.values(vector2)
    const values1 = Object.values(vector1)

    const keys = Object.keys(vector1);

    Object.keys(vector2).map(key =>{
        if(! keys.includes(key))
            keys.push(key)
    });
    
    var distance= 0
    var op1, op2

    for(i = 0; i< keys.length; i++){
        op1 = (typeof vector1[keys[i]] === 'number')? vector1[keys[i]]: 0;
        op2 = (typeof vector2[keys[i]] === 'number')? vector2[keys[i]]: 0;
        distance = distance + Math.pow((op1 - op2), 2)
    }
    
    return Math.sqrt(distance)/keys.length
}

module.exports = calculateDistance