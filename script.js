function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById('result').textContent = "Por favor, ingrese valores válidos.";
        return;
    }

    const bmi = weight / (height * height);
    document.getElementById('result').textContent = `Su IMC es ${bmi.toFixed(2)}`;
}