const pessoas = [
    { name: "Fabiana Araújo", age: 33},
    { name: "Gabriel Gomes", age: 25},
    { name: "Fernando Henrique", age: 17},
    { name: "Ana Luiza", age: 2},
    { name: "Geralda do Nascimento", age: 93},
    { name: "Miguel Souza", age: 70},
    { name: "Antonio Miguel", age: 69}
]


function retornaNomeDasPessoas(bonus) {
    const nomePessoas = []
    pessoas.forEach(pessoa => {
        if (bonus){
            const idx = pessoa.name.indexOf(" ")
            nomePessoas.push(pessoa.name.slice(0, idx))
        } else {
            nomePessoas.push(pessoa.name)
        }
    });

    return nomePessoas
}

console.log(retornaNomeDasPessoas(true))