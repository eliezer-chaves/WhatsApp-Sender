function enviar(){
    var ddd = document.getElementById('ddd').value;
    var telefone = document.getElementById('telefone').value;
    var mensagem = document.getElementById('floatingTextarea').value;

    var url = "https://api.whatsapp.com/send?phone=+55" + ddd + telefone + "&text=" + mensagem
    console.log(url)
    console.log(ddd)
    console.log(telefone)
    console.log(mensagem)
    window.open(url, '_blank')
}


