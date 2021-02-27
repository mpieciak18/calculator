let calc = {
    //
    // Basic attributes
    expression: [],
    currentNum: '',
    resetDisplayOnNextInput: false,
    resetExpressionOnNextInput: false,
    //
    // HTML elements
    display: document.getElementById('numbers'),
    buttons: document.getElementsByClassName('button'),
    //
    // Input methods
    enterNum: function(event) {
        if (calc.resetDisplayOnNextInput == true) {
            calc.display.innerHTML = '0';
            calc.resetDisplayOnNextInput = false;
        };
        let newDisplay;
        if (calc.display.innerHTML == '0') {
            newDisplay = event.target.innerHTML;
        } else if (calc.display.innerHTML.length < 22) {
            newDisplay = calc.display.innerHTML + event.target.innerHTML;
        } else {
            newDisplay = calc.display.innerHTML;
        };
        calc.currentNum = newDisplay;
        calc.display.innerHTML = newDisplay;
    },
    enterDec: function(event) {
        let newDisplay;
        if (calc.resetDisplayOnNextInput == true) {
            calc.display.innerHTML = '0.';
            calc.resetDisplayOnNextInput = false;
        } else if (calc.display.innerHTML.indexOf('.') == -1 && calc.display.innerHTML.length < 14) {
            newDisplay = calc.display.innerHTML + '.';
        } else {
            newDisplay = calc.display.innerHTML;
        };
        calc.display.innerHTML = newDisplay;
    },
    //
    // Operation methods
    enterOperator: function(event) {
        let currentNum = Number(calc.currentNum);
        let operator = event.target;
        calc.currentNum = '';
        if (operator.id == 'multiply') {
            calc.expression.push(currentNum);
            calc.expression.push('*');
        } else if (operator.id == 'minus') {
            calc.expression.push(currentNum);
            calc.expression.push('-');
        } else if (operator.id == 'plus') {
            calc.expression.push(currentNum);
            calc.expression.push('+');
        } else if (operator.id == 'divide') {
            calc.expression.push(currentNum);
            calc.expression.push('/');
        } else if (operator.id == 'percent') {
            calc.display.innerHTML = (currentNum / 100);
            calc.currentNum = (currentNum / 100).toString();
        };
        calc.resetDisplayOnNextInput = true;
    },
    multiply: function(expression) {
        let newExpression;
        for (i = 0; i < expression.length; i++) {
            if (expression[i] == '*') {
                expression[i-1] = expression[i-1] * expression[i+1];
                newExpression = (expression.slice(0, i)).concat(expression.slice(i+2));
                return calc.multiply(newExpression);
            } else {
                continue;
            };
        };
        return expression;
    },
    divide: function(expression) {
        let newExpression;
        for (i = 0; i < expression.length; i++) {
            if (expression[i] == '/') {
                expression[i-1] = expression[i-1] / expression[i+1];
                newExpression = (expression.slice(0, i)).concat(expression.slice(i+2));
                return calc.divide(newExpression);
            } else {
                continue;
            };
        };
        return expression;
    },
    percent: function(expression) {
        let newExpression;
        for (i = 0; i < expression.length; i++) {
            if (expression[i] == '%') {
                expression[i-1] = expression[i-1] / expression[i+1];
                newExpression = (expression.slice(0, i)).concat(expression.slice(i+2));
                return calc.percent(newExpression);
            } else {
                continue;
            };
        };
        return expression;
    },
    add: function(expression) {
        let newExpression;
        for (i = 0; i < expression.length; i++) {
            if (expression[i] == '+') {
                expression[i-1] = expression[i-1] + expression[i+1];
                newExpression = (expression.slice(0, i)).concat(expression.slice(i+2));
                return calc.add(newExpression);
            } else {
                continue;
            };
        };
        return expression;
    },
    subtract: function(expression) {
        let newExpression;
        for (i = 0; i < expression.length; i++) {
            if (expression[i] == '-') {
                expression[i-1] = expression[i-1] - expression[i+1];
                newExpression = (expression.slice(0, i)).concat(expression.slice(i+2));
                return calc.subtract(newExpression);
            } else {
                continue;
            };
        };
        return expression;
    },
    equals: function() {
        if (calc.currentNum == '') {
            calc.display.innerHTML = 'ERROR';
        } else {
            calc.expression.push(Number(calc.currentNum));
            let answer = calc.multiply(calc.expression);
            answer = calc.divide(answer);
            answer = calc.percent(answer);
            answer = calc.add(answer);
            answer = calc.subtract(answer);
            answer = answer[0].toString();
            if (answer == 'Infinity' || answer == 'NaN') {
                calc.display.innerHTML = 'ERROR';
                calc.currentNum = '';               
            } else {
                calc.display.innerHTML = answer;
                calc.currentNum = answer;
            }
        };
        calc.resetDisplayOnNextInput = true;
        calc.expression = [];
    },
    //
    // Clearing methods
    clear: function() {
        calc.currentNum = '';
        calc.display.innerHTML = '0';
    },
    allClear: function() {
        calc.expression = [];
        calc.currentNum = '';
        calc.resetDisplayOnNextInput = false;
        calc.display.innerHTML = '0';
    }
};
//
// Add color-change functions to each button
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
//
// Add calculator functions to each button
for (i = 0; i < calc.buttons.length; i++) {
    let button = calc.buttons[i];
    button.addEventListener('touchstart', touchColor);
    button.addEventListener('touchend', untouchColor);
    if (Number(button.id) >= 0 && Number(button.id) <= 9) {
        button.addEventListener('click', calc.enterNum);
    } else if (button.id == 'decimal') {
        button.addEventListener('click', calc.enterDec);
    } else if (button.id == 'equals') {
        button.addEventListener('click', calc.equals);
    } else if (button.id == 'multiply' || button.id == 'minus' 
            || button.id == 'plus' || button.id == 'divide' || button.id == 'percent') {
        button.addEventListener('click', calc.enterOperator);
    } else if (button.id == 'c') {
        button.addEventListener('click', calc.clear);
    } else if (button.id == 'ac') {
        button.addEventListener('click', calc.allClear);
    };
};