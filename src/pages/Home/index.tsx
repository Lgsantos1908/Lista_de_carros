import {
    Container,
    Content,
    HeaderMenu,
    ForMenu,
} from './styles'
import { Carros } from '../../components/Carros'
import { carrinhos } from '../../types/types';
import { useEffect, useState } from 'react';

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
            <HeaderMenu>
            </HeaderMenu>
            <Content>
                <h1>Lista de Carrinhos</h1>
                <ForMenu>
                        {
                            Carrinhos.map((e,index) =>(
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