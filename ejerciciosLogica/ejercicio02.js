function createPhoneNumber(arrayNumber){
    if(arrayNumber.length < 10){
    return "Debe ingresar una longitud valida."
    }
    let phoneNumber = arrayNumber.join("");
    return `(${phoneNumber.substring(0,3)}) ${phoneNumber.substring(3,6)} - ${phoneNumber.substring(6,10)}`;
}

let myArray = [6, 0, 4, 5, 5, 0, 8, 2, 7,1];


console.log(createPhoneNumber(myArray))
