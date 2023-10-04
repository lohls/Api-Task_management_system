# Sistema de Gerenciamento de Tarefas

## Funções Usuarios

- [X] Buscar Usuarios

- [X] Buscar somente um Usuario

- [X] Cadastrar Usuario

- [X] Atualiza os dados de um Usuario

| Método HTTP	| Endpoint | Descrição |
|--------|----------|----------|
| GET |	/users |	Retorna todos os usuarios cadastrados |
| GET |	/user/:id |	Retorna o usuario junto com todas suas tarefas relacionadas pelo ID|
| POST |	/user |	Cadastra um novo usuario |
| PUT |	/user/:id |	Atualiza as informações de um usuario existente |
| DELETE |	/user/:id |	Exclui um usuario existente pelo ID |
#

## Funções Tarefas

- [X] Buscar todas as Tarefas

- [X] Buscar somente uma Tarefa

- [X] Cadastrar Tarefas

- [X] Atualiza os dados de uma Tarefa


| Método HTTP	| Endpoint | Descrição |
|--------|----------|----------|
| GET |	/tasks |	Retorna todas as tarefas cadastradas |
| GET |	/task/:id |	Retorna uma tarefa específica junto com seu responsável relacionados pelo ID |
| POST |	/task |	Cadastra uma nova tarefa |
| PUT |	/task/:id |	Atualiza as informações de uma tarefa existente |
| DELETE |	/task/:id |	Exclui uma tarefa existente pelo ID |
#

## Algumas funcionalidades: 

- [ ]  Autenticação JWT (Json Web Token)
- [ ]  Verificação de erros


