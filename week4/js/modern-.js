function square(x) {
    return x * x;
}

function sum(array, callback) {
    if(callback) {
        array = array.map(callback);
    }
    return array.reduce((a,b) => a + b );
}

function variance(array) {
    return sum(array,square)/array.length - square(mean(array))
}

function mean(array) {
    return sum(array) / array.length;
}

export {
    variance,
    mean
}
//Example of a library with some functions

//This would import the library
import  { mean, variance } from './stats.js';
//This can make more picky choice
import  { mean } from './stats.js';

