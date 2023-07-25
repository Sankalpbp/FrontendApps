'use strict';

const array = document.getElementsByTagName ( 'td' );
const button = document.getElementById('get-sum-button');
const sumElement = document.getElementById ( 'sum' );
const tableContainer = document.querySelector('.table-container');
const input = document.getElementsByTagName('input')[0];
let index = 0;
let sum = 0;

function putInitState () {
    button.disabled = false;
    button.innerText = 'Sum Up!';
    index = 0;
    sum = 0;
    sumElement.innerText = sum;
    const existingTable = document.getElementsByTagName('table');
    if (existingTable.length) {
        tableContainer.removeChild(existingTable[0]);
    } 
}

function reset () {
    putInitState ();
    input.value = '';
}

function createTable () {
    putInitState();
    const table = document.createElement('table');
    const row = document.createElement('row');
    table.appendChild(row);
    table.setAttribute('border', 1);
    tableContainer.appendChild(table);
    const elements = input.value.split (',');
    for(let element of elements) {
        const td = document.createElement('td');
        td.innerText = element;
        row.appendChild(td);
    }
}

function getSum () {
    if (index == array.length - 1) {
        button.innerText = 'All elements added!';
        button.disabled = true;
    }
    array[index].classList.add('added');
    sum += (Number) (array [ index ].innerText);
    ++index;
    sumElement.innerHTML = sum;
}

putInitState ();