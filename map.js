/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1,2,3,4,5];
let result = [];
for (let num of nums) {
    result.push(num * 2);
}

console.log(result);

// Using map()
const multyByTwo = function (num) {
    return num * 2;
}

const mapResult = nums.map(multyByTwo);

console.log("Map - ", mapResult);


// Simplified w/ map()
const mapRes = nums.map(nums => nums * 2);

console.log("mapRest - ", mapRes);

// Simplfied w/ map() + arrow function


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

  const studentsWithId = students.map(students => [students.name, students.id]);

  console.log(studentsWithId);

  const studetnsObject = students.map(students => [{name: students.name}, {id: students.id}]);

  console.log(studetnsObject);