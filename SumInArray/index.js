'use strict';

const numbers = document.querySelector ( '.numbers' );
const sumElement = document.querySelector ( '.sum' );
const createTableButton = document.querySelector ( '.create-table' );
const addElementButton = document.querySelector ( '.add-element' );
const resetButton = document.querySelector ( '.reset-button ' );
let numbersRow = null;
const numbersTableElement = document.querySelector ( '.numbers-table' );

let sum = 0;
let lastIndex = 0;
let array = [ ];

addElementButton.addEventListener ( 'click', event => {
    if ( array.length === 0 ) {
        sumElement.textContent = 'Please create the table of elements first!';
        sumElement.style.color = '#ff0000';
        return;
    }
    sum += ( Number ) ( array [ lastIndex ] );
    numbersRow.children [ lastIndex ].classList.add ( ...[ 'bg-secondary', 'text-white', 'fw-bold' ] );
    ++lastIndex;
    if ( lastIndex === array.length ) {
        updateAddButtonElement ();
    }
    sumElement.textContent = sum;
    sumElement.classList.add ( 'text-success' );
});

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
    sum = 0;
    lastIndex = 0;
    array = [ ];
    sumElement.innerText = '';
    if ( numbersRow ) {
        numbersRow.remove ();
    }
    addElementButton.disabled = false;
    addElementButton.innerText = 'Add Element';
    addElementButton.classList.remove ( 'btn-success' );
    addElementButton.classList.add ( 'btn-info' );
}

function updateAddButtonElement () {
    addElementButton.innerText = 'All Elements added!';
    addElementButton.disabled = true;
    addElementButton.classList.remove ( 'btn-info' );
    addElementButton.classList.add ( 'btn-success' );
}