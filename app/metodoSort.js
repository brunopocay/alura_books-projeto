let $btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco')

$btnOrdenarPreco.addEventListener('click', ordernarLivros)

function ordernarLivros() {
    let livrosOrdenados = livrosComDesconto.sort((a,b) => a.preco - b.preco)

    exibirLivros(livrosOrdenados)
}