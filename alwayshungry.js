function alwaysHungry(arr){
    var foodcount=0;
    for (i=0; i<arr.length; i++){
        if (arr[i]=="food"){
            console.log ("yummy")
            foodcount++};
    }           
    if (foodcount==0){
        console.log("Im hungry");
    } 
}

alwaysHungry ([3.14, "food", "pie", true, "food"]);

alwaysHungry ([4,1,5,7,2]);