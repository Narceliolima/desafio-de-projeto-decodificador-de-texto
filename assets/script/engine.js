const listaBotoes = document.querySelectorAll("button");

function criptografaTexto(){
    console.log("Criptografa o texto");
}

function descriptografaTexto(){
    console.log("Descriptografa o texto");
}

function copiaTexto(){
    console.log("Copia o texto");
}

function iniciaBotao(botao){

    if(botao.textContent==="Criptografar"){
        botao.addEventListener("click", criptografaTexto);
    }
    else if(botao.textContent==="Descriptografar"){
        botao.addEventListener("click", descriptografaTexto);
    }
    else if(botao.textContent==="Copiar"){
        botao.addEventListener("click", copiaTexto);
    }
}

function inicializaScript(){

    listaBotoes.forEach(iniciaBotao);
}

function main(){

    inicializaScript();
}
main();