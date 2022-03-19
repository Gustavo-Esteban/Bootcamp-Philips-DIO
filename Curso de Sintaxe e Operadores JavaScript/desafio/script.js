function comparaNumeros(n1, n2){
    if (!n1 || !n2) return 'Defina dois numeros!';

    const primeiraFrase = criaPrimeiraFrase(n1, n2);
    const segundaFrase = criaSegundaaFrase(n1, n2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(n1, n2){
    let saoiguais = '';

    if (n1 !== n2){
        saoiguais = 'não'
    }

    return `Os numeros ${n1} e ${n2} ${saoiguais} são iguais`;
}
function criaSegundaaFrase(n1, n2){
    const soma = n1 + n2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = 'maior';
    } 

    if (compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`;
}

console.log(comparaNumeros());
