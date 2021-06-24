function soma(a,b){
    return a+b;
}


let resultado = soma(1,10);

console.log(resultado);




class Aluno {
    constructor(nome){
        this.nome = nome;
    }

    imprimirNome(){
        return this.nome;
    }
}
let aluno1 = new Aluno("andré");


console.log(aluno1.imprimirNome());