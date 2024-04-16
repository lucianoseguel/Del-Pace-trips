//IDIOMAS

/* 
Español = 0
Portugues = 1
Ingles = 2
*/




function portuguese(){

    

    var titulo = document.querySelector('#titulo')
    titulo.textContent = 'Passeios, Visitas, Degustações'

    var packs = document.querySelector('#packs')
    packs.textContent = 'Pacotes com almoço'

    var titcenas = document.querySelector('#titcenas')
    titcenas.textContent = 'Jantares'

    
};

function portuguese_inicio(){

    var titulo = document.querySelector('#titulo')
    titulo.textContent = 'TRANSFER PRIVADO EM MENDOZA'


    var primertitulo = document.querySelector('#primertitulo')
    primertitulo.textContent = 'Viagens e passeios privados em Mendoza'

    var objh2 = document.querySelector('#objh2')
    objh2.textContent = 'Nosso objetivo'

    var objetivo = document.querySelector('#objetivo')
    objetivo.textContent = 'Da "Del Pace Trips Mendoza" oferecemos os melhores passeios privados pelo província de Mendoza estamos focados em ajudar nossos clientes a ter as melhores experiências em os pontos mais importantes da nossa província'

    var servicios = document.querySelector('#titservicios')
    servicios.textContent = 'Serviços'

    var box1 = document.querySelector('#box1')
    box1.textContent = 'Vinícolas e visitas'

    var inicio = document.querySelector('#inicio')
    inicio.textContent = 'Começars'
    
    var contacto = document.querySelector('#contacto')
    contacto.textContent = 'Contato'

    var servicios = document.querySelector('#servicios')
    servicios.textContent = 'Serviços'


};


idioma = document.getElementById('idioma').textContent = idioma;


if (window.location.pathname == '/index.html' && idioma == 1){

    portuguese_inicio();
    
    } 

if  (window.location.pathname == '/bodegas.html' && idioma == 1)
    {
        portuguese_bodega();
    }



