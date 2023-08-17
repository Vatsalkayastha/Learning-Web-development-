console.log("This is mod.js");

function avg(arr) {
    let sum = 0; 
    let cnt = 0;
    arr.forEach(element => {
        sum += element 
        cnt++;
    });
    return sum/cnt;
    
}

module.exports = {
    avg: avg,
    name: 'Vatsal',
    sur: 'Kayastha'
};