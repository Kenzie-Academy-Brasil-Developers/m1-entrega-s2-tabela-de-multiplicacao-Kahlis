let multiplications = [];
let line = "row;row <= 10;column;column <= 10;result\n";
for(let row = 0; row <= 10; row++){
    let result = [];
    changeLine(row, undefined, true, undefined, result);
    for(let column = 0; column <= 10; column++){
        changeLine(row, column, true, true, result);
        result.push(row * column);
        changeLine(row, column, true, true, result);
    }
    multiplications.push(result);
}

function changeLine(r, c, rmten, cmten, _result){
    line += r  + ";" + rmten + ";" + c + ";" + cmten + ";[" + _result.join(', ') + "]\n"; 
}
console.table(multiplications);

console.log(line);