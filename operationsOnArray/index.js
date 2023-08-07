'use strict';

const numbers = document.querySelector ( '.numbers' );
const createTableButton = document.querySelector ( '.create-table' );
const resetButton = document.querySelector ( '.reset-button ' );
let numbersRow = null;
const numbersTableElement = document.querySelector ( '.numbers-table' );

let lastIndex = 0;
let array = [ ];

resetButton.addEventListener ( 'click', event => {
    reset ();
    numbers.value = '';
});

createTableButton.addEventListener ( 'click', event => {
    reset ();
    array = numbers.value.split ( ',' );
    array.forEach( number => ( String ) ( number ).trim () );

    numbersRow = document.createElement ( 'tr' );

    array.forEach ( number => {
        const cell = document.createElement ( 'td' );
        cell.innerText = number;
        cell.classList = 'text-center';
        numbersRow.appendChild ( cell );
    });

    numbersTableElement.appendChild ( numbersRow );
});

function reset () {
    lastIndex = 0;
    array = [ ];
    if ( numbersRow ) {
        numbersRow.remove ();
    }
}
