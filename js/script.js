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
}

function fecharDetalhes() {
    const detalhes = document.getElementById('detalhes');
    detalhes.style.display = 'none';
}