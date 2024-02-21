const resultado = document.querySelector(".resultado");
const igual = document.querySelector(".igual");


function insert(valor){
    resultado.value += valor;
}

function clean(){
    resultado.value = ""
}

function backspace(){
    if(resultado.value !== ''){
        let result = document.getElementById('resultado').value;
        resultado.value = result.substring(0, result.length - 1);
    }
    else{

    }
}

function confirma(){
    if(resultado.value != "Erro"){
        document.getElementById('resultado').value = eval(resultado.value)
    }
}