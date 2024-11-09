import { useEffect, useState } from "react";
import { user } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { 
    Container,
    FormUser,
} from './styles';

export function Login() {
    const [userData, setUserData] = useState<user[]>([]);
    const [userLogin, setUserLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://carros-6e093-default-rtdb.firebaseio.com/usuario.json", {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            }
        })
            .then(
                (resp) => resp.json()
                .then((data) => {
                    console.log("Dados brutos do Firebase:", data); // Verificar a estrutura original
        
                    // Armazena `data` diretamente como um array de um único objeto
                    const usersArray = [data];
                    setUserData(usersArray);
        
                    console.log("Estrutura convertida dos usuários:", usersArray); // Confirmação do formato
                })
            )
            .catch((err) => console.log(err))
    }, []);

    function registrar() {
        // Filtra o usuário e a senha
        const userFound = userData.find((e) => e.nome === userLogin && e.senha === password);

        console.log("Tentando Login - Usuário:", userLogin, "Senha:", password);
        console.log("Dados dos usuários carregados:", userData);

        if (userFound) {
            alert("Login bem-sucedido!");
            navigate('/cadastro');
        } else {
            alert("Usuário ou senha incorretos!");
        }

         // Debug adicional
        console.log("Usuário encontrado:", userFound);
    }

    

    return (
        <Container>
            <FormUser>
                <div>
                    <h1>Login</h1>
                </div>
                <form>
                    <h2>Login</h2>
                    <input 
                        type="text" 
                        onChange={(e) => setUserLogin(e.target.value)} 
                        placeholder="Digite seu usuário"
                    />
                    <h2>Senha</h2>
                    <input 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Digite sua senha"
                    />
                    <h2>Fazer login</h2>
                    <input 
                        type="button" 
                        value='Registrar' 
                        onClick={registrar} 
                    />
                </form>
            </FormUser>
                
        </Container>
    );
}
