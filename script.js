const btnCalculate = document.querySelector(".btn");
const input = document.querySelector(".input");

const currentYear = new Date().getFullYear();
const result = document.querySelector(".result");

btnCalculate.addEventListener("click", function () {
    const year = Number(input.value);
    console.log(year);
    if (year >= currentYear || year < 1900) {
        result.textContent = "Please enter a valid year.";
    } else {
        result.textContent = `Your current age is: ${2025 - input.value}`;
    }
});
