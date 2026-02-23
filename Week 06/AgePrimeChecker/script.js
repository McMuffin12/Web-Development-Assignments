function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

function isPrime(number) {
    // 1 and below are not prime
    if (number <= 1) {
        return false;
    }
    // Test divisibility from 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    // prime if no divisors found
    return true;
}

// pull and check age and prime status on button click
function checkAgePrime() {
    // Get the birth year from input
    const birthYearInput = document.getElementById("birthYearInput");
    const birthYear = birthYearInput.value;
    
    // validate input
    if (birthYear === "" || isNaN(birthYear)) {
        alert("Please enter a valid birth year.");
        return;
    }
    
    // Calculate age
    const age = calculateAge(birthYear);
    
    // Check if age is prime
    const agePrime = isPrime(age);
    
    // send correct alert
    let message = "Your age is: " + age + "\n";
    if (agePrime) {
        message += age + " is a Prime number.";
    } else {
        message += age + " is NOT a Prime number.";
    }
    
    alert(message);
}

// attach event listener to button
document.getElementById("checkBtn").addEventListener("click", checkAgePrime);
