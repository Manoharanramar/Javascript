let arr = ['ECE', 'CSE', 'IT', 'EEE', 'MECH', 'CIVIL'];

let dropdown = document.getElementById("dept");

for (let i = 0; i < arr.length; i++) {
    let option = document.createElement("option");
    option.text = arr[i];
    option.value = arr[i];
    dropdown.appendChild(option);
}

dropdown.addEventListener("change", function() {
    document.getElementById("result").innerHTML =
        "Selected Department: " + dropdown.value;
});