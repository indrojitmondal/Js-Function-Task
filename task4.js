// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
function count_zero(binaryString){
    const size = binaryString.length;
    let cnt_Zero=0;
    
    

    for(const ch of binaryString)
    {
        if(ch==='0') cnt_Zero++;
    }
    return cnt_Zero;

}
const output = count_zero('101010');
console.log(output);
