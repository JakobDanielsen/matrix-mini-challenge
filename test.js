function runIntervalOnArray(array){
    let arrayCounter = 0;
    if(Array.isArray(array)){
       const interval =  setInterval(()=> {
            if(arrayCounter < array.length){
                console.log(array[arrayCounter++]);
            } else {
                clearInterval(interval);
            }
        }, 1000);
    }
}

const arr = [1,2,3,4,5,6,7,8,9];

runIntervalOnArray(arr);