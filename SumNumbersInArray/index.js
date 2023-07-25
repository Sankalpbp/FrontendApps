'use strict';

const array = document.getElementsByTagName ( 'td' );
let index = 0;
let sum = 0;

function getSum () {
    if (index == array.length - 1) {
        const button = document.getElementsByTagName('button')[0];
        button.innerText = 'All elements added!';
        button.disabled = true;
    }
    array[index].classList.add('added');
    sum += (Number) (array [ index ].innerText);
    ++index;
    document.getElementById ( 'sum' ).innerHTML = sum;
}
