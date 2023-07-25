'use strict';

const usedNumbers = [ 0 ];
const MIN = 1;
const MAX = 10;
const NUMBERS_TAKEN = 'All numbers are taken';

function generateNumber ( min, max ) {
    return Math.floor( Math.random () * ( max - min + 1 ) ) + min;
}

function generate() {
    let number = 0;
    if ( usedNumbers.length === MAX ) {
        document.getElementById ( 'error' ).innerHTML = NUMBERS_TAKEN;
        document.getElementById ( 'number' ).innerHTML = '';
        return;
    }
    while ( usedNumbers.includes ( number ) ) {
        number = generateNumber ( MIN, MAX );
    }
    document.getElementById('number').innerHTML = number;
    usedNumbers.push ( number );
}