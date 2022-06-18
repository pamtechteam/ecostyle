var numero_miniaturas = 5;
var index = 1;

function cambiarFondo(){
    if (index > numero_miniaturas) {
        index = 1;
    }
    var app_presentation = document.getElementById('app-presentacion');
    app_presentation.setAttribute('style', `
        background: 
        linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
        url('./prc/miniatura${index}.jpeg') 
        no-repeat center center fixed;
        background-size: cover;
    `);

    index++; 
}
cambiarFondo();
setInterval(cambiarFondo, 3000);
// linear-gradient(rgba(0.0.0,0.4), rgba(0.0.0,0.4))