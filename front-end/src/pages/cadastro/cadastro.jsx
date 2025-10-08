import React, { useState, useEffect } from "react";
import axios from "axios";
import "./cadastro.css";

const Cadastro = ({ irParaLogin, irParaHomepage }) => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [codigoIndicacao, setCodigoIndicacao] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const refCode = params.get('ref');
        if (refCode) {
            setCodigoIndicacao(refCode);
        }
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("As senhas não coincidem!");
            return;
        }

        if (password.length < 8) {
            setError("A senha deve ter no mínimo 8 caracteres.");
            return;
        }

        if (!/[a-zA-Z]/.test(password)) {
            setError("A senha deve conter pelo menos uma letra.");
            return;
        }

        if (!/\d/.test(password)) {
            setError("A senha deve conter pelo menos um número.");
            return;
        }

        try {
            const dadosCadastro = {
                name: nome,
                email: email,
                password: password,
                codigoIndicacao: codigoIndicacao
            };

            const response = await axios.post("http://localhost:8080/auth/registrar", dadosCadastro);

            localStorage.setItem("authToken", response.data.token);
            irParaHomepage(response.data);

        } catch (err) {

            console.error("DETALHES DO ERRO NO CADASTRO:", err);

            if (err.response) {

                setError(err.response.data || `Erro ${err.response.status}: Não foi possível completar o cadastro.`);
            } else if (err.request) {
                setError("Não foi possível conectar ao servidor. Verifique a sua conexão e a configuração de CORS no backend.");
            } else {
                setError("Ocorreu um erro inesperado ao preparar o cadastro.");
            }
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <h1 className="text-cadastro">Cadastre-se</h1>
                {codigoIndicacao && <p className="aviso-indicacao">Você foi indicado! Complete o seu cadastro.</p>}
                <div className="input">
                    <span>Nome:</span>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </div>
                <div className="input">
                    <span>E-mail:</span>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input">
                    <span>Senha:</span>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="input">
                    <span>Confirme sua senha:</span>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>

                {error && <p className="erro-mensagem">{error}</p>}

                <button className="button" type="submit">Cadastrar</button>

                <div className="botao-inscrever">
                    <p>
                        Já tem uma conta?{" "}
                        <span onClick={irParaLogin}> Login </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Cadastro;