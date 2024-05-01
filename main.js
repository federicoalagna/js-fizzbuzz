'use strict'

// ciclo da 1 a 100
for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

    console.log("FizzBuzz");
        // multiplo di 3 e 5 
    } else if (i % 3 === 0) {
        console.log("Fizz"); 
        // multiplo di 3 
    } else if (i % 5 === 0) {
        console.log("Buzz");
        // multiplo di 5 
    } else {
        console.log(i);
        // non multiplo di 3 o 5
    }

}