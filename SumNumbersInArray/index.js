'use strict';

const array = document.getElementsByTagName ( 'td' );
let index = 0;
let sum = 0;

function createTable () {
    const row = document.getElementsByTagName('tr')[0];
    const input = document.getElementsByTagName('input')[0];
    const elements = input.value.split (',');
    for(let element of elements) {
        const td = document.createElement('td');
        td.innerText = element;
        row.appendChild(td);
    }
}

function getSum () {
    if (index == array.length - 1) {
        const button = document.getElementById('get-sum-button');
        button.innerText = 'All elements added!';
        button.disabled = true;
    }
    array[index].classList.add('added');
    sum += (Number) (array [ index ].innerText);
    ++index;
    document.getElementById ( 'sum' ).innerHTML = sum;
}
