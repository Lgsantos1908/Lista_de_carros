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
                <h3>{carrinho_nome}</h3>
                <CardFront style={{backgroundImage: `url(${foto})`}}/>
                    <p>{colecao_carrinho}</p>
            </Card>
        </Container>
    )

    
}