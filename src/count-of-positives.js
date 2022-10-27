/**
 * returns count of positives and sum of negatives
 * @param {number[]} numArr array of postive and negative nums
 * @returns {number[]} tupple of count and sum
 */
function countSum(numArr){
    if( numArr === null || numArr.length===0){
        return []
    }
   let count = 0;
   let sum = 0;
   for(num of numArr){
    if(num<0){
        sum+=num;
        console.log(sum , num)
    }else if(num>0){
        count++;
    }
}
   return [count, sum];
}


module.exports=countSum