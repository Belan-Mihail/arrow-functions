/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumbers (a, b) {
//     return a + b
// }

// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters


const addTwoNumbers = (a, b) => {
    return a + b
}

let sum = addTwoNumbers(3, 7);
console.log(sum);

// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => a + b;
let sum1 = addTwoNumbers2(6, 7);
console.log(sum1);

// Implicit Returns
const SayHello = message => console.log(message);

SayHello('Hello Word');

const SayHell = () => console.log('Hell');

SayHell()

// Returning Multiple Lines
const returnMultiLine = () => (
    `<p>
    Returning Multiple Lines
    </p>`
)

console.log(returnMultiLine())


/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1,2,3];
let arr2 = arr1
arr2.push(4)
console.log("Second array:", arr2);
console.log("First array:", arr1);
// в arr1 также добавился элемент 4 хотя его добовляли для второго массива
// оба массива ссылаються на объек поэтому изминение любого повлечет изминения другого


// Copying an array
let arr3 = [3,4,5];
let arr4 = [...arr3];
// ... - spread operator
arr4.push(7)
console.log("Fourth array:", arr4);
console.log("Third array:", arr3);
// arr3 не изменился

// Copying an object
//также и с объектами

obj1 = {a: 1, b: 2, c: 3};
obj2 = {...obj1, d: 4}; // при копировании сразу также добавляем новую пару элементов
console.log("object 1:", obj1);
console.log("object 2:", obj2);

// изминение объекта также допустимо
obj3 = {a: 4, b: 5, c: 6};
obj4 = {...obj3, b: 8}; // при копировании сразу также добавляем новую пару элементов
console.log("object 3:", obj3);
console.log("object 4:", obj4);


// Copying only part of an array/object
let arr5 = [...arr1, {...obj4}, arr3, "x", "y", "z"]
//[ 1, 2, 3, 4, { a: 4, b: 8, c: 6 }, [ 3, 4, 5 ], 'x', 'y', 'z' ]
console.log(arr5);


/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */
console.log('rest')
console.log('rest')
console.log('rest')

// Regular function call 
const sum2 = (a,b,c) => a + b + c;
let sum3 = sum2(1,2,3);
console.log(sum3)

// Extra arguments are ignored
let sum4 = sum2(1,2,3,4,5,6);
console.log('Sum4 =',sum4)  //6 остальные проигнорированные


// Function using ...rest
const sumRest = (a,b,c,...rest) => {  //...rest может иметь любое название. главное троеточие
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum
}

let sum5 = sumRest(1,2,3,4,5,6);
console.log('Sum5 =',sum5)  //21

/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

console.log('destructuring');
console.log('destructuring');
console.log('destructuring');

// Destructuring arrays
let ages = [30,26,27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

//деструирование предполагает все сделать проще и элегантней

let [john, mary, joe] = ages;
console.log(john, mary, joe)

// Destructuring objects

let jobs = {
    mike: 'designer',
    piet: 'developper',
    mag: 'accounter'
}

let {mike, piet, mag} = jobs;
console.log(mike, piet, mag);


// Destructuring subsets
let languages = ["english", 'french', 'spanish', 'germany', "japanese"]
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);
//"english", 'french'

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);
// spanish germany  - запятые пропускают значения


let languages2 = {
    first: "english",
    second: 'french',
    third: 'spanish',
    forth: "japanese"
};

let {first, third} = languages2;
console.log(first, third)

// Using rest parameter syntax

let fruit = ['appel', 'kiwi', 'banana', 'orange', 'plunp'];
let [favoriteFruit, , secondary, ...rest] = fruit;
console.log(favoriteFruit)
console.log(secondary) //banana
console.log(rest) // [ 'orange', 'plunp' ]

let people = {
    stev: 'pizza',
    stella: 'salat',
    tom: 'pop-corn',
    lidia: 'ananas',
    jorg: 'vodka'
}

let {stev, stella, ...other} = people;
console.log(stev)
console.log(stella) // salat
console.log(other) // { tom: 'pop-corn', lidia: 'ananas', jorg: 'vodka' }
