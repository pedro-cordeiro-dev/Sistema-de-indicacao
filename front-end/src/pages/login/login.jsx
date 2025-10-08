import React from "react";
import "./login.css";
import {useState} from "react";
import { Link } from "react-router-dom";



const Login = ({ irParaCadastro }) => {

    const [Email, SetEmail] = useState("")
    const [Password, SetPassword] = useState("")

    return (
        <div className="container">
            <form>
                <h1 className="text-login">Faça Login</h1>
                <div className="input">
                    <span>E-mail:</span>
                    <input type="email" />
                </div>

                <div className="input">
                    <span>Senha:</span>
                    <input type="password" />
                </div>

                <button className="button">Logar</button>

                <div className="botao-inscrever">
                    <p>
                        Não tem uma conta?{" "}
                        <span onClick={irParaCadastro}> Cadastre-se </span>
                    </p>
                </div>

            </form>
        </div>
    )
}

export default Login