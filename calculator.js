document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here
    function calculate() {
        var num1 = parseFloat(document.getElementById("number1").value);
        var num2 = parseFloat(document.getElementById("number2").value);
        var operation = document.querySelector('input[name="operation"]:checked');

        if (operation === null) {
            document.getElementById("result").innerHTML = "Please select the operation";
            return;
        }

        var result;
        switch (operation.value) {
            case "add":
                result = add(num1, num2);
                break;
            case "subtract":
                result = subtract(num1, num2);
                break;
            case "multiply":
                result = multiply(num1, num2);
                break;
            case "divide":
                result = divide(num1, num2);
                break;
            default:
                result = "Invalid operation";
        }

        document.getElementById("result").innerHTML = "Result: " + result;
    }

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Cannot divide by zero";
        }
    }

    document.getElementById("calculateButton").addEventListener("click", calculate);
});
