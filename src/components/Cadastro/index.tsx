import {
    Container,
    FormUser,
} from './styles'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export function Cadastro() {
    const[nomeCarrinho, setnomeCarrinho] = useState('');
    const[colecaoCarrinho, setcolecaoCarrinho] = useState('');


    const handleCarrinho = () => {
        const newCarrinho = {
            carrinho_nome: nomeCarrinho.toUpperCase(),
            colecao_carrinho: colecaoCarrinho.toUpperCase(),
            foto:'',
        };

        fetch("https://carros-6e093-default-rtdb.firebaseio.com/carrinhos.json", {
            method: "POST", 
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(newCarrinho)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            alert("Carrinho cadastrado com sucesso!");
            setcolecaoCarrinho('');
            setnomeCarrinho('');
        })
        .catch((err) => console.log(err));

        
    };     
   

    return(
        <Container>
            
        <FormUser>
            <form>
                <h1>Cadastro</h1>
                <h2>Nome</h2>
                <input type="text" onChange={(e) => setnomeCarrinho(e.target.value)} />
                <h2>Coleção</h2>
                <input type="text" onChange={(e) => setcolecaoCarrinho(e.target.value)}/>
                <Link to='/home'>
                    <input type="submit" value='Criar carrinho' onClick={handleCarrinho}/>
                </Link>
            </form>

        </FormUser>
        
    </Container>
    )

}
