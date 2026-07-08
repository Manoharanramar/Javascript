const button = document.querySelector("button");

// Create result div
const resultDiv = document.createElement("div");
resultDiv.id = "result";
resultDiv.style.marginTop = "20px";
resultDiv.style.fontSize = "24px";

document.getElementById("Wrapper").appendChild(resultDiv);

button.addEventListener("click", calculate);

function calculate() {
    const num1 = Number(document.getElementById("input1").value);
    const num2 = Number(document.getElementById("input2").value);

    // Ask the user for the operator
    const operator = document.getElementById("operator").value;

    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                resultDiv.textContent = "Cannot divide by zero";
                return;
            }
            result = num1 / num2;
            break;

        default:
            resultDiv.textContent = "Invalid operator";
            return;
    }

    resultDiv.textContent = `Result: ${result}`;
}