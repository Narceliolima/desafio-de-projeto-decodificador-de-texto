const listaCaracteresCodificados = {a:"ai", e:"enter" , i:"imes" ,o:"ober" ,u:"ufat"}
const listaBotoes = document.querySelectorAll("button");

function criptografaTexto(){
    const areaDeTextoDescodificado = document.querySelector("#entrada-texto");
    const textoDescodificado = areaDeTextoDescodificado.value;
    let textoCodificado = "";

    areaDeTextoDescodificado.value = "";

    for(let i=0; i<textoDescodificado.length; i++){
        if(textoDescodificado[i]==="a"||textoDescodificado[i]==="e"||textoDescodificado[i]==="i"||textoDescodificado[i]==="o"||textoDescodificado[i]==="u"){
            textoCodificado += listaCaracteresCodificados[textoDescodificado[i]];
        }
        else{
            textoCodificado += textoDescodificado[i];
        }
    }

    document.querySelector(".interface-decodificador-imprimir-sem-mensagens").style.display = "none";

    document.querySelector("#saida-texto").value += textoCodificado;    
}

function descriptografaTexto(){/*
    const areaDeTextoCodificado = document.querySelector("#entrada-texto");
    const textoCodificado = areaDeTextoCodificado.value;
    let textoDescodificado = "";

    areaDeTextoCodificado.value = "";

    for(let i=0; i<textoCodificado.length; i++){
        if(textoCodificado[i]==="ai"||textoCodificado[i]==="enter"||textoCodificado[i]==="imes"||textoCodificado[i]==="ober"||textoCodificado[i]==="ufat"){
            textoDescodificado += listaCaracteresCodificados[textoCodificado[i]];
        }
        else{
            textoDescodificado += textoCodificado[i];
        }
    }*/
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