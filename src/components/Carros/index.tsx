import {
    Container,
    Card,
    CardFront,
} from './styles'
import { carrinhos } from '../../types/types'


export function Carros({carrinho_nome, colecao_carrinho, foto}:carrinhos){

    return (
        <Container>
            <Card>
                <h3>Nome: {carrinho_nome}</h3>
                <h3>Coleção: {colecao_carrinho}</h3>
                <CardFront style={{backgroundImage: `url(${foto})`}}/>
            </Card>
        </Container>
    )

    
}