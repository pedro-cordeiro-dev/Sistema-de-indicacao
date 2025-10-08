import React, { useState } from "react";
import axios from "axios";
import "./login.css";

const Login = ({ irParaCadastro, irParaHomepage }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:8080/auth/login", {
                email: email,
                password: password,
            });

            localStorage.setItem("authToken", response.data.token);
            irParaHomepage(response.data);

        } catch (err) {
            setError("Email ou senha inválidos. Tente novamente.");
            console.error("Falha no login:", err);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleLogin}>
                <h1 className="text-login">Faça Login</h1>
                <div className="input">
                    <span>E-mail:</span>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input">
                    <span>Senha:</span>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {error && <p className="erro-mensagem">{error}</p>}

                <button className="button" type="submit">Logar</button>

                <div className="botao-inscrever">
                    <p>
                        Não tem uma conta?{" "}
                        <span onClick={irParaCadastro}> Cadastre-se </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;

