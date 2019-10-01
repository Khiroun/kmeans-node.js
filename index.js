const tokenize = require('./commandes/tokenize')
const calculDistance = require('./commandes/calculateDistance')
const calculateMean = require('./commandes/calculateMean')
const data = require('./testData')
//const data = require('./testData1')

var i;

for (i = 0; i < data.length; i++) {
    tokenize(data[i])
}

const obj1 = data[0]
const obj2 = data[143]

var cluster1 = {
    items: []
}

var cluster2 = {
    items: []
}

//Initial affectation
for (i = 0; i < data.length; i++) {
    //console.log(calculDistance(data[i].vector, obj1.vector), calculDistance(data[i].vector, obj2.vector))
    if (calculDistance(data[i].vector, obj1.vector) <= calculDistance(data[i].vector, obj2.vector)) {
        data[i].cluster = 1
        cluster1.items.push({
            _id: data[i]._id,
            vector: data[i].vector
        })
    }
    else {
        data[i].cluster = 2
        cluster2.items.push({
            _id: data[i]._id,
            vector: data[i].vector
        })
    }
}

console.log(cluster1.items.length, cluster2.items.length)



var stop = false;
while (!stop) {
    stop = true
    calculateMean(cluster1)
    calculateMean(cluster2)
    const mean1 = cluster1.mean
    const mean2 = cluster2.mean
    cluster1.items = []
    cluster2.items = []
    for (i = 0; i < data.length; i++) {
        if (calculDistance(data[i].vector, mean1) <= calculDistance(data[i].vector, mean2)) {
            cluster1.items.push({
                _id: data[i]._id,
                vector: data[i].vector
            })
        }
        else {
            cluster2.items.push({
                _id: data[i]._id,
                vector: data[i].vector
            })
            cluster1.items = cluster1.items.filter(item => data[i]._id !== item._id)
        }

    }
}
console.log(cluster1.items.length, cluster2.items.length)
//console.log(cluster1.mean)

const keys = Object.keys(cluster1.mean)
const values = Object.values(cluster1.mean)

var max=0
for(i=0; i<keys.length; i++){
    if(values[i] > max){
        max = values[i]
        console.log(keys[i], values[i])
    }
}

//console.log(cluster2.mean)
//console.log(cluster2.items)