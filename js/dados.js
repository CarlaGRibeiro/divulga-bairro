const url = "./imagens/miniaturas/";


const dadosDiaDia = [
    {
        "id": 1,
        "logo": url + "16.png",
        "loja": "Padaria Pai e Filho",
        "contato": "(21) 96693-6523",
        "whats": "+5521966936523"
    },
    {
        "id": 2,
        "logo": url + "20.png",
        "loja": "Hortifruti Coqueiros",
        "contato": "(21) 97102-0299",
        "whats": "+5521971020299"
    },
    {
        "id": 3,
        "logo": url + "21.png",
        "loja": "Depósito de Bebidas Robmar",
        "contato": "(21) 98525-0644",
        "whats": "+5521985250644"
    }/*,
    {
        "id": 4,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 5,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 6,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    }*/
]

const dadosCulinariaLanchesSalgados = [
    {
        "id": 1,
        "logo": url + "11.jpg",
        "loja": "Milena Santana - Doces e Salgados",
        "contato": "(21) 99793-5764",
        "whats": "+5521997935764"
    },
    {
        "id": 2,
        "logo": url + "22.png",
        "loja": "Lanches da Milla",
        "contato": "(21) 98135-4237",
        "whats": "+5521981354237"
    },
    {
        "id": 3,
        "logo": url + "29.jpg",
        "loja": "Top Lanches",
        "contato": "(21) 99042-8931",
        "whats": "+5521990428931"
    },
    {
        "id": 4,
        "logo": url + "27.jpg",
        "loja": "Salgadinhos da Dona Graça",
        "contato": "(21) 96498-7676",
        "whats": "+5521964987676"
    }/*,
    {
        "id": 5,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 6,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },*/
]
const dadosCulinariaDoce = [
    {
        "id": 1,
        "logo": url + "1.jpg",
        "loja": "Brigs Meli",
        "contato": "(21) 97893-6950",
        "whats": "+5521978936950"
    },
    {
        "id": 2,
        "logo": url + "8.jpg",
        "loja": "Doce Eschellin Confeitaria",
        "contato": "(21) 99487-0609",
        "whats": "+5521994870609"
    },

    {
        "id": 3,
        "logo": url + "11.jpg",
        "loja": "Milena Santana - Doces e Salgados",
        "contato": "(21) 99793-5764",
        "whats": "+5521997935764"
    },
    {
        "id": 4,
        "logo": url + "24.jpg",
        "loja": "Açai da Lu",
        "contato": "(21) 98473-3967",
        "whats": "+5521984733967"
    },
    {
        "id": 5,
        "logo": url + "26.jpg",
        "loja": "G & T Delícias",
        "contato": "(21) 98772-9136",
        "whats": "+5521987729136"
    },
    {
        "id": 6,
        "logo": url + "31.jpg",
        "loja": "Janaina - Sacolé Gourmet",
        "contato": "(21) 99887-0695",
        "whats": "+5521998870695"
    },
    {
        "id": 7,
        "logo": url + "33.png",
        "loja": "Açaí e Sorvetes - Reis e Costa",
        "contato": "(21) 99625-0244",
        "whats": "+5521996250244"
    }
]



const dadosFesta = [
    {
        "id": 1,
        "logo": url + "30.jpg",
        "loja": "Xoxocolate Buquês",
        "contato": "(21) 97181-0310",
        "whats": "+5521971810310"
    },
    {
        "id": 2,
        "logo": url + "14.jpg",
        "loja": "Ki Sabor - Maça do Amor",
        "contato": "(21) 97057-7326",
        "whats": "+5521970577326"
    },
    {
        "id": 3,
        "logo": url + "15.jpg",
        "loja": "Cake Amadora",
        "contato": "(21) 98758-0021",
        "whats": "+5521987580021"
    },
    {
        "id": 4,
        "logo": url + "11.jpg",
        "loja": "Milena Santana - Doces e Salgados",
        "contato": "(21) 99793-5764",
        "whats": "+5521997935764"
    },
    {
        "id": 5,
        "logo": url + "9.jpg",
        "loja": "Brenda Ramilo Confeitaria Gourmet",
        "contato": "(21) 97150-5220",
        "whats": "+5521971505220"
    },
    {
        "id": 6,
        "logo": url + "8.jpg",
        "loja": "Doce Eschellin Confeitaria",
        "contato": "(21) 99487-0609",
        "whats": "+5521994870609"
    },
    {
        "id": 7,
        "logo": url + "32.jpg",
        "loja": "IngriD'onuts",
        "contato": "(21) 97987-3765",
        "whats": "+5521979873765"
    },
]

const dadosBeleza = [
    {
        "id": 1,
        "logo": url + "4.jpg",
        "loja": "Aninha - Cosméticos e acessórios",
        "contato": "(21) 97486-2086",
        "whats": "+5521974862086"
    },
    {
        "id": 2,
        "logo": url + "34.png",
        "loja": "Kelly Monique- Personal Trainer",
        "contato": "(21)99769-1805",
        "whats": "+5521997691805"
    }/*,
    {
        "id": 3,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 4,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 5,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 6,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    }*/
]

const dadosVestuario = [
    {
        "id": 1,
        "logo": url + "4.jpg",
        "loja": "Aninha - Cosméticos e acessórios",
        "contato": "(21) 97486-2086",
        "whats": "+5521974862086"
    }/*,
    {
        "id": 2,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 3,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 4,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 5,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 6,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },*/
]

const dadosCulinariaRefeicao = [
    {
        "id": 1,
        "logo": url + "17.png",
        "loja": "Delícias da Casa",
        "contato": "(21)98033-8459",
        "whats": "+5521980338459"
    }/*,
    {
        "id": 2,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 3,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 4,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 5,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 6,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },*/
]

const dadosArtesanato = [
    {
        "id": 1,
        "logo": url + "13.jpg",
        "loja": "Leeh - Crochet",
        "contato": "(21) 98982-5764",
        "whats": "+5521989825764"
    },
    {
        "id": 2,
        "logo": url + "5.jpg",
        "loja": "Cida Gomes - Arte com agulhas",
        "contato": "(21) 99073-4654",
        "whats": "+5521990734654"
    },
    {
        "id": 3,
        "logo": url + "19.jpg",
        "loja": "Bel ArteSuculentas",
        "contato": "(21) 97251-5570",
        "whats": "+5521972515570"
    },
    {
        "id": 4,
        "logo": url + "7.jpg",
        "loja": "Cintia Arts",
        "contato": "(21) 99221-6057",
        "whats": "+5521992216057"
    },
    {
        "id": 5,
        "logo": url + "23.png",
        "loja": "Gallileu Papelaria",
        "contato": "(21) 98547-0433",
        "whats": "+5521985470433"
    }/*,
    {
        "id": 6,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },*/

]

const dadosDigitalTech = [
    {
        "id": 1,
        "logo": url + "3.jpg",
        "loja": "Carla Ribeiro - Desenvolvimento Web",
        "contato": "(21) 98349-1846",
        "whats": "+5521983591846"
    },
    {
        "id": 2,
        "logo": url + "23.png",
        "loja": "Gallileu Serviços",
        "contato": "(21) 98547-0433",
        "whats": "+5521985470433"
    }/*,
    {
        "id": 3,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 4,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 5,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 6,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    }*/
]

const dadosEducacao = [
    {
        "id": 1,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    }/*,
    {
        "id": 2,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 3,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 4,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 5,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    },
    {
        "id": 6,
        "logo": url + "1000.png",
        "loja": "",
        "contato": "",
        "whats": "+5521983591846"
    }*/
]



for (cardDiaDia of dadosDiaDia) {
    let sessaoDiaDia = document.getElementById('segmento-dia-dia');
    let cardsDiaDia = `<div class="card">
    <img class="logo" src="${cardDiaDia.logo}"/>
    <p class="infoCard">${cardDiaDia.loja}</p>
    <div class="org-ctt">
        <a href="https://wa.me/${cardDiaDia.whats}" target="_blank"><img class="icon-wt" src="./imagens/icons/icon-whats.png">
        ${cardDiaDia.contato}</a>    
    </div>
    </div>`

    sessaoDiaDia.innerHTML += cardsDiaDia;
}


for (cardLanches of dadosCulinariaLanchesSalgados) {
    let sessaoLanches = document.getElementById('segmento-lanches-salgados');
    let cardsLanches = `<div class="card">
    <img class="logo" src="${cardLanches.logo}"/>
    <p class="infoCard">${cardLanches.loja}</p>
    <div class="org-ctt">
        <a href="https://wa.me/${cardLanches.whats}" target="_blank"><img class="icon-wt" src="./imagens/icons/icon-whats.png">
        ${cardLanches.contato}</a>    
    </div>
    </div>`

    sessaoLanches.innerHTML += cardsLanches;
}


for (cardDoces of dadosCulinariaDoce) {
    let sessaoDoces = document.getElementById('segmento-doces-confeitaria');
    let cardsDoces = `<div class="card">
    <img class="logo" src="${cardDoces.logo}"/>
    <p class="infoCard">${cardDoces.loja}</p>
    <div class="org-ctt">
         <a href="https://wa.me/${cardDoces.whats}" target="_blank"><img class="icon-wt"src="./imagens/icons/icon-whats.png">
         ${cardDoces.contato}</a>    
    </div>

    
    </div>`
    sessaoDoces.innerHTML += cardsDoces;

}

for (cardFestaDecor of dadosFesta) {
    let sessaoFestaDecor = document.getElementById('segmento-festa-decoracao');
    let cardsFestaDecor = `<div class="card">
    <img class="logo" src="${cardFestaDecor.logo}"/>
    <p class="infoCard">${cardFestaDecor.loja}</p>
    <div class="org-ctt">
         <a href="https://wa.me/${cardFestaDecor.whats}" target="_blank"><img class="icon-wt"src="./imagens/icons/icon-whats.png">
         ${cardFestaDecor.contato}</a>    
    </div>

    </div>`
    sessaoFestaDecor.innerHTML += cardsFestaDecor;
}

for (cardBeleza of dadosBeleza) {
    let sessaoBeleza = document.getElementById('segmento-beleza');
    let cardsBeleza = `<div class="card">
    <img class="logo" src="${cardBeleza.logo}"/>
    <p class="infoCard">${cardBeleza.loja}</p>
    <div class="org-ctt">
         <a href="https://wa.me/${cardBeleza.whats}" target="_blank"><img class="icon-wt"src="./imagens/icons/icon-whats.png">
         ${cardBeleza.contato}</a>    
    </div>
    </div>`
    sessaoBeleza.innerHTML += cardsBeleza;
}

for (cardVestuario of dadosVestuario) {
    let sessaoVestuario = document.getElementById('segmento-moda-vestuario');
    let cardsVestuario = `<div class="card">
    <img class="logo" src="${cardVestuario.logo}"/>
    <p class="infoCard">${cardVestuario.loja}</p>
    <div class="org-ctt">
         <a href="https://wa.me/${cardVestuario.whats}" target="_blank"><img class="icon-wt"src="./imagens/icons/icon-whats.png">
         ${cardVestuario.contato}</a>    
    </div>    
    </div>`
    sessaoVestuario.innerHTML += cardsVestuario;
}

for (cardCulinaria of dadosCulinariaRefeicao) {
    let sessaoCulinaria = document.getElementById('segmento-comida-caseira');
    let cardsCulinaria = `<div class="card">
    <img class="logo" src="${cardCulinaria.logo}"/>
    <p class="infoCard">${cardCulinaria.loja}</p>
    <div class="org-ctt">
         <a href="https://wa.me/${cardCulinaria.whats}" target="_blank"><img class="icon-wt"src="./imagens/icons/icon-whats.png">
         ${cardCulinaria.contato}</a>    
    </div>
    </div>`
    sessaoCulinaria.innerHTML += cardsCulinaria;

}


for (cardArtesanato of dadosArtesanato) {
    let sessaoArtesanato = document.getElementById('segmento-artesanato-papelaria');
    let cardsArtesanato = `<div class="card">
    <img class="logo" src="${cardArtesanato.logo}"/>
    <p class="infoCard">${cardArtesanato.loja}</p>
    <div class="org-ctt">
         <a href="https://wa.me/${cardArtesanato.whats}" target="_blank"><img class="icon-wt"src="./imagens/icons/icon-whats.png">
         ${cardArtesanato.contato}</a>    
    </div>
    </div>`
    sessaoArtesanato.innerHTML += cardsArtesanato;
}

for (cardDigitalTech of dadosDigitalTech) {
    let sessaoDigitalTech = document.getElementById('segmento-servicos-digitais');
    let cardsDigitalTech = `<div class="card">
    <img class="logo" src="${cardDigitalTech.logo}"/>
    <p class="infoCard">${cardDigitalTech.loja}</p>
    <div class="org-ctt">
         <a href="https://wa.me/${cardDigitalTech.whats}" target="_blank"><img class="icon-wt"src="./imagens/icons/icon-whats.png">
         ${cardDigitalTech.contato}</a>    
    </div>
    </div>`
    sessaoDigitalTech.innerHTML += cardsDigitalTech;

}

for (cardEnsino of dadosEducacao) {
    let sessaoEnsino = document.getElementById('segmento-educacao-ensino');
    let cardsEnsino = `<div class="card">
    <img class="logo" src="${cardEnsino.logo}"/>
    <p class="infoCard">${cardEnsino.loja}</p>
    <div class="org-ctt">
         <a href="https://wa.me/${cardEnsino.whats}" target="_blank"><img class="icon-wt"src="./imagens/icons/icon-whats.png">
         ${cardEnsino.contato}</a>    
    </div>
    </div>`
    sessaoEnsino.innerHTML += cardsEnsino;
}

const visitas = `<a href="https://www.webcontadores.com" title="contador"></a>`


