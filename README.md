# API NestJS - Sistema de Compras e Vendas

## 📌 Descrição
Esta API gerencia compras, vendas e produtos em um sistema de gestão comercial. Construída com **NestJS** e **TypeORM**, permite operações CRUD para compras, vendas e produtos. (Feita para um desafio na Hubbi)

---

## 🚀 Tecnologias Utilizadas
- **Node.js** (v16+ recomendado)
- **NestJS**
- **TypeORM**
- **PostgreSQL**

---

## 📦 Instalação e Execução

### 1️⃣ Clonar o repositório:
```sh
git clone https://github.com/Dags0n/desafio-hubbi-api
cd desafio-hubbi-api
```

### 2️⃣ Instalar dependências:
```sh
npm install
```

### 3️⃣ Configurar variáveis de ambiente:
Crie um arquivo **.env** na raiz do projeto e configure as credenciais do banco de dados:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=usuario
DB_PASSWORD=senha
DB_NAME=seu_banco
PORT=3000
```

### 5️⃣ Iniciar a aplicação:
```sh
npm run start
```

Para rodar no modo de desenvolvimento com hot-reload:
```sh
npm run start:dev
```

## 📌 Endpoints

### 📦 Produtos (`/produtos`)
- **`POST /produtos`** → Criar um produto
- **`GET /produtos`** → Listar produtos
- **`GET /produtos/:id`** → Buscar um produto
- **`PATCH /produtos/:id`** → Atualizar um produto
- **`DELETE /produtos/:id`** → Remover um produto

### 🛒 Compras (`/compras`)
- **`POST /compras`** → Criar uma compra
- **`GET /compras`** → Listar compras
- **`GET /compras/:id`** → Buscar uma compra
- **`PATCH /compras/:id`** → Atualizar uma compra
- **`DELETE /compras/:id`** → Remover uma compra

### 💰 Vendas (`/vendas`)
- **`POST /vendas`** → Criar uma venda
- **`GET /vendas`** → Listar vendas
- **`GET /vendas/:id`** → Buscar uma venda
- **`PATCH /vendas/:id`** → Atualizar uma venda
- **`DELETE /vendas/:id`** → Remover uma venda

**NestJS!** 🚀

