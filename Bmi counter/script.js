const height = document.querySelector("#Height");
const weight = document.querySelector("#Weight");
const result = document.querySelector("#results");
const button = document.querySelector("button");
const form = document.querySelector("form");


// .value gives the output in string
// parseInt converts that string into integer
// parseInt(document.querySelector("#Height").value)


form.addEventListener("submit", function (event) {
    event.preventDefault(); // stops form from reloading the page

    const heightInMeters = parseInt(height.value) / 100;
    const weightInKg = parseInt(weight.value);

    const bmi = weightInKg / (heightInMeters ** 2);

    result.textContent = "BMI: " + bmi.toFixed(2);
});