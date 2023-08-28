</head>
<body>
  <header>
    <h1>CompassUol API - Guia de Uso e Testes</h1>
    <p>Um guia prático para utilizar a API VetClinic e realizar testes usando o Insomnia.</p>
  </header>

  <div class="section">
    <h2>Configuração do Servidor</h2>
    <p>Antes de começar, certifique-se de que o servidor da API esteja em execução e ouvindo na porta correta.</p>
  </div>

  <div class="section">
    <h2>Preparação no Insomnia</h2>
    <p>Para testar a API, siga os passos abaixo:</p>
    <ol>
      <li>Abra o Insomnia ou faça o download e instalação do aplicativo se ainda não o tiver.</li>
      <li>Crie um novo workspace ou utilize um existente.</li>
      <li>Crie um novo environment (ou use o padrão) para armazenar variáveis de ambiente necessárias para as requisições.</li>
    </ol>
  </div>

<div class="section">
  <h2>Testando as Rotas</h2>
  <p>A seguir, você encontrará instruções detalhadas para testar cada rota da API CompassUol usando o Insomnia.</p>

  <div class="section">
    <h3>Cadastro de um novo Tutor (POST)</h3>
    <p><span class="method">Método:</span> <span class="endpoint">POST</span></p>
    <p>Faça uma requisição POST para a rota <code>/api/tutor</code> com o seguinte corpo:</p>
    <pre class="json">
{
  "name": "fulano de tal",
  "phone": "1234567890",
  "email": "fulanodetal@example.com",
  "date_of_birth": "1990-01-01",
  "zip_code": "12345-678",
  "pets": []
}
    </pre>
  </div>

  <div class="section">
    <h3>Atualização de um Tutor existente (PUT)</h3>
    <p><span class="method">Método:</span> <span class="endpoint">PUT</span></p>
    <p>Faça uma requisição PUT para a rota <code>/api/tutor/:id</code>, substituindo <code>:id</code> pelo ID do tutor que você deseja atualizar. No corpo da requisição, adicione os dados atualizados do tutor em formato JSON:</p>
    <pre class="json">
{
  "name": "fulano atualizado",
  "phone": "11234567890",
  "email": "atualizado@example.com"
}
    </pre>
  </div>

  <div class="section">
    <h3>Cadastro de um novo Pet associado a um Tutor (POST)</h3>
    <p><span class="method">Método:</span> <span class="endpoint">POST</span></p>
    <p>Faça uma requisição POST para a rota <code>/api/tutor/:id/pets</code>, substituindo <code>:id</code> pelo ID do tutor ao qual o pet será associado. No corpo da requisição, adicione os dados do novo pet em formato JSON:</p>
    <pre class="json">
{
  "name": "Liloww",
  "species": "dog",
  "carry": "p",
  "weight": 5,
  "date_of_birth": "2010-05-20"
}
    </pre>
  </div>

  <div class="section">
    <h3>Atualização de um Pet existente (PUT)</h3>
    <p><span class="method">Método:</span> <span class="endpoint">PUT</span></p>
    <p>Faça uma requisição PUT para a rota <code>/api/pet/:id</code>, substituindo <code>:id</code> pelo ID do pet que você deseja atualizar. No corpo da requisição, adicione os dados atualizados do pet em formato JSON:</p>
    <pre class="json">
{
  "name": "Novo Nome do Pet",
  "species": "gato",
  "carry": "m",
  "weight": 4,
  "date_of_birth": "2015-08-10"
}
    </pre>
  </div>

  <div class="section">
    <h3>Exclusão de um Tutor (DELETE)</h3>
    <p><span class="method">Método:</span> <span class="endpoint">DELETE</span></p>
    <p>Faça uma requisição DELETE para a rota <code>/api/tutor/:id</code>, substituindo <code>:id</code> pelo ID do tutor que você deseja excluir.</p>
  </div>

  <div class="section">
    <h3>Exclusão de um Pet (DELETE)</h3>
    <p><span class="method">Método:</span> <span class="endpoint">DELETE</span></p>
    <p>Faça uma requisição DELETE para a rota <code>/api/pet/:id</code>, substituindo <code>:id</code> pelo ID do pet que você deseja excluir.</p>
  </div>

  <!-- ... (outras rotas) ... -->
</div>

<!-- ... (código posterior) ... -->

  </div>

  <div class="section">
    <h2>Observações</h2>
    <p>Este guia fornece instruções básicas para testar as rotas da API. Certifique-se de ajustar as URLs, parâmetros e corpos das requisições conforme necessário.</p>
  </div>

  <footer>
    <p class="author">Adriano Dias - adriano.silva.pb@compasso.com.br</p>
  </footer>
</body>
</html>
