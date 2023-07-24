/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];
  
  // only people 21+

  let result1 = people.filter(people => people.age >= 21);

  console.log(result1)

  let paul = people.filter(people => people.name === 'Paul');

  let paul1 = people.filter(p => p.name === 'Paul')[0]; //сокращенная запись

  console.log(paul)

  console.log(paul1) // object without massive
  
  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];

  // выбрать студентов у которого есть хотя бы 5 лет опыта в любой сфере навыков

  const candidate = students.filter(student => {  // обратить внимание students.filter(student - без s
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5)
    return strongSkills.length > 0; // второй студент вернет пустой массив
  });

  console.log(candidate);

//упрощения выражения путем раделения функций на части

const has5yer = skill => skill.yrsExperience >= 5;
const hasStrong = student => student.skills.filter(has5yer).length > 0;
const candidates = students.filter(hasStrong);

console.log(candidates);

const candidateName = candidates.map(candidates => candidates.name);

console.log(candidateName);