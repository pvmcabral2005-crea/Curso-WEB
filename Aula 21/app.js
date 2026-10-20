const http = require('http');

const meuServidor = http.createServer(function (requisicao, resposta) {
    resposta.writeHead(200, { "Content-type": "text/plain; charset=utf-8" });

    if(requisicao.url=== '/') {
        resposta.end("Você está entrando na página inicial do servidor!");

    } else if(requisicao.url === '/contato') {
        resposta.end("Página de contato: contato@server.com");

    } else {
        resposta.writeHead(404, {'Content-type': 'text/plain; charset=utf-8'})
        resposta.end('Erro 404: Página não encontrada!');
    }

});
const porta = 3000;
meuServidor.listen(porta, function() {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});