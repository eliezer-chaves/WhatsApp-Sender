    function enviarMensagem(){
        var ddd = String(document.getElementById('ddd').value);
        var telefone = String(document.getElementById('telefone').value);
        var mensagem = String(document.getElementById('floatingTextarea').value); 
        var texto = String(mensagem.split(' ').join('%20'))
        var phoneNumber = ddd + telefone;

        console.log(`Telefone: ${phoneNumber}`)

        console.log(`DDD: ${ddd}; Telefone: ${telefone}; Mensagem: ${texto}`)
        
        if (ddd == ''){
            alert("Informe o DDD!");
            document.getElementById('ddd').focus();
            return;
        }
        if (telefone == ''){
            alert("Informe o número de telefone!");
            document.getElementById('telefone').focus();
            return;
        }

        if (validatePhone(phoneNumber)){
            var url = "https://wa.me/+55"+ phoneNumber + "?text="+ texto;
            document.getElementById('ddd').style.borderColor = "#128C7E";
            document.getElementById('telefone').style.borderColor = "#128C7E";
            window.open(url);
            limpaCampos();
        }
        else {
            if (ddd.length != 2){
                alert("Insira um DDD válido!");
                document.getElementById('ddd').focus();
                ddd.value = "";
                return;
            }
            if (telefone.length != 9){
                alert("Insira um número de telefone válido!");
                document.getElementById('telefone').focus();
                return;
            }
            else{
                alert("Insira um número de telefone válido!");
                document.getElementById('telefone').focus();
                telefone.value = "";
                return;
            }
        }
}
function validatePhone (phone) { 
    var regex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$'); 
    return regex.test(phone); 
} 
function limpaCampos(){
    ddd.value = "";
    telefone.value = "";
    mensagem.value = "";
}
function setFocus(){
    document.getElementById('ddd').focus();
}