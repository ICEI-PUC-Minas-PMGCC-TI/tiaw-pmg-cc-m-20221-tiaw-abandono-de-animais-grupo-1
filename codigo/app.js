// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Leonardo Cabral",
            "pet": "Babão",
            "categoria": "Cachorro",
            "email": "leo.cabral.bh@gmail.com",
            "telefone": "31-99537-0230",
            "idade": "5",
            "raça": "Golden",
            "foto": "https://i.pinimg.com/474x/46/94/71/469471baeb89f12e5103cd614c7a684b.jpg"
        },
        {
            "id": 2,
            "nome": "Cláudio Dutra",
            "pet": "George",
            "categoria": "Coelho",
            "email": "claudin14@gmail.tv",
            "telefone": "31-98475-0330",
            "idade": "3",
            "raça": "Angorá",
            "foto": "https://www.educolorir.com/foto-cachorro-filhote-dm19542.jpg"
        },
        {
            "id": 3,
            "nome": "Sérgio Pereira",
            "pet": "Bella",
            "categoria": "Cachorro",
            "email": "sergio89@yahoo.com",
            "telefone": "31-99564-3201",
            "idade": "2",
            "raça": "Yorkshire",
            "foto": "https://i.pinimg.com/474x/46/94/71/469471baeb89f12e5103cd614c7a684b.jpg"
        },
        {
            "id": 4,
            "nome": "Mario Pereira",
            "pet": "Estela",
            "categoria": "Gato",
            "email": "mario.pereira@yahoo.com",
            "telefone": "31-99564-9999",
            "idade": "2",
            "raça": "Siamês",
            "foto": "https://www.racoesreis.com.br/wordpress/wp-content/uploads/gato-origem.jpg"
        }


    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "telefone": contato.telefone,
        "pet" : contato.pet,
        "categoria": contato.categoria,
        "idade": contato.idade,
        "raça": contato.raça,
        "foto": contato.foto
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].pet = contato.pet,
    db.data[index].categoria = contato.categoria,
    db.data[index].idade = contato.idade,
    db.data[index].raça = contato.raça,
    db.data[index].foto = contato.foto

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}