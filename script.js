function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0) {
        window.alert('[Erro] Faltam dados')
    } else {
        res.innerHTML = 'Contando:'
        let i = number (ini.value)
        let f = number (fim.value)
        let p = number (passo.value)

        for(let c = i; c <= f; c +=p) {
            res.innerHTML += `${c}`
        }
    
    }
    
}
