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
        fetch("http://localhost:3000/carrinhos", {
            method: "GET", 
            headers: {
                "Content-Type" : 'application/json'
            }
        })
        .then(
            (resp) => resp.json()
            .then((data) => {
                setCarrinhos(data)
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