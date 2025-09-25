let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let resultado = document.getElementById('resultado')

document.getElementById('+')= function somar(){ 
    let numero1 = n1.value.trim()
    let numero2 = n2.value.trim()
    let resultados= numero1 + numero2
    resultados.innerHTML = ('Resultado', resultado)
}
