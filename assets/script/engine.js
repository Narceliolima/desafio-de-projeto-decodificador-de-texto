/**
 * Pessoal tenho que adquirir o costume de comentar código. u.u
 * Pretendo comentar mas por enquanto vou ficar devendo...
 */

const listaCaracteresCodificados = {a:"ai", e:"enter" , i:"imes" ,o:"ober" ,u:"ufat"}
const listaBotoes = document.querySelectorAll("button");

function imprimeTexto(texto){
    document.querySelector(".interface-decodificador-imprimir-sem-mensagens").style.display = "none";
    document.querySelector("#saida-texto").value = texto;
}

function criptografaTexto(texto){

    const textoCriptografado = texto.replaceAll(/a|e|i|o|u/gi, (texto) => {
        return listaCaracteresCodificados[texto];
    });

    return textoCriptografado;
}

function descriptografaTexto(texto){

    const textoDescriptografado = texto.replaceAll(/ai|enter|imes|ober|ufat/gi, (texto) => {
        const keyIndex = Object.values(listaCaracteresCodificados).indexOf(texto);
        return Object.keys(listaCaracteresCodificados)[keyIndex];
    });

    return textoDescriptografado;
}

function copiaTexto(){
    const areaTextoSaida = document.querySelector("#saida-texto");
    const texto = areaTextoSaida.value;

    navigator.clipboard.writeText(texto);
}

function acionaCriDecri(acao){
    const areaTextoEntrada = document.querySelector("#entrada-texto");
    const texto = areaTextoEntrada.value;
    let textoModificado = "";

    areaTextoEntrada.value = "";

    if(acao.srcElement.textContent==="Criptografar"){
        textoModificado = criptografaTexto(texto);
    }
    else if(acao.srcElement.textContent==="Descriptografar"){
        textoModificado = descriptografaTexto(texto);
    }

    imprimeTexto(textoModificado);
}

function iniciaBotao(botao){

    if(botao.textContent==="Copiar"){
        botao.addEventListener("click", copiaTexto);
    }
    else{
        botao.addEventListener("click", acionaCriDecri);
    }
}

function inicializaScript(){

    listaBotoes.forEach(iniciaBotao);
}

function main(){

    inicializaScript();
}
main();