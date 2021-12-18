
// TODO
// +/- button
// Fix display
//on button press effect


const display = document.getElementById('display');
var result = undefined
var num1 = ''
var num2 = ''
var operator = ''
var whichNum = 'num1'
var debugging = false

function clearDisplay() {
    whichNum = 'num1'
    operator = ''
    num1 = ''
    num2 = ''
    number('0')
}

function setOperator(op) {
    if (operator !== '' && num2 != '') {
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
    // 

    if (num1 == result && operator == '') {
        num1 = 0
    }

    if (whichNum == 'num1') {
        if (String(num1).split().includes('.')) {      // doesn't work
            } else {
            num1 += '' + '.' 
            }
    } else {
        if (String(num2).split().includes('.')) {            
            } else {
                if (num2 == '') {
                    num2 = 0
                }
                num2 += '' + '.' 
            }
    }
    updateDisplay()

}

function equals() {
    if (num2 != ''){
        if (operator == '+') {
            result = parseFloat(num1) + parseFloat(num2)
            clearDisplay()
            num1 = result
        } else if (operator == '−') {
            result = parseFloat(num1) - parseFloat(num2)
            clearDisplay()
            num1 = result
        } else if (operator == '-') {
            result = parseFloat(num1) - parseFloat(num2)
            clearDisplay()
            num1 = result
        } else if (operator == '×') {
            result = parseFloat(num1) * parseFloat(num2)
            clearDisplay()
            num1 = result
        } else if (operator == '*') {
            result = parseFloat(num1) * parseFloat(num2)
            clearDisplay()
            num1 = result
        } else if (operator == '÷') {
            result = parseFloat(num1) / parseFloat(num2)
            clearDisplay()
            num1 = result
        } else if (operator == '/') {
            result = parseFloat(num1) / parseFloat(num2)
            clearDisplay()
            num1 = result
        }
    }

    updateDisplay()
}

function updateDisplay() {
    // Make always show at least two digits if there is least two 
    // fix number overflow
    display.innerHTML = Math.round(parseFloat(num1) * 100) / 100 + operator
    if (whichNum == 'num2' && num2 != '') {
        display.innerHTML += Math.round(parseFloat(num2) * 100) / 100
    }


    //debugging

    if (debugging == true) {
    document.getElementById('num1').innerHTML = "num1: " + num1
    document.getElementById('num2').innerHTML = "num2: " + num2
    document.getElementById('operator').innerHTML = "operator: " + operator
    document.getElementById('whichNum').innerHTML = "whichNum: " + whichNum
    document.getElementById('result').innerHTML = "result: " + result
    } else {
        document.getElementById('num1').innerHTML = ''
        document.getElementById('num2').innerHTML = ''
        document.getElementById('operator').innerHTML = ''
        document.getElementById('whichNum').innerHTML = ''
        document.getElementById('result').innerHTML = ''
    }
}



function debugToggle() {
    if (debugging == true) {
        debugging = false
        } else {
        debugging = true
        } 

    updateDisplay()
}

document.addEventListener('keypress', (event) => {
    var name = event.key;
    console.log(name)

    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(name)) {
        number(name)
    }

    if (['/', '*', '-', '+'].includes(name)) {
        setOperator(name)
    }

    if (name == '.') {
        point()
    }

    if (name == 'Enter') {
        equals()
    }

  }, false);




clearDisplay()