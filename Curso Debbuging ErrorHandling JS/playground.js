function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parametros");
        if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");
        if (typeof num !== 'number') throw new TypeError("Num precisa ser do tipo number");
        if (arr.length !== num) throw new RangeError("Tamanho invalido!");

        return arr;
    } catch (e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro e um ReferenceError!")
            throw e;
        } else if(e instanceof TypeError) {
            console.log("Este erro e um TypeError!")
            throw e;
        } else if(e instanceof RangeError) {
            console.log("Este erro e um RangeError!")
            throw e;
        } else {
            console.log("Tipo de erro nao esperado : " + e)
        }
    }
}

console.log(validaArray());