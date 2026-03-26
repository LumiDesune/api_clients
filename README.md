# 👥 API Clientes

Uma aplicação full-stack para gerenciamento de usuários/clientes com uma API RESTful robusta e uma interface web intuitiva.

## 📋 Sumário

- [Características](#características)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [API Endpoints](#api-endpoints)
- [Tecnologias](#tecnologias)
- [Contribuindo](#contribuindo)

## ✨ Características

- ✅ **CRUD Completo** - Criar, listar e deletar usuários
- 🚀 **API RESTful** - Backend em Fastify com alta performance
- 💾 **MongoDB** - Banco de dados NoSQL com Prisma ORM
- 🎨 **UI Moderna** - Frontend em React com Tailwind CSS
- 📱 **Responsivo** - Interface adaptável para diferentes telas
- 🔒 **CORS Habilitado** - Suporte para requisições cross-origin
- 📝 **TypeScript** - Type safety em todo o projeto

## 📦 Pré-requisitos

Antes de começar, você precisará ter instalado:

- **Node.js** (v18 ou superior)
- **npm** ou **yarn**
- **MongoDB** (local ou na nuvem)

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone <seu-repositorio>
cd api_clients
```

### 2. Instale as dependências do Backend

```bash
cd backend
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na pasta `backend`:

```env
DATABASE_URL="mongodb://localhost:27017/api_clientes"
```

Se estiver usando MongoDB Atlas (nuvem), use:

```env
DATABASE_URL="mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/api_clientes"
```

### 4. Execute as migrações do Prisma

```bash
npx prisma migrate dev
npx prisma generate
```

### 5. Instale as dependências do Frontend

```bash
cd ../frontend
npm install
```

## 📖 Como Usar

### Iniciar o Backend

```bash
cd backend
npm run dev
```

O servidor estará disponível em `http://localhost:3333`

### Iniciar o Frontend

```bash
cd frontend
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

**Backend:**
```bash
cd backend
npm run build
```

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

## 📁 Estrutura do Projeto

```
api_clients/
├── backend/
│   ├── src/
│   │   ├── controller/          # Controllers (lógica de requisição)
│   │   │   ├── CreateUserController.ts
│   │   │   ├── DeleteUserController.ts
│   │   │   └── ListUserController.ts
│   │   ├── services/            # Services (lógica de negócio)
│   │   │   ├── CreateUserService.ts
│   │   │   ├── DeleteUserService.ts
│   │   │   └── ListUserService.ts
│   │   ├── prisma/              # Configuração do Prisma
│   │   │   └── index.ts
│   │   ├── routes.ts            # Definição de rotas
│   │   └── server.ts            # Inicialização do servidor
│   ├── prisma/
│   │   └── schema.prisma        # Schema do banco de dados
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── components/          # Componentes React
│   │   ├── services/
│   │   │   └── api.ts           # Cliente HTTP (Axios)
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

## 🔌 API Endpoints

### Listar Usuários
```http
GET /users
```

**Resposta (200):**
```json
[
  {
    "id": "507f1f77bcf86cd799439011",
    "name": "João Silva",
    "email": "joao@example.com",
    "status": true,
    "createdAt": "2024-01-15T10:30:00Z"
  }
]
```

### Criar Usuário
```http
POST /users
Content-Type: application/json

{
  "name": "Maria Santos",
  "email": "maria@example.com",
  "status": true
}
```

**Resposta (201):**
```json
{
  "id": "507f1f77bcf86cd799439012",
  "name": "Maria Santos",
  "email": "maria@example.com",
  "status": true,
  "createdAt": "2024-01-15T11:45:00Z"
}
```

### Deletar Usuário
```http
DELETE /users/:id
```

**Resposta (204):** Sem conteúdo

## 🛠️ Tecnologias Utilizadas

### Backend

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **Fastify** | ^5.8.4 | Framework web rápido e eficiente |
| **Prisma** | ^6.19.2 | ORM para banco de dados |
| **MongoDB** | - | Banco de dados NoSQL |
| **TypeScript** | ^5.9.3 | Linguagem com tipagem estática |
| **Node.js** | ^18 | Runtime JavaScript |
| **Fastify CORS** | ^11.2.0 | Suporte a CORS |

### Frontend

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **React** | ^19.2.4 | Biblioteca UI |
| **TypeScript** | ~5.9.3 | Tipagem estática |
| **Vite** | ^8.0.1 | Build tool moderno |
| **Tailwind CSS** | ^4.2.2 | Framework CSS utilitário |
| **Axios** | ^1.13.6 | Cliente HTTP |
| **React Icons** | ^5.6.0 | Biblioteca de ícones |

## 🧪 Testes

Você pode testar a API usando:

- **Postman** - Importar requisições HTTP
- **cURL** - Usar linha de comando
- **ThunderClient** - Extensão VS Code
- **REST Client** - Extensão VS Code

### Exemplo com cURL

```bash
# Listar usuários
curl -X GET http://localhost:3333/users

# Criar usuário
curl -X POST http://localhost:3333/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","status":true}'

# Deletar usuário
curl -X DELETE http://localhost:3333/users/507f1f77bcf86cd799439011
```

## 📝 Variáveis de Ambiente

### Backend (.env)

```env
# Conexão com MongoDB
DATABASE_URL="mongodb://localhost:27017/api_clientes"

# Porta do servidor (opcional)
PORT=3333

# Host (opcional)
HOST=0.0.0.0
```

## 💡 Dicas de Desenvolvimento

### Resetar o banco de dados

```bash
cd backend
npx prisma migrate reset
```

### Ver dados no Prisma Studio

```bash
cd backend
npx prisma studio
```
## 📄 Licença

Este projeto está licenciado sob a licença ISC.

## 👨‍💻 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📬 Suporte

Se tiver dúvidas ou encontrar problemas, abra uma issue no repositório.

---


