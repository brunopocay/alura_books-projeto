const $btn = document.querySelectorAll('.btn')
$btn.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const $elementoBtn = document.getElementById(this.id)
    const categoria = $elementoBtn.value
    const livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    
    exibirLivros(livrosFiltrados)

    if(categoria == 'disponivel'){
        const valorTotal = calcularValorTotal(livrosFiltrados)
        exibirValorTotal(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livrosComDesconto.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livrosComDesconto.filter(livro => livro.quantidade > 0)
}

function exibirValorTotal(valorTotal) {
    $elementoValorTotal.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}

