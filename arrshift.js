let a = [1,2,3,4,5]

let leftshift = (len, arr) => {
    for(let i=0; i<=len; i++){
        var element = arr.shift();
        arr.push(element);
        //console.log(i);
    }
    console.log(arr);
}

leftshift(3,a);