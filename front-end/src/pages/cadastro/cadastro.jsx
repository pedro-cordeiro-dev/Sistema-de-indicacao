import React from "react";
import "./cadastro.css";
import { Link } from "react-router-dom";
import {useState} from "react";



const Cadastro = ({ irParaLogin }) => {


    const [Email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [confirmPassword, SetConfirmPassword] = useState("");
    const [Error, SetError] = useState("");

    const HandleFormSubmit = (e) => {
        e.preventDefault();

        if (password.length < 8) {
            SetError("A senha deve ter no mínimo 8 caracteres!");
            return;
        }
        if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
            SetError("A senha deve conter letras e números!");
            return;
        }
        if (password !== confirmPassword) {
            SetError("As senhas não coincidem!");
            return;
        }

        console.log("Formulário enviado com sucesso!");
        SetError("");
    };
    return (
        <div className="container">
            <form onSubmit={HandleFormSubmit}>
                <h1 className="text-cadastro">Cadastre-se</h1>
                <div className="input">
                    <span>E-mail:</span>
                    <input type="email" value={Email} onChange={(e) => SetEmail(e.target.value)} required />
                </div>

                <div className="input">
                    <span>Senha:</span>
                    <input type="password" value={password} onChange={(e) => SetPassword(e.target.value)} required />
                </div>

                <div className="input">
                    <span>confirme sua senha:</span>
                    <input type="password" value={confirmPassword} onChange={(e) => SetConfirmPassword(e.target.value)} required />
                </div>

                {Error && <p className="erro-mensagem">{Error}</p>}

                <button className="button" type="submit">Cadastrar</button>

                <div className="botao-inscrever">
                    <p>
                        Já tem uma conta?{" "}
                        <span onClick={irParaLogin}> Login </span>
                    </p>
                </div>

            </form>
        </div>
    )
}

export default Cadastro