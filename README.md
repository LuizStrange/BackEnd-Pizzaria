# Back-End da Pizzaria

Este repositório contém o código-fonte do Back-End da Pizzaria, um sistema de pedidos online para uma pizzaria fictícia. O Back-End é responsável por gerenciar as solicitações, processar os pedidos e fornecer os dados necessários para o Front-End.

## Tecnologias utilizadas

- Node.js: ambiente de execução JavaScript no lado do servidor.
- Express.js: framework web para criar APIs.
- Prisma: ORM (Object-Relational Mapping) para interagir com o banco de dados.
- Beekeeper Studio: para monitorar o banco de dados.
- PostgreSQL: para fazer gerar o banco de dados.
- JWT (JSON Web Token): para autenticação e segurança de API.

## Configuração do ambiente

1. Certifique-se de ter o Node.js instalado em seu sistema.
2. Clone este repositório em sua máquina local usando o seguinte comando:
```
git clone https://github.com/LuizStrange/BackEnd-Pizzaria.git
```
3. Instale as dependências do projeto executando o seguinte comando na raiz do projeto:
```
yarn install
```
- Caso queira usar NPM é so aplicar `npm install`
4. Configure as variáveis de ambiente:
- Crie um arquivo `.env` na raiz do projeto.
- Defina as seguintes variáveis de ambiente no arquivo `.env`:
- Baixem o PostgreSQL para você está criando seu banco de dados, logo em seguinda faça apos criação do seu banco de dados: 
  ```
  DATABASE_URL="postgresql://postgres:{SENHA}@localhost:5432/{NOMEdoBANCOdeDADOS}?schema=public"
  JWT_SECRET=<Chave secreta para geração de tokens JWT>
  ```
- Você pode gerar uma chave de JWT aqui: https://www.md5hashgenerator.com
5. Execute o seguinte comando para iniciar o servidor:
- Eu costumo usar `YARN` por ser mais rapido e tals, porém você pode usar `NPX/NPM` sem problemas.
- Comando para gerar as tabelas no banco de dados: 
```
yarn prisma init
```
- Apos isso para monitorar o banco de dados bem melhor, poderá usar o [Beekeeper Studio](https://www.beekeeperstudio.io)

## Endpoints da API
### Vale Lembrar que o projeto está com o express localizado na porta: 3333, sendo assim: http://localhost:3333

- Usei a ferramenta: `Insomnia` para essa função.

A API do Back-End da Pizzaria oferece os seguintes endpoints:

- `/users`: para cadastrar o usuario.
- `/session`: para logar o usuario, sendo assim já gerando uma token JWT para ser usado nas funções que necessitar está logado com um usuario.
### Necessitar da token JWT para poder usa as outras End-points:
- `/me`: para pega os dados do usuario logado.
- `/category`: Irá criar a categoria. (post)
- `/category`: para pegar e listar todas as categorias. (get)
- `/products`: para está criando um produto.
- `/category/products`: para está listando um produto na categoria.
- `/order`: Criando uma ORDER/ MESA.
- `/order`: Irá estar deletando uma order/mesa.
- `/order/add`: irá adicionar uma order.
- `/order/remove`: irá estar removendo uma order.
- `/order/send`: Esta enviando algo para a order ( ATUALIZANDO A ORDER ) basicamente enviando a informação que saiu de rascunho.
- `/orders`: Esta listando a orders que saiaram de rascunho.
- `/order/detail`: vai estar listando os detalhes do pedido.
- `/order/finish`: vai estar atualizando o status do pedido.
#
#### Consulte a documentação completa da API para obter mais detalhes sobre cada endpoint e seus respectivos parâmetros.
- O Arquivo `routes.ts` no projeto tem todas as informação dos ENDPOINTs.

## Projeto feito com intenção de relembrar todo o conceito de uma API utilizando o NODEJS. 
