import { useState } from 'react'
import '../styles/cadastro.css'
import { PessoaCadastrada } from './PessoaCadastrada';

interface Pessoa {
    nome: string, 
    idade: string,
    profissao: string,
    email: string,
    telefone: string,
    data: string,
}

export function Cadastro() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [profissao, setProfissao] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [pessoas, setPessoas] = useState<Pessoa[]>([])

    const data_sistema = new Date()

    const data_preenchimento = data_sistema.getFullYear() + "-" + data_sistema.getMonth() + "-" + data_sistema.getDate()

    console.log(pessoas)

    function handleCadastroPessoa() {
        if (!nome || !idade || !profissao || !email || !telefone) return
        
        const pessoa = {
            nome: nome, 
            idade: idade,
            profissao: profissao,
            email: email,
            telefone: telefone,
            data: data_preenchimento,
        }

        setPessoas(prevState => [...prevState, pessoa])

        setNome(""), setIdade(""), setProfissao(""), setEmail(""), setTelefone("");
    }

    return (
        <>
            <h2 className="tituloFormulario">Cadastro</h2>

            <section className='formulario'>

                <form action="" method="Get"/>
                    <div className="inputDados">
                        <label>Nome:</label>
                        <input type="text" placeholder="Insira seu nome"
                        onChange={(e) => setNome(e.target.value)}
                        value={nome}
                        />
                    </div>

                    <div className="inputDados">
                        <label>Idade:</label>
                        <input type="number" placeholder="25"
                        onChange={(e) => setIdade(e.target.value)}
                        value={idade}
                        />
                    </div>

                    <div className="inputDados">
                        <label>Profissão:</label>
                        <input type="text" placeholder="Programador"
                        onChange={(e) => setProfissao(e.target.value)}
                        value={profissao}
                        />
                    </div>

                    <div className="inputDados">
                        <label>Email:</label>
                        <input type="email" placeholder="programador@rethink.dev"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />
                    </div>

                    <div className="inputDados">
                        <label>Telefone:</label>
                        <input type="text" placeholder="(31) 99999-9999"
                        onChange={(e) => setTelefone(e.target.value)}
                        value={telefone}
                        />
                    </div>

                    <div className="inputDados">
                        <label>Data de Preenchimento:</label>
                        <input readOnly type="date"
                        value={data_preenchimento}
                        />
                    </div>

                    <button className="botaoEnviar" type="submit"
                    onClick={handleCadastroPessoa}
                    >Cadastrar</button>
            </section>

            <div className='pessoas-cadastradas'>
                {pessoas.map(pessoa => {
                    return (
                        <div className="pessoa">
                            <PessoaCadastrada key={pessoa.email} pessoa={pessoa}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}