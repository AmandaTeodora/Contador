function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    if(inicio.value.length == 0 || fim.value.length== 0 || passo.value.lenght == 0) {
        window.alert('[Erro] Faltam dados')
    }
}
