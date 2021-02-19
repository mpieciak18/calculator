// let buttons = document.getElementsByClassName('button');

// let hoverColor = function(event) {
//     let hoveredButton = event.target;
//     hoveredButton.setAttribute('style', 'background-color: black');
// };
// let clickColor = function(event) {
//     let clickedButton = event.target;
//     clickedButton.setAttribute('style', 'background-color: green');
// };
// let unclickColor = function(event) {
//     let hoveredButton = event.target;
//     hoveredButton.setAttribute('style', 'background-color: red');
// };
// let unhoverColor = function(event) {
//     let clickedButton = event.target;
//     clickedButton.setAttribute('style', 'background-color: white');
// };
// for (i = 0; i < buttons.length; i++) {
//     console.log(buttons[i]);
//     buttons[i].addEventListener('mousedown', clickColor);
//     // buttons[i].addEventListener('mouseover', hoverColor);
//     buttons[i].addEventListener('mouseup', unclickColor);
//     // buttons[i].addEventListener('mouseout', unhoverColor);
// };
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