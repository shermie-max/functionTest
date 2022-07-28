function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 400 === 0) {
            return true;
        } else if (year % 100 === 0) {
            return false;
        }
        return true;
    }
    return false;
}

console.log(isLeapYear(1700)); // false
console.log(isLeapYear(1800)); // false
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2024)); // true