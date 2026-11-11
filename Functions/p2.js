function markCalc(...numbers){
    let sum = 0;
    let max = 0;
    let min = 101;
    for(let num of numbers){
        sum+=num;
        max = Math.max(num,max);
        min = Math.min(num,min);
    }
    return `Students Report
    Total Marks = ${sum}
    Avg Marks = ${sum/numbers.length}
    Highest Marks = ${max}
    Lowest Marks = ${min}`
}
console.log(markCalc(55,67,88,100,75));