function convertToFourDigitNumber(inputString) {
    // Take the first four characters of the string
    var substring = inputString.substring(0, 4);

    // Convert the substring to a number
    var number = parseInt(substring, 36);

    // If the number is less than 1000 (not a 4-digit number), add 1000 to it
    if (number < 1000) {
        number += 1000;
    }

    // If the number is greater than 9999 (not a 4-digit number), take the modulus with 9000 and add 1000
    if (number > 9999) {
        number = number % 9000 + 1000;
    }

    return number;
}

export default convertToFourDigitNumber;