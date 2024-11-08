import {
    Container,
    Content,
    ForMenu,
    HeaderMenu
} from './styles'
import { Carros } from '../../components/Carros'
import { carrinhos } from '../../types/types';
import {useEffect, useState } from 'react';
import Logo from '../../assets/images/Logo_htw.png'

export function Home() {
    const [Carrinhos, setCarrinhos]= useState<carrinhos[]>([]);
    const [CarrinhosFiltrados, setCarrinhosFiltrados] = useState<carrinhos[]>([]);
    const [PesquisarCarrinhos, setPesquisarCarrinhos] =useState<string>('');


   
    useEffect(()=> {
        
        
        fetch("https://carros-6e093-default-rtdb.firebaseio.com/carrinhos.json", {
            method: "GET", 
            headers: {
                "Content-Type" : 'application/json'
            }
        })
        .then(
            (resp) => resp.json()
            .then((data) => {
                const carrinhosArray = Object.values(data) as carrinhos[];
                setCarrinhos(carrinhosArray);

                console.log(Carrinhos)
            })
                
        )
        .catch((err) => console.log(err))
    }, [])

    function filtrarcarrinho(nomeCarrinho: string) {
        if (nomeCarrinho === '') {
            setCarrinhosFiltrados(Carrinhos); // Exibe todos os carrinhos se o campo de busca estiver vazio
        } else {
            const filtrados = Carrinhos.filter((e) => 
                e.carrinho_nome.toLowerCase().includes(nomeCarrinho.toLowerCase()) || // Filtra por nome, ignorando maiúsculas/minúsculas
                e.colecao_carrinho.toLowerCase().includes(nomeCarrinho.toLowerCase())
            );
            setCarrinhosFiltrados(filtrados);
        }
    }

    
    return (
        <Container>
            <Content>
                <HeaderMenu>
                    <h1>Lista de Carrinhos</h1>
                    <img src={Logo}/>
                </HeaderMenu>
                <input 
                    type="text" 
                    placeholder="Buscar por carrinho/Coleção" 
                    onChange={(e) => {
                        const valor = e.target.value;
                        setPesquisarCarrinhos(valor);
                        filtrarcarrinho(valor);
                    }}
                />
                 <ForMenu>
                    {
                        CarrinhosFiltrados.map((e, index) => (
                            <Carros
                                key={index}
                                idcarrinho={e.idcarrinho}
                                carrinho_nome={e.carrinho_nome}
                                colecao_carrinho={e.colecao_carrinho}
                                foto={e.foto}
                            />
                        ))
                    }
                </ForMenu>

            </Content>
        </Container>
    )
}
