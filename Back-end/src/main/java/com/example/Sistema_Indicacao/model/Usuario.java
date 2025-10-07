package com.example.Sistema_Indicacao.model;

import jakarta.persistence.*;

@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String nome;
    private String email;
    private String senha;

    @Column(unique = true)
    private String linkIndicacao;

    public String getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }

    public String getLinkIndicacao() {
        return linkIndicacao;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public void setLinkIndicacao(String linkIndicacao) {
        this.linkIndicacao = linkIndicacao;
    }

    public Usuario(String id, String nome, String email, String senha, String linkIndicacao) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.linkIndicacao = linkIndicacao;
    }

    public Usuario() {}
}
