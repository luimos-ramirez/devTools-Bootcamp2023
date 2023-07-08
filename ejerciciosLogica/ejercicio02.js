function createPhoneNumber(arrayNumber){
    if(arrayNumber.length !== 10){
      return "Debe ingresar una longitud valida."
    }
    if(arrayNumber.filter(number => number > 9 || number < 0 || typeof number !== 'number').length > 0){
        return "Debe ingresar valores enteros entre 0 y 9."
    }

    let phoneNumber = arrayNumber.join("");
    return `(${phoneNumber.substring(0,3)}) ${phoneNumber.substring(3,6)} - ${phoneNumber.substring(6,10)}`;
}

let myArray = [6, 0, 4, 5, 5, 0, 8, 2, 7, 4];


console.log(createPhoneNumber(myArray))
