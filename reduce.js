/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
// const numb = [0,1,2,3,4];
// let sum = numb.reduce((acc, curr) => acc + curr, 0); - 0 начальная точка отсчета
// console.log(sum); 

const numb = [0,1,2,3,4];
let sum = numb.reduce((acc, curr) => {
    console.log(
        "Akkumulator:", acc,
        "Current Value:", curr,
        "Total:", acc + curr
    );
    return acc + curr;
});

const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific object property Суммируем конкретное свойство объекта
  // задача 1 суммирование опыта всех участников команды
  let totalExpirience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0) // 0 forever
  
  console.log(totalExpirience); // 16
  
  // Grouping by a property, and totaling it too // Группировка по свойству, а также суммирование
  // хотим сгрупировать по профессии и подсчитать опыт по профессиям

  let profExp = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience
    }
    return acc
  }, {}) // начальный объект

  console.log(profExp)