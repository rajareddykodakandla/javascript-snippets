let arr1 = [1, 4, 3, 1, 4, 8, 5]
let arr2 = [5, 1, 4, 3, 2, 1, 5]
let resarr = [];

for (let i = 0; i < arr1.length; i++) {
    if(arr2.includes(arr1[i]) && !resarr.includes(arr1[i])){
        resarr.push(arr1[i])
    }
}

console.log(resarr);
