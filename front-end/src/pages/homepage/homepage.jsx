import React, { useState, useEffect } from "react";
import axios from "axios";
import "./homepage.css";

const Homepage = ({ irParaLogin }) => {
    const [perfil, setPerfil] = useState(null);
    const [loading, setLoading] = useState(true);
    const [atualizando, setAtualizando] = useState(false);
    const buscarDadosDoPerfil = async () => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            irParaLogin();
            return;
        }

        try {
            const response = await axios.get("http://localhost:8080/user", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setPerfil(response.data);
        } catch (error) {
            console.error("Erro ao buscar perfil:", error);
            if (error.response && (error.response.status === 403 || error.response.status === 401)) {
                handleSair();
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        buscarDadosDoPerfil();
    }, []);

    const handleAtualizarPontuacao = async () => {
        setAtualizando(true);
        await buscarDadosDoPerfil();
        setAtualizando(false);
    };

    const copiarLink = () => {
        if (perfil && perfil.linkIndicacao) {
            const linkCompleto = `http://localhost:5173/cadastro?ref=${perfil.linkIndicacao}`;
            navigator.clipboard.writeText(linkCompleto);
            alert("Link de indicação copiado!");
        }
    };

    const handleSair = () => {
        localStorage.removeItem("authToken");
        irParaLogin();
    };

    if (loading) {
        return <div className="container-homepage"><h1>A carregar perfil...</h1></div>;
    }

    if (!perfil) {
        return <div className="container-homepage"><h1>Não foi possível carregar o perfil.</h1><button className="button-sair" onClick={handleSair}>Voltar para Login</button></div>;
    }

    return (
        <div className="container-homepage">
            <h1 className="text-homepage">Perfil</h1>
            <p><strong>Usuário:</strong> {perfil.nome}</p>
            <p><strong>Email:</strong> {perfil.email}</p>

            <div className="pontuacao-container">
                <p><strong>Pontuação atual:</strong> {perfil.pontuacao}</p>
                <button
                    className="button-atualizar"
                    onClick={handleAtualizarPontuacao}
                    disabled={atualizando}
                >
                    {atualizando ? 'Atualizando...' : 'Atualizar'}
                </button>
            </div>

            <div className="perfil-info">
                <p><strong>Seu código de indicação:</strong></p>
                <input type="text" value={perfil.linkIndicacao} readOnly className="link-indicacao" />
                <button className="button-copiar" onClick={copiarLink}>Copiar Link Completo</button>
            </div>

            <button className="button-sair" onClick={handleSair}>Sair</button>
        </div>
    );
};

export default Homepage;

