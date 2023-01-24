function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) --- OU exclusivo
    const comprarTv32 = trabalho1 != trabalho2 // OU exclusivo
    const manterSaudavel = !comprarSorvete //unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
    // return {sorvete: comprarSorvete, tv50: comprarTv50, tv32: comprarTv32, saudavel: manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))