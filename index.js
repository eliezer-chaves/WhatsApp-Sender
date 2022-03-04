    function enviarMensagem(){
        var ddd = String(document.getElementById('ddd').value);
        var telefone = String(document.getElementById('telefone').value);
        var mensagem = String(document.getElementById('floatingTextarea').value); 
        var texto = String(mensagem.split(' ').join('%20'))
        
        console.log(`DDD: ${ddd}; Telefone: ${telefone}; Mensagem: ${texto}`)
        

        if (ddd == '' || telefone == ''){
            alert("Informe todos os campos");

            return;
        }
        else if (ddd.length != 2 || telefone.length != 9){
            alert("Insira valores válidos");
            return;
        }
        else {

            var url = "https://wa.me/+55"+ ddd + telefone + "?text="+ texto

            window.open(url)
            
            ddd.value = "";
            telefone.value = "";
            mensagem.value = "";
            window.alert("Verifique os valores");
            return;
        }
}