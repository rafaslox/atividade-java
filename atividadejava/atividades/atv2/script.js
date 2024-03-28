document.addEventListener('DOMContentLoaded', function() {
    const alunoForm = document.getElementById('alunoForm');
    const resultadoElement = document.getElementById('resultado');

    alunoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(alunoForm);
        const aluno = {
            codigo: formData.get('codigo'),
            nome: formData.get('nome'),
            telefone: formData.get('telefone'),
            mail: formData.get('mail')
        };

        resultadoElement.innerHTML = `
            <hr>
            <p><strong>Código:</strong> ${aluno.codigo}</p>
            <p><strong>Nome:</strong> ${aluno.nome}</p>
            <p><strong>Telefone:</strong> ${aluno.telefone}</p>
            <p><strong>E-mail:</strong> ${aluno.mail}</p>
            <hr>
        `;
        
        alunoForm.reset();
    });
});
