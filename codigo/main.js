var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Associação Dos Amigos",
            "cidade": "Juiz de fora",
            "instagram": "https://www.instagram.com/aban_associacaodosamigos/",
            "email": "abansecretaria@gmail.com",
            "telefone": "(32) 98404-1555",
            "site": "https://www.aban.org.br/",
            "img": "https://aban.org.br/assets/images/logo.png"
        },
        {
            "id": 2,
            "nome": "Bast Adotar",
            "cidade": "Belo Horizonte",
            "instagram": "https://www.instagram.com/bast.adotar/?hl=pt-br",
            "email": "contato@bastadotar.org",
            "telefone": "(31) 3511-8538",
            "site": "https://bastadotar.org/",
            "img": "https://bastadotar.org/wp-content/uploads/2020/07/empresarial-bg.png"
        },
        {
            "id": 3,
            "nome": "Focinhos de Luz",
            "cidade": "Rio de Janeiro",
            "instagram": "https://www.instagram.com/focinhosdeluz/?hl=pt-br",
            "email": "contato@focinhosdeluz.com",
            "telefone": "(21) 2989-3549",
            "site": "https://www.focinhosdeluz.com/",
            "img": "https://www.focinhosdeluz.com/wp-content/themes/tema-principal/assets/imagens/logo-focinhos-de-luz-3.png"
        },
        {
            "id": 4,
            "nome": "Toca Segura",
            "cidade": "Brasília",
            "instagram": "https://www.instagram.com/tocasegura/",
            "email": "ongtocasegura@gmail.com",
            "telefone": "(61) 2285-6037",
            "site": "https://tocasegura.ong.br/",
            "img": "https://tocasegura.ong.br/wp-content/uploads/2020/08/cropped-TOCA-SEGURA-Logo-sem-fundo-arcos-brancos.png"
        },
        {
            "id": 5,
            "nome": "Instituto Eu Sou o Bicho",
            "cidade": "São Paulo",
            "instagram": "https://www.instagram.com/institutoeusouobicho/",
            "email": "contato@institutoeusouobicho.org.br",
            "telefone": "(11) 2148-4942",
            "site": "https://institutoeusouobicho.org.br/",
            "img": "https://institutoeusouobicho.org.br/wp-content/themes/IESOB/images/logo.png"
        },
        {
            "id": 6,
            "nome": "Instituto Hope",
            "cidade": "Natal",
            "instagram": "https://www.instagram.com/institutohopern/",
            "email": "contato@institutohope.org.br",
            "telefone": "(84) 3434-6980",
            "site": "https://institutohopern.parceiropetz.com.br/",
            "img": "https://scontent.fplu4-1.fna.fbcdn.net/v/t1.18169-9/24294440_1626812520713607_4465678702677184253_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFbg961hQwbjf92Klfvvp-OD4hNR-Ut6jIPiE1H5S3qMhKI6w3G7rJXgI6g2naEzAFkw4OD-z3sm0eYHbMiHwAf&_nc_ohc=PMgqankkjs0AX9VKqby&_nc_ht=scontent.fplu4-1.fna&oh=00_AT9kQjdCwpP33uheEcnskQ_JbLNfOvkYap6mFsWf-KwXIA&oe=62CA81F9"
        },
        {
            "id": 7,
            "nome": "Amo Bicho",
            "cidade": "Ribeirão Preto",
            "instagram": "https://www.instagram.com/_amobicho/",
            "email": "adote@amobicho.ong.br",
            "telefone": "(16) 2743-7527",
            "site": "https://www.amobicho.ong.br/",
            "img": "https://www.amobicho.ong.br/images/amobicho-logo.svg"
        },
        {
            "id": 8,
            "nome": "Sos Pet Alpha",
            "cidade": "São Paulo",
            "instagram": "https://www.instagram.com/sospetalpha/?hl=pt-br",
            "email": "contatosos@sospetalpha.com.br",
            "telefone": "(11) 2606-0189",
            "site": "https://sospetalpha.com.br/",
            "img": "https://sospetalpha.com.br/wp-content/uploads/2019/06/cropped-logo_SOS_semponto-1.jpg"
        },
    ]
}

const container = document.querySelector('#containerCard');

let card = ``;
const cards = db_contatos_inicial.data.map(e => {
    card = `<div class="col-12 col-sm-12 col-md-6 col-lg-3">

        <div class="my-card">
        <div class="card-img--container">
            <img src="${e.img}"
                class="img_pet" alt="Imagem ONG">
        </div>
        <div class="card-body">
            <p class="card-text"><strong>ONG: ${e.nome}</strong></p>
            <p class="card-city">Cidade: ${e.cidade}</p>
            <a class="social" target="_blank" href="${e.instagram}">Instagram</a>
            <p class="complemento">Email: ${e.email}</p>
            <p class="card-tell">Telefone: ${e.telefone}</p>
            <a href="${e.site}" target="_blank" type="submit" class="col-12 btn_pet card-link">Site</a>
        </div>
        </div>
    </div>`

    return card;
});
console.log(cards);
container.innerHTML = cards.join('');
console.log(db_contatos_inicial);