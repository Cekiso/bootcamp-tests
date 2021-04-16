function isWeekday(day) {
    return day.startsWith('Monday', 'Tuesday', 'Wedsday', 'Thursday', 'Friday');
}
console.log(isWeekday('Monday'));
console.log(isWeekday('Tuesday'));
console.log(isWeekday('Wedsday'));
console.log(isWeekday('Thursday'));
console.log(isWeekday('Friday'));