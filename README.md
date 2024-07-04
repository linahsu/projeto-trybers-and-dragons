# 🐉 Boas vindas ao repositório do projeto Trybers and Dragons! 🐲

  Neste projeto, foram aplicados os princípios da arquitetura `SOLID` e os princípios de `POO` em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos `RPG` (_Role Playing Game_).

  Este projeto me ajudou a expandir e sedimentar meus conhecimentos sobre os pilares da Programação Orientada a Objetos e aos princípios SOLID. Ambos os temas são amplamente populares no mundo do desenvolvimento e nos auxiliam não só na forma de organizar código, mas também na forma de pensar e escrever códigos mais legíveis, seguros e escaláveis. 🚀

  Compreender e aplicar esses conceitos fez diferença na minha vida como pessoa programadora, especialmente na escrita de códigos de melhor qualidade e criação de aplicações de software mais fáceis de se compreender e manter ao longo do tempo, habilidades muito bem vistas no mercado de trabalho.

# Detalhes

<details>

  <summary><strong>👨‍💻 Desenvolvimento</strong></summary><br />

  O que foi desenvolvido por mim:

* classe Race
* classes que herdam a classe Race: Dwarf, Elf, Halfling e Orc
* interface Energy
* classe Archetype
* classes que herdam da classe Archetype: Mage, Necromancer, Warrior e Ranger
* interface Fighter
* classe Character
* interface SimpleFighter
* classe Monster
* classe Dragon que herda da classe Monster
* classe PVP e PVE
* Objetos instanciados no arquivo index

  Todas as outras funcionalidades e configurações foram providas pela instituição de ensino Trybe.

</details>

<details>

  <summary><strong>📝 Habilidades trabalhadas</strong></summary><br />

* O conhecimento dos pilares da Programação Orientada a Objetos: Herança, Abstração, Encapsulamento e Polimorfismo.
* A habilidade de criar e utilizar Interface;
* A habilidade de utilizar Composição;
* Implementar, em TypeScript, Classes, Instâncias, Atributos, Métodos e Objetos;
* O conhecimento e aplicação dos princípios SOLID.

</details>
<br />

# Orientações

<details>

  <summary><strong>🐋 Executando no Docker vs Localmente</strong></summary><br />

  O primeiro passo é clonar o repositório:

  - `git clone git@github.com:linahsu/projeto-trybers-and-dragons.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd projeto-trybers-and-dragons`
  
  ## Com Docker

  > Rode o serviço `node` com o comando `docker-compose up -d`.

  - Esse serviço irá inicializar um container chamado `trybers_and_dragons`.
  - A partir daqui você pode rodar o container `trybers_and_dragons` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybers_and_dragons bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`
  
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima.

  ⚠ Atenção ⚠ O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

<img src="images/remote-container.png" width="800px" >  

---
  
  ## Sem Docker
  
  > Instale as dependências com `npm install`

  ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

  <br/>
</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Foi usado o [ESLint](https://eslint.org/) para fazer a análise estática do código.

  Este projeto já vem com as dependências relacionadas ao _linter_ configuradas no arquivos `package.json`.

  Para poder rodar os `ESLint` em um projeto, basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

  Você também pode instalar o plugin do `ESLint` no `VSCode`: bastar ir em _extensions_ e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
</details>


<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  Para executar os testes localmente, digite no terminal o comando `npm test`.

</details>