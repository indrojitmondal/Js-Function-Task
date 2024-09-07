// You are given an array of numbers. Count how many times the a number is repeated in the array.
function countNumber(array,number)
{
    let count=0;

    for (const item of array) {
        if(item===number) count++;
    }
    return count;
}
const numbers=[5,6,11,12,98, 5];
const output = countNumber(numbers,5);
console.log(output);