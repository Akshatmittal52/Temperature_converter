document.getElementById("convertBtn").addEventListener("click", function () {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    let result;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (inputTemperature * 9/5) + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (inputTemperature - 32) * 5/9;
    } else {
        result = inputTemperature; // Conversion between same units
    }

    document.getElementById("result").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
});
