# 💡 Sistema de Indicação

Este projeto foi desenvolvido como parte de um **desafio técnico** para o processo seletivo de estágio da Vortex - UNIFOR.  
O sistema consiste em uma aplicação **full stack** (React + Spring Boot) que permite o **cadastro de usuários**, **login com autenticação JWT**, **geração de links de indicação** e **pontuação por indicação**

---

## 🚀 Funcionalidades Principais

### 🖥️ Front-end (React + Vite)
- Interface de cadastro e login de usuários.
- Página de perfil exibindo informações do usuário logado.
- Integração com o back-end via requisições HTTP (axios).
- Estilização com **CSS puro**, priorizando responsividade e simplicidade.
- Estrutura organizada por componentes, separando cada página (Cadastro, Login, HomePage).

### ⚙️ Back-end (Java + Spring Boot)
- API RESTful desenvolvida com **Spring Boot**.
- Autenticação e autorização via **Spring Security + JWT**.
- Organização em camadas:
    - `model` → entidades JPA
    - `dto` → objetos de transferência de dados
    - `repository` → camada de acesso ao banco
    - `service` → regras de negócio
    - `controller` → controle das rotas REST
- Persistência com **JPA** e integração com banco **JDBC**.
- Geração de **hash de link de indicação** usando algoritmo SHA.

---

## 🧱 Estrutura do Projeto

```
Sistema-de-indicacao/
│
├── backend/
│   ├── src/
│   │   ├── main/java/com/example/Sistema_Indicacao/
│   │   │   ├── controller/
│   │   │   ├── dto/
│   │   │   ├── model/
│   │   │   ├── repository/
│   │   │   └── service/
│   │   └── resources/
│   │       └── application.properties
│   └── pom.xml
│
├── front-end/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── cadastro/
│   │   │   ├── login/
│   │   │   └── homepage/
│   │   ├── components/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🛠️ Tecnologias Utilizadas

### **Front-end**
- **React + Vite** → Criação de interface moderna e reativa.
  > *Motivo de escolha:* Estou estudando React atualmente na faculdade e quis me desafiar aplicando os conceitos aprendidos em um projeto técnico real.

- **CSS Puro** → Estilização leve e customizável.
  > *Motivo de escolha:* Permitiu compreender melhor o comportamento visual sem depender de bibliotecas externas.

---

### **Back-end**
- **Spring Boot** → Framework robusto e modular para APIs Java.
  > *Motivo de escolha:* É a tecnologia que mais domino e desejo seguir profissionalmente.

- **Spring Security + JWT** → Implementação da autenticação e segurança da API.
  > *Motivo de escolha:* Boa prática moderna e segura para proteger rotas e dados do usuário.

- **JPA (Java Persistence API)** → Mapeamento objeto-relacional.
  > *motivo de escolha:* Facilita a comunicação entre entidades e o banco.

- **Banco de Dados JDBC** → Banco leve e integrado nativamente ao Java.
  > *motivo de escolha:* Evita configurações complexas e tem um painel visual fácil de usar para testes rápidos.

---

## 🧭 Como Executar o Projeto

### 🖥️ 1. Back-end (Spring Boot)

#### 🔹 Requisitos:
- Java 17+
- Maven
- IntelliJ IDEA (recomendado) **ou** VS Code com extensão “Spring Boot Tools”

#### 🔹 Passos:

##### 💡 **Com IntelliJ (recomendado):**
1. Abra o diretório `backend` no IntelliJ.
2. Aguarde o Maven baixar as dependências automaticamente.
3. Vá até a classe principal (com `@SpringBootApplication`) e clique em **Run ▶️**.

##### 💡 **Com VS Code (terminal):**
1. Abra o terminal na pasta `backend`.
2. Execute os comandos:
   ```bash
   ./mvnw clean install
   ./mvnw spring-boot:run
   ```
3. O servidor iniciará em:
   ```
   http://localhost:8080
   ```

---

### 🧩 2. Banco de Dados (JDBC)

O projeto utiliza o banco **JDBC** embutido, portanto **não é necessária configuração adicional**.

#### 🔹 Acessar o console visual (H2 Console)
1. Inicie o servidor Spring Boot.
2. Acesse no navegador:
   ```
   http://localhost:8080/h2-console
   ```
3. Insira a URL JDBC (exemplo):
   ```
   jdbc:h2:mem:testdb
   ```
4. Clique em **Connect** para acessar o banco.
5. Para visualizar os dados da tabela de usuários:
   ```sql
   SELECT * FROM USUARIOS;
   ```

---

### 🌐 3. Front-end (React + Vite)

#### 🔹 Requisitos:
- Node.js (versão 18+)
- npm

#### 🔹 Passos:
1. Abra o terminal na pasta `front-end`.
2. Execute:
   ```bash
   npm install
   npm run dev
   ```
3. O servidor local será iniciado (por padrão):
   ```
   http://localhost:5173
   ```
4. Acesse a aplicação pelo navegador.

---

## 💬 Colaboração com IA

Durante o desenvolvimento, utilizei ferramentas de **Inteligência Artificial** (como o ChatGPT) como apoio técnico e de aprendizado.  
A colaboração ocorreu nas seguintes etapas:

- 💡 **Lógica de Geração do Link de Indicação**  
  Trabalhei junto à IA para pensar na melhor forma de gerar e validar um hash único para cada usuário.

- 🎨 **Ajustes de CSS**  
  A IA me auxiliou com comandos e propriedades do CSS que eu ainda não conhecia, o que aprimorou a aparência final da aplicação.

- 🐛 **Correção de Erros e Depuração**  
  Durante o processo, identifiquei e corrigi bugs com a ajuda da IA, que me orientou sobre boas práticas e possíveis causas dos problemas.
- 🐛 **Auxilio com o readme**  
  Usei a IA para auxiliar na elaboração da documentação do projeto, garantindo que fosse de fácil leitura e entendimento.


### 📘 O que aprendi
- Melhorei minha **lógica de programação** ao pensar junto com a IA sobre o funcionamento do sistema.
- Aprendi **novos comandos e técnicas de CSS puro**.
- Evoluí no uso do **React**, especialmente na parte de integração com back-end e tratamento de estados.
- Aprendi a usar a IA de forma responsável, como **ferramenta de apoio**, sem depender exclusivamente dela para resolver problemas.
- Aprimorei minha capacidade de criar documentações README.md mais detalhadas, claras e úteis para futuros projetos.
---

## 🧑‍💻 Autor

**Pedro Lucas Saraiva Cordeiro**  
Desenvolvedor em formação, apaixonado por back-end Java e em constante aprendizado no ecossistema Spring.

www.linkedin.com/in/pedro-cordeiro2005

---

## 📄 Licença
Este projeto foi desenvolvido exclusivamente para fins de estudo e avaliação técnica.
