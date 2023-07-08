function drawX(tamano) {
    const result = [];
    for (let i = 0; i < tamano; i++) {
        let fila = "";
        for (let j = 0; j < tamano; j++) {
            if (i === j || i + j === tamano - 1) {
                fila += "*";
            } else {
                fila += " ";
            }
        }
        result[i] = fila;
    }
    return result.join("\n");
}
console.log(drawX(5));