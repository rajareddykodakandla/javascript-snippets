/* Using the string input */

// var number = "1239745721398424576745758698324523423345595979"

// var count = 0;
// var sum = 0;

// for(var i=0; i<number.length; i++){
//     if((number[i] % 2) != 0){
//         if ((number[i+1] % 2) != 0){
//              count = parseInt(number[i]) + parseInt(number[i+1]);
//              if(count > sum){
//                  sum = count;
//              }
//         }
//     }
// }
// console.log(sum)


/* Using the array input */

// var numbers = [1,34,54,37,9,7,47];

// var total = 0;
// var sum = 0;

// for(var i=0; i<numbers.length; i++){
//     if((numbers[i] % 2) != 0){
//         if ((numbers[i+1] % 2) != 0){
//             total = numbers[i] + numbers[i + 1];
//             if(total > sum){
//                 sum = total;
//             }
//         }
//     }
// }
// console.log(sum);

var number = "45792531"

var count = 0;
var sum = 0;

for (var i = 0; i < number.length; i++) {
    if ((number[i] % 2) != 0) {
        for(var j = i; j<number.length; j++){
            if ((number[j] % 2) != 0){
                count += parseInt(number[j]);
            }
            // if (count > sum) {
            //     sum = count;
            // }
            // if ((number[i] % 2) == 0){
            //     break;
            // }
        }
        // if ((number[i + 1] % 2) != 0) {
        //     count = parseInt(number[i]) + parseInt(number[i + 1]);
        //     if (count > sum) {
        //         sum = count;
        //     }
        // }
    }
}

console.log(count)