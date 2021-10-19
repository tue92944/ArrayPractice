function reverse(arr){
    var temp= arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    var temp=arr[1];
    arr[1]=arr[3];
    arr[3]=temp;
    return arr;
}

var result= reverse(["a","b","c","d","e"]);
console.log(result);