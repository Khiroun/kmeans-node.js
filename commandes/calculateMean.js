const calculateMean = cluster =>{
    const mean = {}
    cluster.items.map(item =>{
        Object.keys(item.vector).map(key =>{
            if(typeof mean[key] === "number")
                mean[key]++
            else
                mean[key] = 1
        })
    })

    const keys = Object.keys(mean)
    keys.map(key =>{
        mean[key] /= keys.length
    })
    cluster.mean = mean
}

module.exports = calculateMean