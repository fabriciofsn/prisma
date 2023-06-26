# Projeto com Prisma ORM
Este repositório contém uma aplicação construída com Prisma, um ORM (Object-Relational Mapping) moderno para bancos de dados. O Prisma oferece uma maneira fácil e intuitiva de interagir com o banco de dados, facilitando a criação, leitura, atualização e exclusão de registros.

## Requisitos
Antes de iniciar a aplicação, certifique-se de ter as seguintes dependências instaladas em seu ambiente:

Node.js (versão 14 ou superior) <br />
Prisma CLI (instalado globalmente) <br /> 
PostgreSQL (ou qualquer outro banco de dados suportado pelo Prisma) <br />
Configuração
Siga as etapas abaixo para configurar o projeto e começar a usá-lo: <br />

## Clone este repositório em sua máquina local: <br />
git clone https://github.com/fabriciofsn/prisma.git <br />
Navegue até o diretório do projeto: <br />
cd prisma <br />
Instale as dependências necessárias: <br />
npm install <br />
Configure as variáveis de ambiente: <br />
Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis: <br />

DATABASE_URL=postgresql://user:password@localhost:5432/database<br />
Substitua user, password e database pelas informações correspondentes ao seu banco de dados PostgreSQL.<br />

## Execute as migrações do Prisma: <br />
npx prisma migrate dev<br />
Isso criará as tabelas necessárias no banco de dados com base nos modelos definidos no diretório prisma/schema.prisma.<br />

## Inicie a aplicação: <br />
npm start<br />
Agora você pode acessar a aplicação em http://localhost:3000.<br />

Uso
A aplicação neste repositório é apenas um exemplo básico para demonstrar o uso do Prisma. Você pode explorar os diferentes arquivos e diretórios para entender como o Prisma é utilizado para interagir com o banco de dados.

Além disso, sinta-se à vontade para modificar e expandir a aplicação de acordo com suas necessidades.

## Contribuição
Se você quiser contribuir para este projeto, siga as etapas abaixo:<br />

Faça um fork deste repositório e clone-o em sua máquina local.<br />
Crie uma branch para sua nova funcionalidade ou correção de bug:<br />

git checkout -b minha-nova-funcionalidade<br />
Faça as alterações necessárias e adicione-as ao índice:<br />

git add .<br />
Faça um commit das suas alterações:<br />

git commit -m "Adicionando nova funcionalidade"<br />
Faça um push para o seu fork:<br />

git push origin minha-nova-funcionalidade<br />
Abra um pull request neste repositório.<br />
Será um prazer revisar suas contribuições e incorporá-las ao projeto!<br />
