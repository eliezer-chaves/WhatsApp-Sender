function enviarMensagem(){
    var ddd = document.getElementById('ddd').value;
    var telefone = document.getElementById('telefone').value;
    var mensagem = document.getElementById('floatingTextarea').value;
    var texto = mensagem.split(' ').join('%20')
    
    console.log(texto)

    var url = "https://api.whatsapp.com/send?phone=+55" + ddd + telefone + "&text=" + texto

    window.open(url)

    ddd.value = "";
    telefone.value = "";
    mensagem.value = "";
}


