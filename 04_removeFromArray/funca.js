function func(a, b, c) {
    console.log(arguments[0]); // updating arguments[0] also updates a

    console.log(arguments[1]);

    console.log(arguments[2]);
}

func(1, 2, 3);

function longestString() {
    let longest = "";
    for (let i = 0; i < arguments.length; i++) {
        arg = arguments[i].toString();
        if (arg.length > longest.length) {
            longest = arguments[i];
        }
    }
    
}

let longestNum = longestString(1, 2, 3, 44444);
console.log(longestNum);
