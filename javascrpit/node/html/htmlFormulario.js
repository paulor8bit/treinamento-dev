const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/form-submit') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString(); // convert Buffer to string
    });

    req.on('end', () => {
      const formData = querystring.parse(body);
      // console.log(formData); // exibe os dados do formulário no console
      console.log(formData.nome)
      res.end('Formulário enviado com sucesso!');
    });
  } else {
    // exibe um formulário HTML básico
    res.end(`
      <!doctype html>
      <html>
        <body>
          <form action="/form-submit" method="post">
            <input type="text" name="nome" placeholder="Nome" />
            <input type="email" name="email" placeholder="Email" />
            <button type="submit">Enviar</button>
          </form>
        </body>
      </html>
    `);
  }
});




server.listen(3000);
