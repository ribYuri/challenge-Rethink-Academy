const pessoas = [
    { name: "Fabiana Araújo", age: 33},
    { name: "Gabriel Gomes", age: 25},
    { name: "Fernando Henrique", age: 17},
    { name: "Ana Luiza", age: 2},
    { name: "Geralda do Nascimento", age: 93},
    { name: "Miguel Souza", age: 70},
    { name: "Antonio Miguel", age: 69}
]


function mediaIdadeDasPessoas(){
    let somatorio = 0
    const qntdPessoas = pessoas.length

    for (let index = 0; index < qntdPessoas; index++) {
        somatorio += pessoas[index].age;   
    }
    const media = somatorio / qntdPessoas

    return Math.round(media)
}


console.log(mediaIdadeDasPessoas())