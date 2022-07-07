
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const moment = require('moment')
const users = require('./model/users')
const log = require('./model/log')
const Pagamento = require('./model/pagamentos')


app.engine('handlebars', handlebars.engine({defaultLayout: __dirname + '/views/layout/main',
    helpers: {
        formatDate: (date) =>{
            return moment(date).format('DD/MM/YYYY')
        } 
    }}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('src'))


//Rotas
app.get('/',(req,res)=>{
    log.create({rota:req.url})
    res.render('home')
})

app.get('/pagamento', function(req,res){
    Pagamento.findAll({order: [['createdAt', 'ASC']]}).then(function(Pagamentos){
        res.render('pagamento', {Pagamentos, Pagamentos})
    })
     
})

app.get('/cad-pagamento', (req,res)=>{
    res.render('cad-pagamento')
})

app.get('/logs', async(req,res)=>{
    var result = await log.findAll({raw:true})
    res.send(result)
})
app.post("/add-pagamento", function(req, res){
    Pagamento.create({
        nome:req.body.nome,
        valor: req.body.valor
    }).then(function(){
        res.send("Pagamento realizado com sucesso")

    }).catch(function(erro){
        res.send(" Erro: Pagamento não realizado" +  erro)
    })
    //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor)
})

app.get('/del-pagamento/:id', function(req, res){
    Pagamento.destroy({
        where: {'id': req.params.id}
    }).then(function(){
        res.send("Pagamento apagado com Sucesso")
    }).catch(function(erro){
        res.send("Pagamento não foi apagado")
    })
})
console.log()
app.listen(8080);