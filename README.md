# DevConnect: Plataforma Colaborativa para Desenvolvedores

## Descrição do Projeto

DevConnect é uma plataforma colaborativa onde desenvolvedores podem cadastrar ideias de projetos e encontrar outros devs interessados em participar. Nosso objetivo é conectar criadores de ideias com colaboradores que desejam ganhar experiência, construir portfólios e formar redes profissionais.

## Funcionalidades

- Cadastro e login de usuários.
- Publicação de ideias de projetos com descrição, tecnologias necessárias e status.
- Inscrição de colaboradores nos projetos.
- Aprovação ou rejeição de usuários inscritos nos projetos.
- Remoção de colaboradores de um projeto.


## Tecnologias Utilizadas

- **Frontend:** React, Tailwind CSS,  React Hook Form
- **Backend:** Node.js, Express, Prisma
- **Banco de Dados:** PostgreSQL
- **Hospedagem:** Vercel (frontend) e Railway (backend)

## Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js (v16 ou superior)
- Git

### Passo 1: Clone o repositório

```bash
git clone https://github.com/viniciusbr32/DevConnect.git
cd devconnect
```

### Passo 2: Instale as dependências

```bash
npm install
```

### Passo 3: Configure as variáveis de ambiente

- Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```plaintext
DATABASE_URL=seu_banco_de_dados
FIREBASE_API_KEY=sua_chave_api
```

### Passo 4: Inicie o projeto

```bash
npm run dev
```

## Roadmap (MVP Inicial)

- [X] Cadastro e login de usuários
- [X] Publicação de projetos
- [X] Sistema de inscrições
- [ ] Chat entre colaboradores
- [ ] Avaliações e feedbacks

## Contato


- **GitHub:** [viniciusbr32](https://github.com/viniciusbr32)
- **LinkedIn:** [Luiz Vinicius](https://www.linkedin.com/in/luiz-vinícius-38182b162/)

