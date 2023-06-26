const nombre = ['Juan', 'Maria', 'Pedro', 'Juan','Juan', 'Maria', 'Maria']

function countNameRepetitions(nombres) {
    let result={};
    for (var i = 0; i < nombres.length; i++)
    { 
        let propertyName = nombres[i];
        result = {...result, ...{
            [propertyName]: result[propertyName] ? `${result[propertyName]}*` : '*'
        }
        }
    }

   return result;
}
console.log(countNameRepetitions(nombre))