
const display = document.getElementById('display');
var calculation = 0
var result = undefined
var num1 = 0
var num2 = 0
var operator = ''
var whichNum = 'num1'

function clearDisplay() {
    calculation = 0
    whichNum = 'num1'
    operator = ''
    num1 = 0
    num2 = 0
    number('0')
}

function setOperator(op) {
    if (operator !== '') {
        equals()
    }

    calculation += '' + op
    operator = op
    whichNum = 'num2'
    updateDisplay()

}

function number(num) {
    if (num1 == result && operator == '') {
        num1 = 0
    }
    
    if (calculation == 0) {
        calculation = ''
    }

    if (whichNum == 'num1') {
        num1 += '' + num
    } else {
        num2 += '' + num
    }

    calculation += '' + num
    updateDisplay()
}

function point() {
    if (['.'].includes(calculation.slice(-1))) {
    } else {
        calculation += '' + '.'
        updateDisplay()
    }
}

function equals() {
    if (operator == '+') {
        calculation = parseInt(num1) + parseInt(num2)
        result = calculation
        clearDisplay()
        calculation = result
        num1 = result
    }



    updateDisplay()
}

function updateDisplay() {
    // fix too many digits
    display.innerHTML = num1 + operator + num2


    //debugging
    document.getElementById('calculation').innerHTML = "calculation: " + calculation
    document.getElementById('num1').innerHTML = "num1: " + num1
    document.getElementById('num2').innerHTML = "num2: " + num2
    document.getElementById('operator').innerHTML = "operator: " + operator
    document.getElementById('whichNum').innerHTML = "whichNum: " + whichNum
    document.getElementById('result').innerHTML = "result: " + result
}

number('0')