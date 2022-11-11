const pessoas = [
    { name: "Fabiana Araújo", age: 33},
    { name: "Gabriel Gomes", age: 25},
    { name: "Fernando Henrique", age: 17},
    { name: "Ana Luiza", age: 2},
    { name: "Geralda do Nascimento", age: 93},
    { name: "Miguel Souza", age: 70},
    { name: "Antonio Miguel", age: 69}
]


function pessoasQuePodemTirarHabilitacao() {
    const podem_tirar_Habilitacao = []

    for (let index = 0; index < pessoas.length; index++) {
        if (pessoas[index].age >= 18) {
            podem_tirar_Habilitacao.push(pessoas[index])
        }
    }

    return podem_tirar_Habilitacao
}


console.log(pessoasQuePodemTirarHabilitacao())