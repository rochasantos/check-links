# Check links
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

<hr>

## Description of Project
This application aims to check a list of links, in a file or in several files in a directory, if they are functional. This makes it possible to update addresses of sites that are no longer responding to requests with status 200.

## Status do Projeto
> :construction: Projeto em construção :construction:

## :hammer: Funcionalidades do projeto
- `List the links in a text file`: List all links in a text file (txt, pdf, md, among others). For that, you must type the command below.
  ```
  npm run cli _file-address_
  ```
- `List the links in a diretory`: Lists all the links that are in the text files of a directory. For that, you must type the command below.
  ```
  npm run cli _diretory-address_
  ```
- `Check links in a text file`: Checks all the links that are in a text file. For that, you must type the command below.
  ```
  npm run cli:validate _file-address_
  ```
- `Check the links in a diretory`: Checks all the links that are in the text files of a directory. For that, you must type the command below.
  ```
  npm run cli:validate _diretory-address_
  ```
  
  Observation: The links should start with **http(s)**.
  
  ## Technologies used 
  - `Node.js`
