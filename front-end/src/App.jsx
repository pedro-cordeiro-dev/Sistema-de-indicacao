import { useState } from "react";
import "./App.css";
import Login from "./pages/login/login.jsx";
import Cadastro from "./pages/cadastro/cadastro.jsx";
import Homepage from "./pages/homepage/homepage.jsx";

function App() {
    const [tela, setTela] = useState("Homepage"); // começa no cadastro
    const [usuario, setUsuario] = useState("");

    return (
        <div className="App">
            {tela === "login" && (
                <Login irParaCadastro={() => setTela("cadastro")} />
            )}

            {tela === "cadastro" && (
                <Cadastro
                    irParaLogin={() => setTela("login")}
                    irParaPerfil={(emailUsuario) => {
                        setUsuario(emailUsuario);
                        setTela("perfil");
                    }}
                />
            )}

            {tela === "Homepage" && (
                <Homepage usuario={usuario} irParaLogin={() => setTela("login")} />
            )}
        </div>
    );
}

export default App;
