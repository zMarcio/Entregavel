var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get("/",function(req,res){
  res.send("Olá mundo!")
})
//Sends com funções matematica
app.post('/soma', function (req, res) {
  var body = req.body;
  var resultado = soma(body.a, body.b);
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});
app.post('/sub', function (req, res) {
  var body = req.body;
  var resultado = subtracao(body.a, body.b);
  res.send(`O resultado da subtraçao de ${body.a} e ${body.b} é ${resultado}`);
});
app.post('/mult', function (req, res) {
  var body = req.body;
  var resultado = mult(body.a, body.b);
  res.send(`O resultado da multiplicaçao de ${body.a} e ${body.b} é ${resultado}`);
});
app.post('/div', function (req, res) {
  var body = req.body;
  var resultado = divisao(body.a, body.b);
  res.send(`O resultado da divisao de ${body.a} e ${body.b} é ${resultado}`);
});
//Funções matematicas
function subtracao(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function divisao(a, b) {
  return a / b;
}
function soma(a, b) {
  return a + b;
}
var port = 3008;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});