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
let enterNumber = function(event) {
    let newDisplay;
    if (screenDisplay.innerHTML == '0') {
        newDisplay = event.target.innerHTML;
    } else if (screenDisplay.innerHTML.indexOf('.') == -1 && screenDisplay.innerHTML.length < 9) {
        newDisplay = screenDisplay.innerHTML + event.target.innerHTML;
    } else if (screenDisplay.innerHTML.indexOf('.') != -1 && screenDisplay.innerHTML.length < 10) {
        newDisplay = screenDisplay.innerHTML + event.target.innerHTML;
    } else {
        newDisplay = screenDisplay.innerHTML;
    }
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
}
for (i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener('touchstart', touchColor);
    buttons[i].addEventListener('touchend', untouchColor);
    if (Number(buttons[i].id) >= 0 && Number(buttons[i].id) <= 9) {
        buttons[i].addEventListener('click', enterNumber);
    } else if (buttons[i].id == 'decimal') {
        console.log(buttons[i].id);
        buttons[i].addEventListener('click', enterDecimal);
    }
};
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
let operator = function(x,y,operation) {
    return operation(x,y);
}