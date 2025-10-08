import React, { useState } from "react";
import "./homepage.css";

const Homepage = ({ usuario, irParaLogin }) => {
    const [pontuacao, SetPontuacao] = useState(0);
    const linkIndicacao = `https://meusite.com/convite?user=${encodeURIComponent(usuario)}`;

    const copiarLink = () => {
        navigator.clipboard.writeText(linkIndicacao);
        alert("Link de indicação copiado!");
    };

    return (
        <div className="container-homepage">
            <h1 className="text-homepage">Perfil</h1>
            <p><strong>Usuário:</strong> {usuario}</p>
            <p><strong>Pontuação atual:</strong> {pontuacao}</p>

            <div className="perfil-info">
                <p><strong>Seu link de indicação:</strong></p>
                <input type="text" value={linkIndicacao} readOnly className="link-indicacao" />
                <button className="button-copiar" onClick={copiarLink}>Copiar Link</button>
            </div>

            <button className="button-sair" onClick={irParaLogin}>Sair</button>
        </div>
    );
};

export default Homepage;
