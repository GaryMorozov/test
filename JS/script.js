firstName = 'Игорь'
lastName = 'Морозов'
age = 61
// console.log(firstName + lastName + age)
arrow = () => console.log (`HEllo ${firstName} ${lastName} ${age}`)
console.log(arrow (firstName, lastName,age))

const sum = (a=5,b=3) => a*b
console.log (sum())
console.log (Math.round(sum(3.14,20),2))

