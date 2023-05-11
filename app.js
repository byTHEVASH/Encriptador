const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){

    const textArea = document.querySelector(".text-area");
    const mensaje = document.querySelector(".mensaje");

    const textoEncriptado = encriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value="";
}

function encriptar(strinEncriptado){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    strinEncriptado = strinEncriptado.toLowerCase();

    for (let i=0;i< matrizCodigo.length; i++){
        if (strinEncriptado.includes(matrizCodigo[i][0])){
            strinEncriptado = strinEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }

    }
    return strinEncriptado;
}


function btnDesencriptar(){
    const textArea = document.querySelector(".text-area");
    const mensaje = document.querySelector(".mensaje");

    const textoEncriptado = desEncriptar(textArea.value);
    mensaje.value=textoEncriptado;
   
}


function desEncriptar(strinDesencriptado){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    strinDesencriptado = strinDesencriptado.toLowerCase();

    for (let i=0;i< matrizCodigo.length; i++){
        if (strinDesencriptado.includes(matrizCodigo[i][1])){
            strinDesencriptado = strinDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }

    }
    return strinDesencriptado;
}

function btnCopy(){
    let copy = document.querySelector(".mensaje").value;
    navigator.clipboard.writeText(copy);

}
