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
<p><strong>Adriano Dias - adriano.silva.pb@compasso.com.br</strong></p>

<h1>Tutores e Pets - Instruções para Teste</h1>
<p>Este é um microserviço desenvolvido para gerenciar tutores e seus respectivos pets. Abaixo estão as instruções para testar as rotas deste microserviço usando o aplicativo Insomnia:</p>

<h2>Configuração do Servidor</h2>
<p>Certifique-se de que o servidor esteja sendo executado corretamente. Verifique se ele está ouvindo na porta 3000, conforme definido no arquivo app.ts.</p>

<h2>Preparação no Insomnia</h2>
<p>Abra o Insomnia ou faça o download e instalação do aplicativo, caso ainda não o tenha.</p>
<p>Crie um novo workspace no Insomnia ou utilize um workspace existente.</p>
<p>Crie um novo environment (ou utilize o environment padrão) para guardar as variáveis de ambiente necessárias para fazer as requisições.</p>

<h2>Testando as Rotas</h2>
<p><strong>a) Cadastro de um novo Tutor (POST):</strong></p>
<p><span style="color:green">Faça uma requisição POST para a rota <code>/api/tutor</code>. No corpo da requisição, adicione os dados do novo tutor em formato JSON.</span></p>
<pre><code><span style="color:green">POST</span> http://localhost:3000/api/tutor</code></pre>
<p>Body (JSON):</p>
<pre><code>{
  "name": "Fulano de Tal",
  "phone": "99999999999",
  "email": "fulano@example.com",
  "date_of_birth": "1990-01-01",
  "zip_code": "12345678"
}</code></pre>

<p><strong>b) Cadastro de um novo Pet associado a um Tutor (POST):</strong></p>
<p><span style="color:green">Faça uma requisição POST para a rota <code>/api/pet/:tutorId</code>, substituindo <code>:tutorId</code> pelo ID do tutor ao qual o pet será associado. No corpo da requisição, adicione os dados do novo pet em formato JSON.</span></p>
<pre><code><span style="color:green">POST</span> http://localhost:3000/api/pet/1</code></pre>
<p>Body (JSON):</p>
<pre><code>{
  "name": "Lilo",
  "species": "dog",
  "carry": "p",
  "weight": 5,
  "date_of_birth": "2010-05-20"
}</code></pre>

<p><strong>c) Listagem de todos os Tutores (GET):</strong></p>
<p><span style="color:purple">Faça uma requisição GET para a rota <code>/api/tutors</code>. Essa rota não requer nenhum parâmetro adicional.</span></p>
<pre><code><span style="color:purple">GET</span> http://localhost:3000/api/tutors</code></pre>

<p><strong>d) Listagem de todos os Pets de um Tutor (GET):</strong></p>
<p><span style="color:purple">Faça uma requisição GET para a rota <code>/api/tutor/:tutorId/pets</code>, substituindo <code>:tutorId</code> pelo ID do tutor cujos pets você deseja listar.</span></p>
<pre><code><span style="color:purple">GET</span> http://localhost:3000/api/tutor/1/pets</code></pre>

<p><strong>e) Atualização de um Tutor existente (PUT):</strong></p>
<p><span style="color:orange">Faça uma requisição PUT para a rota <code>/api/tutor/:id</code>, substituindo <code>:id</code> pelo ID do tutor que você deseja atualizar. No corpo da requisição, adicione os dados atualizados do tutor em formato JSON.</span></p>
<pre><code><span style="color:orange">PUT</span> http://localhost:3000/api/tutor/1</code></pre>
<p>Body (JSON):</p>
<pre><code>{
  "name": "Novo Nome",
  "phone": "888888888",
  "email": "novoemail@example.com"
}</code></pre>

<p><strong>f) Exclusão de um Tutor (DELETE):</strong></p>
<p><span style="color:red">Faça uma requisição DELETE para a rota <code>/api/tutor/:id</code>, substituindo <code>:id</code> pelo ID do tutor que você deseja excluir.</span></p>
<pre><code><span style="color:red">DELETE</span> http://localhost:3000/api/tutor/1</code></pre>

<p><strong>g) Atualização de um Pet existente (PUT):</strong></p>
<p><span style="color:orange">Faça uma requisição PUT para a rota <code>/api/pet/:petId/tutor/:tutorId</code>, substituindo <code>:petId</code> pelo ID do pet que você deseja atualizar e <code>:tutorId</code> pelo ID do tutor ao qual o pet está associado. No corpo da requisição, adicione os dados atualizados do pet em formato JSON.</span></p>
<pre><code><span style="color:orange">PUT</span> http://localhost:3000/api/pet/1/tutor/1</code></pre>
<p>Body (JSON):</p>
<pre><code>{
  "name": "Novo Nome do Pet",
  "species": "gato",
  "carry": "m",
  "weight": 4,
  "date_of_birth": "2015-08-10"
}</code></pre>

<p><strong>h) Exclusão de um Pet (DELETE):</strong></p>
<p><span style="color:red">Faça uma requisição DELETE para a rota <code>/api/pet/:petId/tutor/:tutorId</code>, substituindo <code>:petId</code> pelo ID do pet que você deseja excluir e <code>:tutorId</code> pelo ID do tutor ao qual o pet está associado.</span></p>
<pre><code><span style="color:red">DELETE</span> http://localhost:3000/api/pet/1/tutor/1</code></pre>
<p>Certifique-se de que o pet com o ID informado existe e está associado ao tutor com o ID informado. Caso contrário, você receberá uma resposta indicando que o pet ou tutor não foram encontrados.</p>
<p>Execute a requisição e verifique a resposta para confirmar que o pet foi excluído com sucesso.</p>

<p>Lembre-se de atualizar o ambiente do Insomnia com as informações do servidor (como a URL base) e quaisquer outras variáveis necessárias para a execução das requisições.</p>


