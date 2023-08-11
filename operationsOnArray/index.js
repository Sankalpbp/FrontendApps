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
const deleteComponent = document.querySelector ( '.delete-component' );
const deleteButton = document.querySelector ( '.delete-button' );
const indexNotFoundErrorDeleteElement = document.querySelector ( '.index-not-found-error-delete' );
const replaceComponent = document.querySelector ( '.replace-component' );
const replaceButton = document.querySelector ( '.replace-button' );
const elementNotFoundErrorReplaceElement = document.querySelector ( '.element-not-found-error-replace' );
const indexNotFoundErrorReplaceElement = document.querySelector ( '.index-not-found-error-replace' );

let lastIndex = 0;
let array = [ ];

replaceButton.addEventListener ( 'click', event => {
    const index = document.querySelector ( '.index-to-replace' ).value;
    const element = document.querySelector ( '.element-to-replace' ).value;

    if ( index === '' || index < 0 || index > array.length - 1 ) {
        removeOtherElements ();
        indexNotFoundErrorReplaceElement.style.display = 'block';
        return;
    }

    if ( element === '' ) {
        removeOtherElements ();
        elementNotFoundErrorElement.style.display = 'block';
        return;
    }

    array [ index ] = element;
    removeOtherElements();
    createTable ();
});

deleteButton.addEventListener ( 'click', event => {
    const index = document.querySelector ( '.index-to-delete' ).value;

    if ( index === '' || index < 0 || index > array.length - 1 ) {
        removeOtherElements();
        indexNotFoundErrorDeleteElement.style.display = 'block';
        return;
    }

    array.splice ( index, 1 );

    removeOtherElements();
    createTable ();
});

insertButton.addEventListener ( 'click', event => {
    const element = document.querySelector ( '.element-to-insert' ).value;
    const index = document.querySelector ( '.index' ).value;

    if ( element === '' ) {
        removeOtherElements ();
        elementNotFoundErrorElement.style.display = 'block';
        return;
    }

    if ( index === '' || index < 0 || index > array.length - 1) {
        removeOtherElements ();
        indexNotFoundErrorElement.style.display = 'block';
        return;
    }

    array = [
        ...array.slice ( 0, index ),
        element,
        ...array.slice ( index )
    ];
    removeOtherElements ();
    createTable ();
});

function createRow ( ) {
    const numbersRow = document.createElement ( 'tr' );

    array.forEach ( number => {
        const cell = createCell ( number );
        numbersRow.appendChild ( cell );
    });
    return numbersRow;
}

function createTable ( ) {
    const newNumbersRow = createRow ( );
    const oldNumbersRow = numbersTableElement.querySelector ( 'tr' );
    oldNumbersRow.replaceWith ( newNumbersRow );
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
        case 'delete':
            deleteComponent.style.display = 'block';
            break;
        case 'replace':
            replaceComponent.style.display = 'block';
            break;
        case 'sort':
            array.sort();
            createTable ();
            break;
    }
});

function removeOtherElements () {
    emptyArrayWarningElement.style.display = 'none';
    invalidOperationWarningElement.style.display = 'none';
    elementNotFoundErrorElement.style.display = 'none';
    indexNotFoundErrorElement.style.display = 'none';
    indexNotFoundErrorDeleteElement.style.display = 'none';
    insertComponent.style.display = 'none';
    deleteComponent.style.display = 'none';
    replaceComponent.style.display = 'none';
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
