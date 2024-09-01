function append(value) {
    document.getElementById("t1").value += value;
}

function clear1() {
    const display = document.getElementById("t1");
    const currentText = display.value;

    if (currentText.length > 0) {
        display.value = currentText.slice(0, -1);
    }
}

function allclear1() {
    document.getElementById("t1").value = "";
    document.getElementById("p1").innerHTML = "";
}

function calculate() {
    const display = document.getElementById("t1");
    const expression = display.value;

    try {
        // Using eval to evaluate the expression
        const result = eval(expression);

        // Handling division by zero
        if (result === Infinity || result === -Infinity) {
            alert("Error: Division by zero is not possible :(");
            allclear1();
        } else {
            document.getElementById("p1").innerHTML = expression;
            display.value = result;
        }
    } catch (error) {
        alert("Invalid Expression");
        allclear1();
    }
}
