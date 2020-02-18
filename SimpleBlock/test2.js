
function findPrimeNumber(length){
    if(!Number.isInteger(length)) return;
    const MAX_NUMBER = 99999
    for(var i = 10000; i < MAX_NUMBER; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

  findPrimeNumber(5)
