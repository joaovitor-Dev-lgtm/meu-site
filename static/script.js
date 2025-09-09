// Este arquivo contém o código JavaScript do site. Você pode adicionar funcionalidades interativas, manipulação do DOM e outras lógicas de programação aqui.
function mostrarDetalhes(modelo, ano, cambio, combustivel) {
    const detalhes = document.getElementById('detalhes');
    detalhes.innerHTML = `
        <h3>Detalhes do carro</h3>
        <ul>
            <li><strong>Modelo:</strong> ${modelo}</li>
            <li><strong>Ano:</strong> ${ano}</li>
            <li><strong>Câmbio:</strong> ${cambio}</li>
            <li><strong>Combustível:</strong> ${combustivel}</li>
        </ul>
        <button onclick="fecharDetalhes()">Fechar</button>
    `;
    detalhes.style.display = 'block';
    detalhes.scrollIntoView({ behavior: 'smooth' });
}

function fecharDetalhes() {
    const detalhes = document.getElementById('detalhes');
    detalhes.style.display = 'none';
}
// Exemplo de função para adicionar um carro (pode ser expandida conforme necessário)
function adicionarCarro(modelo, ano, cambio, combustivel, imagem) {
    const carrosContainer = document.querySelector('.carros');
    const carroDiv = document.createElement('div');
    carroDiv.className = 'carro';
    carroDiv.innerHTML = `
        <img src="${imagem}" alt="${modelo}">
        <h3>${modelo}</h3>
        <p>Ano: ${ano}</p>
        <p>Câmbio: ${cambio}</p>
        <p>Combustível: ${combustivel}</p>
        <button onclick="mostrarDetalhes('${modelo}', '${ano}', '${cambio}', '${combustivel}')">Ver Detalhes</button>
    `;
    carrosContainer.appendChild(carroDiv);
}
