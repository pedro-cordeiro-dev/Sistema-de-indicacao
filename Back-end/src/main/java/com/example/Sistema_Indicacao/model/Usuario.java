package com.example.Sistema_Indicacao.model;

import jakarta.persistence.*;

@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String senha;

    @Column(nullable = false)
    private int pontuacao = 0;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "indicador_id", nullable = true)
    private Usuario indicador;

    @Column(unique = true)
    private String linkIndicacao;

    public Usuario() {}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public int getPontuacao() {
        return pontuacao;
    }

    public void setPontuacao(int pontuacao) {
        this.pontuacao = pontuacao;
    }

    public Usuario getIndicador() {
        return indicador;
    }

    public void setIndicador(Usuario indicador) {
        this.indicador = indicador;
    }

    public String getLinkIndicacao() {
        return linkIndicacao;
    }

    public void setLinkIndicacao(String linkIndicacao) {
        this.linkIndicacao = linkIndicacao;
    }
}
