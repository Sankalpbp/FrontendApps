'use strict';

const numbers = document.querySelector ( '.numbers' );
const createTableButton = document.querySelector ( '.create-table' );
const resetButton = document.querySelector ( '.reset-button ' );
const numbersTableElement = document.querySelector ( '.numbers-table' );
const insertComponent = document.querySelector( '.insert-component' );
const goButton = document.querySelector ( '.go-button' );
const emptyArrayWarningElement = document.querySelector ( '.empty-array-warning-element' );
const invalidOperationWarningElement = document.querySelector ( '.invalid-operation-warning-element' );
const insertButton = document.querySelector ( '.insert-button' );
const elementNotFoundErrorElement = document.querySelector ( '.element-not-found-error' );
const indexNotFoundErrorElement = document.querySelector ( '.index-not-found-error' );

let lastIndex = 0;
let array = [ ];

insertButton.addEventListener ( 'click', event => {
    const element = document.querySelector ( '.element' ).value;
    const index = document.querySelector ( '.index' ).value;

    if ( element === '' ) {
        removeOtherElements ();
        elementNotFoundErrorElement.style.display = 'block';
        return;
    }

    if ( index === '' ) {
        removeOtherElements ();
        indexNotFoundErrorElement.style.display = 'block';
        return;
    }

    array = [
        ...array.slice ( 0, index ),
        element,
        ...array.slice ( index )
    ];
    const newNumbersRow = createRow ( );
    const oldNumbersRow = numbersTableElement.querySelector ( 'tr' );
    oldNumbersRow.replaceWith ( newNumbersRow );
});

function createRow ( ) {
    const numbersRow = document.createElement ( 'tr' );

    array.forEach ( number => {
        const cell = createCell ( number );
        numbersRow.appendChild ( cell );
    });
    return numbersRow;
}

resetButton.addEventListener ( 'click', event => {
    reset ();
    numbers.value = '';
});

goButton.addEventListener ( 'click', event => {
    if ( array.length === 0 ) {
        emptyArrayWarningElement.style.display = 'block';
        return;
    }
    const operationType = document.querySelector ( '.operation-type' );
    removeOtherElements ();

    switch ( operationType.value ) {
        case 'selection':
            invalidOperationWarningElement.style.display = 'block';
            break;
        case 'insert':
            insertComponent.style.display = 'block';
            break;
    }
});

function removeOtherElements () {
    emptyArrayWarningElement.style.display = 'none';
    invalidOperationWarningElement.style.display = 'none';
    elementNotFoundErrorElement.style.display = 'none';
    indexNotFoundErrorElement.style.display = 'none';
}

createTableButton.addEventListener ( 'click', event => {
    reset ();
    array = numbers.value.split ( ',' );
    array.forEach( number => ( String ) ( number ).trim () );

    const numbersRow = createRow();
    numbersTableElement.appendChild ( numbersRow );

});

function createCell ( element ) {
    const cell = document.createElement ( 'td' );
    cell.innerText = element;
    cell.classList = 'text-center';
    return cell;
}

function reset () {
    lastIndex = 0;
    array = [ ];
    const numbersRow = numbersTableElement.querySelector ( 'tr' );
    if ( numbersRow ) {
        numbersRow.remove ();
    }
}
