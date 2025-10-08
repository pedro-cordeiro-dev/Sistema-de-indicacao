import { useState } from "react";
import "./App.css";
import Login from "./pages/login/login.jsx";
import Cadastro from "./pages/cadastro/cadastro.jsx";
import Homepage from "./pages/homepage/homepage.jsx";

function App() {

    const getTelaInicial = () => {
        const params = new URLSearchParams(window.location.search);

        if (params.has('ref')) {
            return "cadastro";
        }

        const token = localStorage.getItem("authToken");
        if (token) {
            return "Homepage";
        }
        return "login";
    };


    const [tela, setTela] = useState(getTelaInicial);
    const [DadosUsuario, setDadosUsuario] = useState(null);

    const irParaHomepage = (data) => {
        setDadosUsuario(data);
        setTela("Homepage");
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        setDadosUsuario(null);
        setTela("login");
    };

    return (
        <div className="App">
            {tela === "login" && (
                <Login
                    irParaCadastro={() => setTela("cadastro")}
                    irParaHomepage={irParaHomepage}
                />
            )}

            {tela === "cadastro" && (
                <Cadastro
                    irParaLogin={() => setTela("login")}
                    irParaHomepage={irParaHomepage}
                />
            )}

            {tela === "Homepage" && (
                <Homepage irParaLogin={handleLogout} />
            )}
        </div>
    );
}

export default App;