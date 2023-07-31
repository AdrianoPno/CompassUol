# CompassUol


Tutores e Pets - Instruções para Teste
Este é um microserviço desenvolvido para gerenciar tutores e seus respectivos pets. Abaixo estão as instruções para testar as rotas deste microserviço usando o aplicativo Insomnia:

Configuração do Servidor
Certifique-se de que o servidor esteja sendo executado corretamente. Verifique se ele está ouvindo na porta 3000, conforme definido no arquivo app.ts.

Preparação no Insomnia
Abra o Insomnia ou faça o download e instalação do aplicativo, caso ainda não o tenha.

Crie um novo workspace no Insomnia ou utilize um workspace existente.

Crie um novo environment (ou utilize o environment padrão) para guardar as variáveis de ambiente necessárias para fazer as requisições.

Testando as Rotas

a) Cadastro de um novo Tutor (POST):
Faça uma requisição POST para a rota /api/tutor.
No corpo da requisição, adicione os dados do novo tutor em formato JSON. Exemplo:
json
Copy code
POST http://localhost:3000/api/tutor

Body (JSON):
{
  "name": "Fulano de Tal",
  "phone": "99999999999",
  "email": "fulano@example.com",
  "date_of_birth": "1990-01-01",
  "zip_code": "12345678"
}

b) Cadastro de um novo Pet associado a um Tutor (POST):
Faça uma requisição POST para a rota /api/pet/:tutorId, substituindo :tutorId pelo ID do tutor ao qual o pet será associado.
No corpo da requisição, adicione os dados do novo pet em formato JSON. Exemplo:
json
Copy code
POST http://localhost:3000/api/pet/1

Body (JSON):
{
  "name": "Lilo",
  "species": "dog",
  "carry": "p",
  "weight": 5,
  "date_of_birth": "2010-05-20"
}

c) Listagem de todos os Tutores (GET):
Faça uma requisição GET para a rota /api/tutors. Essa rota não requer nenhum parâmetro adicional.
json
Copy code
GET http://localhost:3000/api/tutors

d) Listagem de todos os Pets de um Tutor (GET):
Faça uma requisição GET para a rota /api/tutor/:tutorId/pets, substituindo :tutorId pelo ID do tutor cujos pets você deseja listar.
json
Copy code
GET http://localhost:3000/api/tutor/1/pets

e) Atualização de um Tutor existente (PUT):
Faça uma requisição PUT para a rota /api/tutor/:id, substituindo :id pelo ID do tutor que você deseja atualizar.
No corpo da requisição, adicione os dados atualizados do tutor em formato JSON. Exemplo:
json
Copy code
PUT http://localhost:3000/api/tutor/1

Body (JSON):
{
  "name": "Novo Nome",
  "phone": "888888888",
  "email": "novoemail@example.com"
}

f) Exclusão de um Tutor (DELETE):
Faça uma requisição DELETE para a rota /api/tutor/:id, substituindo :id pelo ID do tutor que você deseja excluir.
json
Copy code
DELETE http://localhost:3000/api/tutor/1

g) Atualização de um Pet existente (PUT):
Faça uma requisição PUT para a rota /api/pet/:petId/tutor/:tutorId, substituindo :petId pelo ID do pet que você deseja atualizar e :tutorId pelo ID do tutor ao qual o pet está associado.
No corpo da requisição, adicione os dados atualizados do pet em formato JSON. Exemplo:
json
Copy code
PUT http://localhost:3000/api/pet/1/tutor/1

Body (JSON):
{
  "name": "Novo Nome do Pet",
  "species": "gato",
  "carry": "m",
  "weight": 4,
  "date_of_birth": "2015-08-10"
}

h) Exclusão de um Pet (DELETE):
Faça uma requisição DELETE para a rota /api/pet/:petId/tutor/:tutorId, substituindo :petId` pelo ID do pet que você deseja excluir e :tutorId` pelo ID do tutor ao qual o pet está associado.

DELETE http://localhost:3000/api/pet/1/tutor/1
Certifique-se de que o pet com o ID informado existe e está associado ao tutor com o ID informado. Caso contrário, você receberá uma resposta indicando que o pet ou tutor não foram encontrados.

Execute a requisição e verifique a resposta para confirmar que o pet foi excluído com sucesso.

Lembre-se de atualizar o ambiente do Insomnia com as informações do servidor (como a URL base) e quaisquer outras variáveis necessárias para a execução das requisições.
