// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(array,size)
{
     let sum=0;
     for (const number of array) {
        sum+=number;
     }
     const avg = sum/size;
     return avg;
}
const output=make_avg([1,2,3,4,5],5);
console.log(output);