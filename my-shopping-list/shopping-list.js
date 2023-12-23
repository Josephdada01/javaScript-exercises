// the three variables that hold reference to the list ul, input, and button
const ulElem = document.querySelector('ul')

const input = document.querySelector('input')

const button = document.querySelector('button')

// a function that run in response when the button is being clicked
button.addEventListener('click', () =>
{
    const inputValue = input.value;
    input.value = ''; // settin the input value to an empty string ''

    // I created three element and store them in a variable
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBut = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = inputValue;
    listItem.appendChild(listBut);
    listBut.textContent = 'Delete';
    ulElem.appendChild(listItem);

    listBut.addEventListener('click', () => {
        ulElem.removeChild(listItem);
    });
    input.focus();    
});