package com.example.Sistema_Indicacao.DTO;

public class UserDTO {
    private String nome;
    private String email;
    private int pontuacao;
    private String linkIndicacao;

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

    public int getPontuacao() {
        return pontuacao;
    }

    public void setPontuacao(int pontuacao) {
        this.pontuacao = pontuacao;
    }

    public String getLinkIndicacao() {
        return linkIndicacao;
    }

    public void setLinkIndicacao(String linkIndicacao) {
        this.linkIndicacao = linkIndicacao;
    }

    public UserDTO(String nome, String email, int pontuacao, String linkIndicacao) {
        this.nome = nome;
        this.email = email;
        this.pontuacao = pontuacao;
        this.linkIndicacao = linkIndicacao;
    }

    public UserDTO() {
    }
}