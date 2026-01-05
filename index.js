// importando o modulo fylesistem do Node que permite
// ler e escrever arquivos
const fs = require('fs');
const express = require('express');


//cria o objeto app usando express
const app = express();
//configurando o app para executar em JSON
app.use(express.json());

//este dominia rodara na porta  3000
const PORT = 3000;

// Ler as tarefas do arquivo
// 
const arquivo = './tarefas.json';

function lerTarefas(){
    const dados = fs.readFileSync(arquivo, 'utf-8'); // le as coisas como texto
    return JSON.parse(dados); // transforma de texto do json para array de objetos
}

// Salvar tarefas no arquivo
// 
function salvarTarefas(tarefas){
    fs.writeFileSync(arquivo, JSON.stringify(tarefas, null, 2));
    // JSON.strinfy transforma array de texto em texto JSON, null e 2 deixam formatadinho
}

// Listar as tarefas
// substituimos nosso array antigo pelo arquivo:
app.get('/tarefas', (req, res) =>{
    const tarefas = lerTarefas();//pega do arquivo
    res.json(tarefas);//retorna como json
});




// Adicionando as Tarefas...
// "post" metodo HTTP para criar dados....
// "/tarefas" -> rota para adicionar as tarefas
// "req e res" -> req recebe; res envia as respostas 
app.post('/tarefas', (req, res) => {
    const {nome} = req.body; //pega o nome enviado pelo cliente

    if(!nome){
        return res.status(400).json({erro: 'O campo nome é obrigatorio'});
    }

    const tarefas = lerTarefas();// pega tarefas atuais
    const novaTarefa = {
        id: tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1, // gera id...
        nome,
        status: 'pendente'
    };

    tarefas.push(novaTarefa); //adiciona nova tarefa
    salvarTarefas(tarefas); //salvar no arquivo 

    res.status(201).json(novaTarefa); // retorna tarefa criada

});

app.put('/tarefas/:id', (req, res) =>{

    const id = Number(req.params.id);
    const {status, nome} = req.body;

    const tarefas = lerTarefas();

    const tarefa = tarefas.find(t => t.id === id);

    if(!tarefa){
        return res.status(404).json({erro: 'Tarefa não encontrada'});
    }

    // regra de negocios simples 
    if(status && !['pendente','concluida'].includes(status)){
        return res.status(400).json({erro: 'Status invalido'});
    }

    if(nome){
        tarefa.nome = nome;
    }

    if(status){
        tarefa.status = status;
    }


    salvarTarefas(tarefas);
    res.json(tarefa);

});

app.delete('/tarefas/i:d', (req, res) =>{

    const id = Number(req.params.id);

    const tarefas = lerTarefas();
    const index = tarefas.findIndex(t => t.id === id);

    if (index == -1){
        return res.status(404).json({erro: 'Tarefa nãp encontrada'});
    }

    const tarefaRemovida = tarefas.splice(index, 1);

    salvarTarefas(tarefas);

    res.json(tarefaRemovida[0]);

});

// Importantissimo isso aqui pra rodar seu server
//
// "app" =  sevido express criado la em cima...
// ".listen" = Metodo do objeto app que inicia o servidor
// "() => {....}" -> funcao callback, arrow function que executa quando o servidor 
// está pronto...
//
// 
app.listen(PORT, () =>{
    (`Servidor rodando em http://localhost:${PORT}/tarefas`);
});