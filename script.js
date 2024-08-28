// Seleciona os elementos
const textArea = document.querySelector(".test-area");
const mensagem = document.querySelector(".mensagem");
const btnCopiar = document.querySelector('.btn-copiar');

// Função para encriptar o texto
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);  // Encripta o texto
    mensagem.value = textoEncriptado;  // Coloca o texto encriptado na área de mensagem
    textArea.value = "";  // Limpa a área de texto original
}

// Função que aplica a criptografia
function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["e", "enter"], 
        ["i", "imes"], 
        ["a", "ai"], 
        ["o", "ober"], 
        ["u", "ufat"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();  // Converte para minúsculas

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

// Função para desencriptar o texto
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);  // Desencripta o texto
    mensagem.value = textoDesencriptado;  // Coloca o texto desencriptado na área de mensagem
    textArea.value = "";  // Limpa a área de texto original
}

// Função que reverte a criptografia
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ["e", "enter"], 
        ["i", "imes"], 
        ["a", "ai"], 
        ["o", "ober"], 
        ["u", "ufat"]
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase();  // Converte para minúsculas

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
    return stringDesencriptada;
}

// Função para copiar o texto da área de mensagem usando Clipboard API
btnCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(mensagem.value)
        .then(() => {
            console.log('Texto copiado para a área de transferência!');
        })
        .catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
});
