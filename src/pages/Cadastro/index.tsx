import {
    Container,
    FormUser,
} from './styles'
// import { carrinhos } from '../../types/types';
import {useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export function Cadastro() {
    // const[carrinhos, setCarrinhos]= useState<carrinhos[]>([]);
    const[novoCarrinho, setnovoCarrinho] = useState('');
    const[nomeCarrinho, setnomeCarrinho] = useState('');
    const[colecaoCarrinho, setcolecaoCarrinho] = useState('');

    // useEffect(()=> {                
    //     fetch("https://carros-6e093-default-rtdb.firebaseio.com/carrinhos.json", {
    //         method: "GET", 
    //         headers: {
    //             "Content-Type" : 'application/json'
    //         }
    //     })
    //     .then(
    //         (resp) => resp.json()
    //         .then((data) => {
    //             const carrinhosArray = Object.values(data) as carrinhos[];
    //             setCarrinhos(carrinhosArray);
    //         })                
    //     )
    //     .catch((err) => console.log(err))        
    // }, []) 


    function handleCarrinho(){
        const newCarrinho = {
            carrinhos: novoCarrinho,
            nomeCarrinho: nomeCarrinho,
            colecaoCarrinho: colecaoCarrinho,

        }

        useEffect(()=> {                
            fetch("https://carros-6e093-default-rtdb.firebaseio.com/carrinhos.json", {
                method: "POST", 
                headers: {
                    "Content-Type" : 'application/json'
                },
                body: JSON.stringify(newCarrinho)
            })
            .then((resp) => resp.json())
            .then((data) => {console.log(data)})
            .catch((err) => console.log(err)) 
    
            // setCarrinhos([])
            setnovoCarrinho('')
            setcolecaoCarrinho('')
            setnomeCarrinho('')
    
            alert("carrinho cadsatro com sucesso!")
        }, []) 
    }

   

    return(
        <Container>
            <h1>Cadastro</h1>
        <FormUser>
            <form>
                <h2>Nome</h2>
                <input type="text" onChange={(e) => setnomeCarrinho(e.target.value)} />
                <h2>Coleção</h2>
                <input type="password" onChange={(e) => setcolecaoCarrinho(e.target.value)}/>
                <Link to='/home'>
                    <input type="submit" value='Criar carrinho' onClick={handleCarrinho}/>
                </Link>
            </form>

        </FormUser>
        
    </Container>
    )

}
