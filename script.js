let multiplications = [];

for(let row = 0; row <= 10; row++){
    let result = [];
    for(let column = 0; column <= 10; column++){
        result.push(row * column);
    }
    multiplications.push(result);
}

console.table(multiplications);