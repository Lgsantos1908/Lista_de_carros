import { useEffect, useState } from "react";
import { user } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { Container, FormUser } from './styles';

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
            console.log("Dados brutos do Firebase:", data);
            const usersArray = [data];
            setUserData(usersArray);
            console.log("Estrutura convertida dos usuários:", usersArray);
          })
      )
      .catch((err) => console.log(err))
  }, []);

  function registrar() {
    const userFound = userData.find((e) => e.nome === userLogin && e.senha === password);
    if (userFound) {
      alert("Login bem-sucedido!");
      navigate('/cadastro');
    } else {
      alert("Usuário ou senha incorretos!");
    }
    console.log("Usuário encontrado:", userFound);
  }

  return (
    <Container>
      <FormUser>
        <form>
            <h1>Login</h1>
            <h2>Usuario</h2>
            <input type="text" onChange={(e) => setUserLogin(e.target.value)} placeholder="Digite seu usuário" />
            <h2>Senha</h2>
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" />
            <input type="submit" value="Fazer login" onClick={registrar} />
        </form>
      </FormUser>
    </Container>
  );
}
