// Write a function to find the longest word in a given string.

function findLongestWord(string)
{
    string = string.trim();
    let array= string.split(' ');
    let mx=0;
    let maxWord='';
    for (const item of array) {
        
        if(item.length>mx) {
            mx=item.length;
            maxWord=item;
        }
    }
    return maxWord;
}
const input=' I am learning Programming to become a programmer';
const output =findLongestWord(input);
console.log(output);