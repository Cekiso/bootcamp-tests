function isWeekday(day) {
    return day.startsWith('M', 'T', 'w', 'T', 'F');
}
console.log(isWeekday('Monday'));
console.log(isWeekday('Tuesday'));
console.log(isWeekday('Wedsday'));
console.log(isWeekday('Thursday'));
console.log(isWeekday('Friday'));