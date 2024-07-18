'use strict';

let result = [];
const n = prompt('Enter number N.');
if ( n === null){
    alert('You canceled the input.');
} else if ( !n.trim() ){
    alert('Your input is empty.');
} else if ( isNaN(n) ){
    alert('Input must be a number.');
} else if ( !Number.isInteger(Number(n)) ){
    alert('Must be an integer number.') ;
} else {
    const smallestNum = 1;
    const biggerstNum = 100;
    for ( let i = smallestNum; i <= biggerstNum ; i++ ){
        if (i ** 2 < n){
        result.push(i);
        }
    }
    console.log(result);
    }