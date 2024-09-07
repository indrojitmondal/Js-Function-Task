const berianiKhor = ['Abul','Kabul','Cabul','Dabul','Abul','Cabul'];
const numbers=[5,4,6,5,9,4];

function noDoblucate(array)
{
    const unique=[];
    for (const item of array) {
        if(unique.includes(item)===false)
        {
            unique.push(item);
        }
    }
    return unique;
}
const uniqueName= noDoblucate(berianiKhor);
console.log(uniqueName);