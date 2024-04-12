function minPlanesRequired(fuel) {
    const N = fuel.length;
    let planesRequied = 0;
    let currentFuel = 0;
    let maxReachable = 0;
    
    for (let i = 0; i < N; i++) {
        if (i > maxReachable) {
            return -1;
        }
        if (i > currentFuel) {
            currentFuel = maxReachable;
            planesRequied++;
        }
        maxReachable = Math.max(maxReachable, i + fuel[i]);
    }
    
    if (maxReachable < N - 1) {
        return -1;
    }
    
    return planesRequied;
    
}

const fuel1 = [2, 1, 2, 3, 1];
console.log(minPlanesRequired(fuel1)); 

const fuel2 = [1, 6, 3, 4, 5, 0, 0, 0, 6];
console.log(minPlanesRequired(fuel2));