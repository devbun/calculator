
const display = document.getElementById('display');
var result = undefined
var num1 = ''
var num2 = ''
var operator = ''
var whichNum = 'num1'

function clearDisplay() {
    whichNum = 'num1'
    operator = ''
    num1 = ''
    num2 = ''
    number('0')
}

function setOperator(op) {
    if (operator !== '') {
        equals()
    }

    operator = op
    whichNum = 'num2'
    updateDisplay()

}

function number(num) {
    if (num1 == result && operator == '') {
        num1 = 0
    }

    if (whichNum == 'num1') {
        num1 += '' + num
    } else {
        num2 += '' + num
    }
    updateDisplay()
}

function point() {
    alert('This doesn\'t work yet')
    //check for existing point

}

function equals() {
    if (operator == '+') {
        result = parseInt(num1) + parseInt(num2)
        clearDisplay()
        num1 = result
    } else if (operator == '-') {
        result = parseInt(num1) - parseInt(num2)
        clearDisplay()
        num1 = result
    } else if (operator == '*') {
        result = parseInt(num1) * parseInt(num2)
        clearDisplay()
        num1 = result
    } else if (operator == '/') {
        result = parseInt(num1) / parseInt(num2)
        clearDisplay()
        num1 = result
    }



    updateDisplay()
}

function updateDisplay() {
    // fix too many digits
    display.innerHTML = parseInt(num1) + operator
    if (whichNum == 'num2' && num2 != '') {
        display.innerHTML += parseInt(num2)
    }


    //debugging
    document.getElementById('num1').innerHTML = "num1: " + num1
    document.getElementById('num2').innerHTML = "num2: " + num2
    document.getElementById('operator').innerHTML = "operator: " + operator
    document.getElementById('whichNum').innerHTML = "whichNum: " + whichNum
    document.getElementById('result').innerHTML = "result: " + result
}

number('0')