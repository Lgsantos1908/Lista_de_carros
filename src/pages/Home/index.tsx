import {
    Container,
    Content,
    ForMenu,
    HeaderMenu
} from './styles'
import { Carros } from '../../components/Carros'
import { carrinhos } from '../../types/types';
import { useEffect, useState } from 'react';
import Logo from '../../assets/images/Logo_htw.png'

export function Home() {
    const [Carrinhos, setCarrinhos]= useState<carrinhos[]>([]);

   
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
    
    return (
        <Container>
            <Content>
                <HeaderMenu>
                    <h1>Lista de Carrinhos</h1>
                    <img src={Logo}/>
                </HeaderMenu>
                <ForMenu>
                        {
                            Carrinhos.map((e,index) =>(
                                < Carros 
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
