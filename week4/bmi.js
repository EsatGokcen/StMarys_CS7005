// Select form and result display
const bmiForm = document.getElementById('bmiForm');
const resultDisplay = document.getElementById('result');

// Add event listener for form submission
bmiForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Capture user input
    let name = document.getElementById('name').value;
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    // Calculate BMI
    let bmi = (weight / (height * height)).toFixed(2);

    // Display result
    resultDisplay.textContent = `${name}, your BMI is ${bmi}.`;

    // Categorize BMI
    if (bmi < 18.5) {
        resultDisplay.textContent += " You are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultDisplay.textContent += " You have a normal weight.";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultDisplay.textContent += " You are overweight.";
    } else {
        resultDisplay.textContent += " You are obese.";
    }
});
