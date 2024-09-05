# Processo Seletivo

## Descrição

Bem-vindo ao repositório do projeto CRUD de profissionais de saúde. Este projeto tem como objetivo proporcionar uma experiência prática na construção de um sistema básico de CRUD utilizando Angular e Angular Material. A ideia é que você possa integrar este CRUD com uma API que você mesmo criará, utilizando serviços e requisições HTTP. Além disso, o projeto fornecerá uma oportunidade para demonstrar suas habilidades em validações de formulários.

## Como Executar o Projeto

Clone este repositório em seu ambiente local.
Instale as dependências utilizando o comando npm install. Execute o projeto com ng serve. Acesse a aplicação através do navegador no endereço http://localhost:4200.

## Funcionalidade principal

### C.R.U.D. de Profissionais de Saúde

A aplicação deve permitir a execução de operações CRUD (Criar, Ler, Atualizar, Excluir) em registros de clínicas.

## O que esperamos

- Integração do projeto com Backend (efetuar processamentos que reflitam em um banco de dados a sua escolha);
- Possibilidade de editar / excluir / criar e listar profissionais;
- Integração com um banco de dados a sua escolha;

## Conclusão

Procuramos alguém acima de tudo, capaz de solucionar problemas da forma mais criativa possível. Trazendo muita dinamicidade para o desenvolvimento.

Então, aproveite cada linha de código, celebre suas conquistas e não hesite em experimentar algo novo para deixar o processo ainda mais interessante.

E, claro, se divirta muito! Afinal, o aprendizado é uma jornada empolgante e, quem sabe, até mesmo um pouco divertida.

Te aguardamos na próxima etapa, Boa sorte 🚀😊

# Laravel Backend Setup

Este projeto é um backend desenvolvido em Laravel. Aqui estão as instruções para configurar, rodar e popular o banco de dados com migrations e seeds.

# Requisitos

## Certifique-se de que seu ambiente possui os seguintes requisitos instalados:

Docker >= 26.0.0
Docker compose >= 1.29.2
Node >= 20.10.0

# Passos para Configuração

git clone https://github.com/Iago-Bruno/crud-teste.git

# Backend

cd crud-teste
cd crud-teste-api
sudo docker-compose up -d --build

## Acessar bash do container crud-teste-api

composer install
php artisan key:generate
php artisan migrate
php artisan db:seed

## Disponivel no endereço 'http://localhost:8004'

# Frontend

## Acessar pasta raíz do projeto e instalar dependências

cd crud-teste
npm install

# Executar aplicação

ng serve
