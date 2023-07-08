function fizzBuzz(number){
    const result = [];
    for(var i   = 0; i  <= number; i++ ){ 
        if (i % 3===0 && i % 5===0) {
            result[i] = "FizzBuzz";
        }else if (i % 3 === 0) {
            result[i] = "Fizz";
        }else if (i % 5 === 0) {   
            result[i] = "Buzz";
        }
        else{
            result[i] = `${i}`;
        }
    }
    return result.join("\n");
}
console.log(fizzBuzz(15));