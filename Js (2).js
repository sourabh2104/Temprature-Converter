

function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const unit = document.getElementById("unitSelect").value;
    let result;

    if (unit === "celsius") {
        result = (inputTemp - 32) * (5/9);
        document.getElementById("result").innerHTML = `${inputTemp}°F is ${result.toFixed(2)}°C`;
    } else if (unit === "fahrenheit") {
        result = (inputTemp * 9/5) + 32;
        document.getElementById("result").innerHTML = `${inputTemp}°C is ${result.toFixed(2)}°F`;
    }
}