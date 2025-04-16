import { Router, Route, Routes, Navigate } from "react-router-dom"
import  {Home}  from "./pages/Home";
import { Login } from "./components/Login";
import { Cadastro} from "./components/Cadastro";
import { GlobalStyle } from "./styles/global";


 function App() {

  return (
    <>
      <GlobalStyle/>
      <Router basename="/Lista_de_carros">
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
