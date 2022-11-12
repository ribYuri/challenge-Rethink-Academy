import '../styles/pessoaCadastrada.css'

interface PessoaCadastradaProps {
    pessoa: {
        nome: string, 
        idade: string,
        profissao: string,
        email: string,
        telefone: string,
        data: string,
    }
}

export function PessoaCadastrada(props: PessoaCadastradaProps) {
    return (
        <div className="cardPessoa">
            <p className='dado-pessoa'><strong>Nome</strong>: {props.pessoa.nome}</p>
            <p className='dado-pessoa'><strong>Idade</strong>: {props.pessoa.idade}</p>
            <p className='dado-pessoa'><strong>Profissão</strong>: {props.pessoa.profissao}</p>
            <p className='dado-pessoa'><strong>E-mail</strong>: {props.pessoa.email}</p>
            <p className='dado-pessoa'><strong>Telefone</strong>: {props.pessoa.telefone}</p>
            <p className='dado-pessoa'><strong>Data do Preenchimento</strong>: {props.pessoa.data}</p>
        </div>
    )
}