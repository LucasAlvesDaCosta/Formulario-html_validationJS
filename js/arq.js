var content = document.getElementsByClassName('mensagem sucesso')[0];
var content2 = document.getElementsByClassName('mensagem erro')[0];

var conteudo;
let conteudo2;
let conteudo3;
let conteudo4;

document.getElementsByClassName('close')[0].addEventListener('click', function () {
    content.style.display = "none";
});
document.getElementsByClassName('close')[1].addEventListener('click', function () {
    content2.style.display = "none";
});

document.getElementById("send").addEventListener("click", function(event){
    event.preventDefault()
});

function valida_form() {
    content.style.display = "none";
    content2.style.display = "none";
    var valida = true;
    var cont =0;

    if (document.getElementById("inputnome").value == "") {
        conteudo = document.getElementById("inputnome");
        conteudo.classList.add("erroValidacao");
        document.getElementById("inputnome").focus();
        content2.style.display = "block";
        valida = false;
        cont ++;
    }
    if (document.getElementById("inputsobrenome").value == "") {
        conteudo2 = document.getElementById("inputsobrenome");
        conteudo2.classList.add("erroValidacao");
        content2.style.display = "block";
        valida = false;
        cont ++;
        document.getElementById("inputsobrenome").focus();

    }
    if (document.getElementById("inputtelefone").value == "" || isNaN(document.getElementById("inputtelefone").value)|| document.getElementById("inputtelefone").value.length > 11) {
        conteudo3 = document.getElementById("inputtelefone");

        if (isNaN(document.getElementById("inputtelefone").value) || document.getElementById("inputtelefone").value.length > 11 && document.getElementById("inputtelefone").value ==! "") {
            alert("Telefone inválido!\n 1- Use apenas numeros.\n 2- O numero de telefone deve ter no máximo 11 digitos.");
            conteudo3.classList.add("erroValidacao");
            valida = false;
            cont ++;
        } else {
            conteudo3.classList.add("erroValidacao");
            content2.style.display = "block";
            content.style.display = "none";
            valida = false;
            cont ++;
        }

        document.getElementById("inputtelefone").focus();
    }
    if (document.getElementById("inputemail").value == "") {
        conteudo4 = document.getElementById('inputemail');
        conteudo4.classList.add("erroValidacao");
        content2.style.display = "block";
        content.style.display = "none";
        document.getElementById('inputemail').focus();
        document.getElementById("inputemail").type="email";
        valida = false;   
        cont ++;
    }
    if (valida) {
        content.style.display = "block";
        content2.style.display = "none";
        var form = document.getElementsByTagName("form")[0];
        form.reset();
        cont =0;
        
        document.getElementById("inputnome").classList.remove("erroValidacao");
        document.getElementById("inputsobrenome").classList.remove("erroValidacao");
        document.getElementById("inputtelefone").classList.remove("erroValidacao");
        document.getElementById("inputemail").classList.remove("erroValidacao");
    } else {
           if(cont >= 4){
               // caso os quatro campos apresentem erro coloco o focus no primeiro campo
               document.getElementById("inputnome").focus();
               cont =0;
           }
           
    }
}