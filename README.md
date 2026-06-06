# ✍️ Gerador de Bio para LinkedIn

Uma aplicação Full Stack para gerar bios profissionais e personalizadas para o LinkedIn usando **Inteligência Artificial**.

## 🚀 Sobre o Projeto

Este projeto demonstra habilidades sólidas em **Desenvolvimento Full Stack** e **Integração de APIs de IA**. A aplicação permite que o usuário insira sua profissão, experiência e defina o tom/foco, gerando uma bio profissional e otimizada para o LinkedIn, utilizando um modelo de linguagem avançado da OpenAI.

### ✨ Principais Funcionalidades

  - **Interface Intuitiva & Customizável:** Design simples com opções para definir **Tom** (Formal, Criativo, etc.) e **Foco** (Liderança, Resultados, etc.).
  - **Integração com IA (OpenAI):** Utiliza a API da OpenAI para gerar conteúdo de alta qualidade e conciso (máximo 3 frases) em tempo real.
  - **Arquitetura Full Stack:** Separação clara entre a camada de apresentação (React) e a API de serviços (Node.js/Express).
  - **Segurança:** A chave de API da OpenAI é mantida **exclusivamente no lado do servidor** (via `.env`), protegendo credenciais sensíveis.
  - **Usabilidade:** Botão de **Copiar para a Área de Transferência** com feedback visual (`Copiado!`).
  - **Robustez:** **Tratamento de Erros** detalhado no Back-end e exibição de mensagens amigáveis no Front-end (ex: erro 403 de limite de uso).

-----

## 💻 Tecnologias Utilizadas

| Categoria | Tecnologia | Uso Principal |
| :--- | :--- | :--- |
| **Front-end** | **[React](https://reactjs.org/)** | Construção da interface de usuário e gestão de estado. |
| | **[Vite](https://vitejs.dev/)** | Ferramenta de build rápida. |
| **Back-end** | **[Node.js](https://nodejs.org/) / [Express.js](https://expressjs.com/)** | Ambiente de execução e Framework para criação da API REST. |
| | **[OpenAI SDK](https://www.npmjs.com/package/openai)** | Interação oficial e otimizada com o serviço de IA. |
| **Infra/Dev** | **[dotenv](https://www.npmjs.com/package/dotenv)** | Gerenciamento seguro de variáveis de ambiente. |
| | **[cors](https://www.npmjs.com/package/cors)** | Configuração de segurança para requisições entre o Front e o Back-end. |

-----

## 🛠️ Como Executar o Projeto (Full Stack)

Para rodar o Back-end e o Front-end em sua máquina local, você deve iniciar os dois projetos separadamente.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/download/) e o [npm](https://www.npmjs.com/) instalados.

### 1\. Configurar e Iniciar o Back-end (API)

1.  Clone o repositório do Back-end:
    ```bash
    git clone https://github.com/alanasilva88/generate-bio-linkedIn-back.git
    cd generate-bio-linkedIn-back
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Crie um arquivo `.env` na raiz do Back-end com sua chave da API da OpenAI:
    ```
    OPENAI_API_KEY="sua_chave_secreta_aqui"
    OPENAI_MODEL="gpt-4o-mini" # Sugerido para baixo custo e bons resultados
    ```
4.  Inicie o servidor da API:
    ```bash
    node server.js
    # O servidor estará rodando em http://localhost:3000.
    ```

### 2\. Configurar e Iniciar o Front-end (Interface)

1.  Mantenha o Back-end rodando e, em uma nova aba do terminal, clone o repositório do Front-end:
    ```bash
    git clone https://github.com/alanasilva88/generate-bio-linkedIn-front.git
    cd generate-bio-linkedIn-front
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento do React:
    ```bash
    npm run dev
    # O front-end estará disponível em http://localhost:5173.
    ```

-----

## 🚧 Status e Próximos Passos

O projeto está em desenvolvimento ativo. Aqui estão as próximas funcionalidades planejadas:

  - [ ] **Melhorar a Interface:** Adicionar mais estilização e responsividade para diferentes tamanhos de tela.
  
-----

## 🤝 Contato

Se você tiver alguma dúvida, sugestão ou quiser se conectar, sinta-se à vontade para entrar em contato.

*Desenvolvido com 💜 por [Alana Silva](https://www.linkedin.com/in/alana-soares-silva)*
