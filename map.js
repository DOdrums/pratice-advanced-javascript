/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5]
let results = [];
for (let num of nums) {
    results.push(num * 2)
}
console.log(results)

// Using map()
const multbyTwo = (num) => {
    return num * 2;
}
const mapResults = nums.map(multbyTwo);
console.log(mapResults)


// Simplfied w/ map() + arrow function
const mapResultsSimple = nums.map(num => num * 2)
console.log(mapResultsSimple)

// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

  const studentsWithIds = students.map(student => [student.id, student.name])
  console.log(studentsWithIds) 