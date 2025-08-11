# ✍️ Gerador de Bio para LinkedIn

![badge-em-construcao](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![badge-tecnologias](https://img.shields.io/badge/Tecnologias-React%2C%20Node%2C%20OpenAI%20API-blue)
![badge-licença](https://img.shields.io/badge/Licença-MIT-lightgrey)

Uma aplicação Full Stack para gerar bios profissionais e personalizadas para o LinkedIn usando Inteligência Artificial.

## 🚀 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de demonstrar habilidades em desenvolvimento Full Stack, integração com APIs de IA e boas práticas de desenvolvimento. A aplicação permite que o usuário insira sua profissão e experiência, e em poucos segundos, recebe uma bio profissional e otimizada para seu perfil no LinkedIn, gerada por um modelo de linguagem avançado.

### ✨ Principais Funcionalidades

-   **Interface Intuitiva:** Formulário simples e direto ao ponto para coletar informações do usuário.
-   **Integração com IA:** Utiliza a API da OpenAI para gerar conteúdo de alta qualidade em tempo real.
-   **Arquitetura Full Stack:** Demonstra a separação clara entre a camada de front-end (React) e a de back-end (Node.js).
-   **Segurança:** A chave de API da OpenAI é mantida de forma segura no lado do servidor, protegendo informações sensíveis.

## 💻 Tecnologias Utilizadas

-   **Front-end:**
    -   [React](https://reactjs.org/): Biblioteca JavaScript para construção da interface de usuário.
    -   [Vite](https://vitejs.dev/): Ferramenta de build rápida para o desenvolvimento.
    -   HTML, CSS, JavaScript.

-   **Back-end:**
    -   [Node.js](https://nodejs.org/): Ambiente de execução JavaScript.
    -   [Express.js](https://expressjs.com/): Framework web para criar o servidor.
    -   [dotenv](https://www.npmjs.com/package/dotenv): Para gerenciar variáveis de ambiente.
    -   [cors](https://www.npmjs.com/package/cors): Para permitir requisições do front-end.
    -   [OpenAI SDK](https://www.npmjs.com/package/openai): Para interagir com a API da OpenAI.

## 🛠️ Como Executar o Projeto

Para rodar este projeto em sua máquina local, siga os passos abaixo.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/download/) e o [npm](https://www.npmjs.com/) instalados.

### 1. Configurar o Front-end

1.  Clone este repositório:
    ```bash
    git clone https://github.com/alanasilva88/generate-bio-linkedIn-front.git
    ```
2.  Navegue até a pasta do front-end (`/generate-bio`):
    ```bash
    cd generate-bio
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Inicie o servidor de desenvolvimento do React:
    ```bash
    npm run dev
    ```
    O front-end estará disponível em `http://localhost:5173`.

## 🚧 Status e Próximos Passos

O projeto está atualmente em desenvolvimento e as seguintes funcionalidades estão planejadas:

-   [ ] **Melhorar a Interface:** Adicionar mais estilização e responsividade para diferentes tamanhos de tela.
-   [ ] **Campos Adicionais:** Incluir opções para o usuário especificar o "tom" da bio (ex: formal, criativo) e outras informações relevantes.
-   [ ] **Botão de Copiar:** Adicionar uma funcionalidade para copiar a bio gerada para a área de transferência com um único clique.
-   [ ] **Tratamento de Erros:** Exibir mensagens de erro mais amigáveis para o usuário em caso de falha na API.
-   [ ] **Deploy:** Publicar o front-end e o back-end em serviços de hospedagem (Vercel, Railway, etc.) para que a aplicação fique acessível publicamente.

## 🤝 Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato.

---
_Desenvolvido com 💜 por Alana Silva_
