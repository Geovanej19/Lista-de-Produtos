'use strict'

import produtos from "./produtos.json" with { type: "json" }

// Seleciona o container
const container = document.getElementById('container-produtos')

// 🔢 Gerar estrelas (★ ☆)
function gerarEstrelas(classificacao) {
    let estrelas = ''

    for (let i = 1; i <= 5; i++) {
        estrelas += i <= classificacao ? '★' : '☆'
    }

    return estrelas
}

// 💰 Formatar preço em R$
function formatarPreco(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}

// 🎨 Definir cor da categoria
function getClasseCategoria(categoria) {
    const cat = categoria.toLowerCase()

    if (cat.includes('informática')) return 'informatica'
    if (cat.includes('eletrônicos')) return 'eletronicos'

    return ''
}

// 🧱 Criar card
function criarCard(produto) {

    const card = document.createElement('div')
    card.className = `card ${getClasseCategoria(produto.categoria)}`

    card.innerHTML = `
        <img src="img/${produto.imagem}" alt="${produto.nome}">

        <div class="card-content">
            <h2 class="card-title">${produto.nome}</h2>
            <p class="card-description">${produto.descricao}</p>

            <p class="card-price">${formatarPreco(produto.preco)}</p>

            <p class="card-category">${produto.categoria}</p>

            <p class="card-stars">${gerarEstrelas(produto.classificacao)}</p>
        </div>
    `

    return card
}

// 🚀 Renderizar produtos
function renderizarProdutos(lista) {
    const cards = lista.map(criarCard)
    container.replaceChildren(...cards)
}

// ▶️ Inicializar
function init() {
    renderizarProdutos(produtos)
}

// Executa ao carregar
init()