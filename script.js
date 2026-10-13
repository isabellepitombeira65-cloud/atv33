// Aguarda o carregamento completo do documento
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('vagaForm');
    const tabelaVagas = document.getElementById('tabelaVagas').querySelector('tbody');

    form.addEventListener('submit', function(event) {
        // Evita que a página recarregue ao submeter o formulário
        event.preventDefault();

        // Obtém os valores inseridos pelo utilizador nos campos
        const titulo = document.getElementById('titulo').value;
        const empresa = document.getElementById('empresa').value;
        const local = document.getElementById('local').value;
        const contacto = document.getElementById('contacto').value;

        // Cria um novo elemento de linha (tr) para a tabela
        const novaLinha = document.createElement('tr');

        // Insere as colunas com os dados recolhidos
        novaLinha.innerHTML = `
            <td>${titulo}</td>
            <td>${empresa}</td>
            <td>${local}</td>
            <td>${contacto}</td>
        `;

        // Adiciona a nova linha dentro da tabela de divulgação
        tabelaVagas.appendChild(novaLinha);

        // Limpa o formulário para permitir novas inserções
        form.reset();
    });
});