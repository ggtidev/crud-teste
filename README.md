
# Processo Seletivo 


## Instalando o Ambiente do Banco de Dados

1. Instale o Docker: https://www.docker.com, após isso, rode o arquivo do conteiner Docker na pasta Database com o comando: 

```bash
  # cd Database
  # docker-compose up -d
```

2. Instale o DBeaver: https://dbeaver.io/download/, e crie uma conexão com o MySql do Docker no caminho: localhost:3306, junto com o login e a senha que você criou no Docker Compose, 

3. Após instabelecida a conxão crie o banco de dados **hospital**.

4. Rode o script que esta no arquivo **database.sql** no DBeaver.

## Instalando o Ambiente do PHP

5. Instale o Xamp: https://www.apachefriends.org/pt_br/index.html inicie o apache.

6. Mova os arquivos que esta na pasta API para a pasta htdocs, normalmente no windowns fica nessa pasta:

```bash
  C:\xampp\htdocs
```

## Rodando o Front end
7. Instale o nvm windowns https://github.com/coreybutler/nvm-windows/releases 

8. Instale o node na versão do projeto 
```bash
  # nvm install 20.17.0 
  # nvm use 20.17.0 
```

9. Instale o Angular CLI 
```bash
  # npm install -g @angular/cli@17 
```

10. Apos instalar o angular, rode os comando na pasta **crud-teste**
```bash
  # npm i 
  # ng serve
```
    
## Stack utilizada

**Front-end:** Angular

**Back-end:** PHP, Xamp

**Back-end:** Docker, MySql

## Ferramentas Utilizadas:

**Front-end:** VsCode

**Back-end:** Postman

**Back-end:** DBeaver