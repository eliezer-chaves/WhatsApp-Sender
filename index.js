    function enviarMensagem(){
        var ddd = String(document.getElementById('ddd').value);
        var telefone = String(document.getElementById('telefone').value);
        var mensagem = String(document.getElementById('floatingTextarea').value); 
        var texto = String(mensagem.split(' ').join('%20'))
        var phoneNumber = ddd + telefone;
        
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
function validaInput(){
    return charCode >= 48 && charCode <= 57
}
function telefone_validation(telefone) {
    //retira todos os caracteres menos os numeros
    telefone = telefone.replace(/\D/g, '');

    //verifica se tem a qtde de numero correto
    if (!(telefone.length >= 10 && telefone.length <= 11)) return false;

    //Se tiver 11 caracteres, verificar se começa com 9 o celular
    if (telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9) return false;

    //verifica se não é nenhum numero digitado errado (propositalmente)
    for (var n = 0; n < 10; n++) {
        //um for de 0 a 9.
        //estou utilizando o metodo Array(q+1).join(n) onde "q" é a quantidade e n é o
        //caractere a ser repetido
        if (telefone == new Array(11).join(n) || telefone == new Array(12).join(n)) return false;
    }
    //DDDs validos
    var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
        21, 22, 24, 27, 28, 31, 32, 33, 34,
        35, 37, 38, 41, 42, 43, 44, 45, 46,
        47, 48, 49, 51, 53, 54, 55, 61, 62,
        64, 63, 65, 66, 67, 68, 69, 71, 73,
        74, 75, 77, 79, 81, 82, 83, 84, 85,
        86, 87, 88, 89, 91, 92, 93, 94, 95,
        96, 97, 98, 99];
    //verifica se o DDD é valido (sim, da pra verificar rsrsrs)
    if (codigosDDD.indexOf(parseInt(telefone.substring(0, 2))) == -1) return false;

    //  E por ultimo verificar se o numero é realmente válido. Até 2016 um celular pode
    //ter 8 caracteres, após isso somente numeros de telefone e radios (ex. Nextel)
    //vão poder ter numeros de 8 digitos (fora o DDD), então esta função ficará inativa
    //até o fim de 2016, e se a ANATEL realmente cumprir o combinado, os numeros serão
    //validados corretamente após esse período.
    //NÃO ADICIONEI A VALIDAÇÂO DE QUAIS ESTADOS TEM NONO DIGITO, PQ DEPOIS DE 2016 ISSO NÃO FARÁ DIFERENÇA
    //Não se preocupe, o código irá ativar e desativar esta opção automaticamente.
    //Caso queira, em 2017, é só tirar o if.
    if (new Date().getFullYear() < 2017) return true;
    if (telefone.length == 10 && [2, 3, 4, 5, 7].indexOf(parseInt(telefone.substring(2, 3))) == -1) return false;
    
    // Implementando regex a função
    var regex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$'); 
    if (regex.test(telefone) == false) return false;

    //se passar por todas as validações acima, então está tudo certo
    return true;
    //https://gist.github.com/jonathangoncalves/7bdec924e9bd2bdf353d6b7520820b62 --- créditos
}