import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import  {Home}  from "./pages/Home"
import { Cadastro} from "./pages/Cadastro"
import { GlobalStyle } from "./styles/global"


function App() {

  return (
    <>
      <GlobalStyle/>
      <Router>
        <Routes>
            <Route path="Lista_de_carros/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
