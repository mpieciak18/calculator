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
for (i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener('touchstart', touchColor);
    buttons[i].addEventListener('touchend', untouchColor);
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