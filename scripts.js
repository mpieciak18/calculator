let buttons = document.getElementsByClassName('button');
let touchColor = function(event) {
    let clickedButton = event.target;
    if (clickedButton.id == 'ac') {
        clickedButton.style.backgroundColor = 'rgb(206, 164, 164)';
    } else if (clickedButton.id == 'c') {
        clickedButton.style.backgroundColor = 'rgb(206, 183, 159)';
    } else if (clickedButton.id == 'equals') {
        clickedButton.style.backgroundColor = 'rgb(160, 207, 160)';
    } else {
        clickedButton.style.backgroundColor = 'rgb(201, 201, 201)';
    };
};
let untouchColor = function(event) {
    let hoveredButton = event.target;
    if (hoveredButton.id == 'ac') {
        hoveredButton.style.backgroundColor = 'rgb(255, 200, 200)';
    } else if (hoveredButton.id == 'c') {
        hoveredButton.style.backgroundColor = 'rgb(255, 228, 200)';
    } else if (hoveredButton.id == 'equals') {
        hoveredButton.style.backgroundColor = 'rgb(200, 255, 200)';
    } else {
        hoveredButton.style.backgroundColor = 'rgb(255, 255, 255)';
    };
};
let screenDisplay = document.getElementById('numbers');
let firstNumber = '';
let secondNumber = '';
let enteringFirstNumber = true;
let enterNumber = function(event) {
    let newDisplay;
    if (screenDisplay.innerHTML == '0') {
        newDisplay = event.target.innerHTML;
    } else if (screenDisplay.innerHTML.indexOf('.') == -1 && screenDisplay.innerHTML.length < 9
        || screenDisplay.innerHTML.indexOf('.') != -1 && screenDisplay.innerHTML.length < 10) {
        newDisplay = screenDisplay.innerHTML + event.target.innerHTML;
    } else {
        newDisplay = screenDisplay.innerHTML;
    };
    updateInputs(newDisplay);
    screenDisplay.innerHTML = newDisplay;
};
let enterDecimal = function(event) {
    let newDisplay;
    if (screenDisplay.innerHTML.indexOf('.') == -1 && screenDisplay.innerHTML.length < 9) {
        newDisplay = screenDisplay.innerHTML + '.';
    } else {
        newDisplay = screenDisplay.innerHTML;
    };
    screenDisplay.innerHTML = newDisplay;
};
let updateInputs = function(newDisplay) {
    if (enteringFirstNumber == true) {
        firstNumber = newDisplay;
    } else {
        secondNumber = newDisplay;
    };
};
// Placeholder operator functions
let add = function(x,y) {
    return (x + y)
};
let subtract = function(x,y) {
    return (x - y)
};
let multiply = function(x,y) {
    return (x * y)
};
let divide = function(x,y) {
    return (x / y)
};
let percent = function(x,y) {
    return (x / y)
};
let clear = function(x,y) {
    x = '';
    y = '';
};
let allClear = function(x,y) {
    x = '';
    y = '';
};
let operator = function() {
    return;
};

// Add eventListener + functions to each button
for (i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('touchstart', touchColor);
    button.addEventListener('touchend', untouchColor);
    if (Number(button.id) >= 0 && Number(button.id) <= 9) {
        button.addEventListener('click', enterNumber);
    } else if (button.id == 'decimal') {
        button.addEventListener('click', enterDecimal);
    } else if (button.id == 'equals') {
        button.addEventListener('click', operator);
    } else if (button.id == 'multiply') {
        button.addEventListener('click', multiply);
    } else if (button.id == 'minus') {
        button.addEventListener('click', subtract);
    } else if (button.id == 'plus') {
        button.addEventListener('click', add);
    } else if (button.id == 'divide') {
        button.addEventListener('click', divide);
    } else if (button.id == 'percent') {
        button.addEventListener('click', percent);
    } else if (button.id == 'c') {
        button.addEventListener('click', clear);
    } else if (button.id == 'ac') {
        button.addEventListener('click', allClear);
    };
};