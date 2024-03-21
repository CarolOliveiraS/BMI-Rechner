Array.from(document.getElementsByTagName('input')).forEach(element => {
    element.addEventListener('change', updateUI);
});

document.getElementById('calculateBtn').addEventListener('click', calculateBMI);

function updateUI() {
    // Logik zur Aktualisierung des UI hier
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const bmi = calculateBMI(weight, height);
    console.log("Gewicht: %s, Größe: %s, BMI: %s", weight, height, bmi);
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {

        return;
    }

    const bmi = Math.round(weight / ((height / 100) ** 2));
    displayResult(bmi);
}

function displayResult(bmi) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>Ihr BMI beträgt: ${bmi}</p>`;
}
