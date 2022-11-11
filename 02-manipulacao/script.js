const pessoas = [
    { name: "Fabiana Araújo", age: 33},
    { name: "Gabriel Gomes", age: 25},
    { name: "Fernando Henrique", age: 17},
    { name: "Ana Luiza", age: 2},
    { name: "Geralda do Nascimento", age: 93},
    { name: "Miguel Souza", age: 70},
    { name: "Antonio Miguel", age: 69}
]

function exibirPessoas(){
    pessoas.forEach(pessoa => {
        console.log("Nome: " + pessoa.name + " || Idade: " + pessoa.age)
    });

}

exibirPessoas()

console.log("\n\n\n")
pessoas.shift()
pessoas.unshift({name: "João Alberto", age: 61})
pessoas.push({name: "Maria Clara", age: 23})
exibirPessoas()