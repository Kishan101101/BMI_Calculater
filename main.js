// Get the form element
const form = document.querySelector('form');
const weightGuideDiv = document.getElementById("weight-guide");
// Add an event listener to the form
form.addEventListener('click', (e) => {
  // Prevent the default form submit behavior
  e.preventDefault();

  // Get the input values
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  // Get the results div
  const results = document.querySelector('#Result');

  // Validate the input values
  if (height === '' || height < 0 || isNaN(height)) {
    // Display an error message for invalid height
    results.innerHTML = `Please give a valid height `;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    // Display an error message for invalid weight
    results.innerHTML = `Please give a valid weight `;
  } else {
    // Calculate the BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Display the BMI result
    results.innerHTML = `<span>Your BMI = ${bmi}</span>`;
    if (bmi < 18.5) {
        weightGuideDiv.innerHTML = `You are underweight. Try to eat more healthy foods and increase your physical activity.`;
      } else if (bmi >= 18.5 && bmi < 25) {
        weightGuideDiv.innerHTML = `You have a normal weight. Keep up the good work!`;
      } else if (bmi >= 25) {
        weightGuideDiv.innerHTML = `You are overweight. Try to eat less fatty and sweet foods and increase your physical activity.`;
      }
  }
});