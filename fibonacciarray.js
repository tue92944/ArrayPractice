function fibonacciArray(n){
    var fibArr=[0,1];
    while (fibArr.length<n){
        var prev= fibArr[fibArr.length-1];
        var prevprev= fibArr[fibArr.length-2];
        fibArr.push(prev + prevprev);
    }
    return fibArr;
}

var result= fibonacciArray(10);
console.log(result);