

const numbers = [0, 5, 10, ...[1, 2, 3], 4, 5];
console.log(numbers);


const temp = [18, 14, 12, 21, 17, 29, 24];
console.log(Math.max(...temp));





const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const neatWeekTemps = [7, 8, 9]

const allTemps = [...lastWeekTemps, ...currentTemps, ...neatWeekTemps];
// console.log(allTemps);


const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

const c = {
    ...a,
    ...b,
}
console.log(c);
