import {
    Container,
    Content,
    ForMenu,
    HeaderMenu,
    Dados,
    Total,
    StyledLink
} from './styles'
import { Carros } from '../../components/Carros'
import { carrinhos } from '../../types/types';
import {useEffect, useState } from 'react';
import Logo from '../../assets/images/Logo_htw.png'
import { useNavigate } from 'react-router-dom';

export function Home() {
    const [Carrinhos, setCarrinhos]= useState<carrinhos[]>([]);
    const [CarrinhosFiltrados, setCarrinhosFiltrados] = useState<carrinhos[]>([]);
    const navigate = useNavigate();

   
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
                setCarrinhosFiltrados(carrinhosArray);
            })                
        )
        .catch((err) => console.log(err))        
    }, []) 

    function filtrarcarrinho(nomeCarrinho: string) {
        
        if (!nomeCarrinho.trim()) {
            setCarrinhosFiltrados(Carrinhos); 
        } else {
            const filtrados = Carrinhos.filter((e) => 
                e.carrinho_nome.toLowerCase().includes(nomeCarrinho.toLowerCase()) || 
                e.colecao_carrinho.toLowerCase().includes(nomeCarrinho.toLowerCase())
            );
            setCarrinhosFiltrados(filtrados);
        }
    }

    function confirInfo(){

        if (confirm("Você sabe a senha?")) {
            navigate('/login')
        } else {
            alert("Então, saiba que isso não é para você!")

        }
    }

    return (
        <Container>
            <Content>
                
                <HeaderMenu>
                    <h1>Lista de Carrinhos</h1>
                    <img src={Logo}/>
                    <Dados>
                        <Total>
                            <h1>Total carrinhos</h1>
                            <h2>{CarrinhosFiltrados.length}</h2>
                        </Total>
                        <StyledLink   
                            onClick={confirInfo} > Cadastro carrinho
                        </StyledLink>
                    </Dados>
                    
                </HeaderMenu>
                <input 
                    type="text" 
                    placeholder="Buscar por Carrinho/Coleção" 
                    onChange={(e) => {
                        const inputValor = e.target.value;
                        filtrarcarrinho(inputValor); 
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
