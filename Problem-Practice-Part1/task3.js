// Write a function to count the number of vowels in a string.
function countVowels(string)
{
    let ct=0;
    for (const item of string) {
        let x=item.toLowerCase();
        if(x==='a' || x==='e' || x==='i' || x==='o' || x==='u')
        {
           ct++;
        }
    }
    return ct;
}
const string ='Asus VivoBook';
const output = countVowels(string);
console.log(output);