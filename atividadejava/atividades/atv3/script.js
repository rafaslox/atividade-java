document.addEventListener('DOMContentLoaded', function() {
    const verificarBtn = document.getElementById('verificarBtn');
    verificarBtn.addEventListener('click', function() {
        const age = parseInt(document.getElementById('age').value);
        const resultadoElement = document.getElementById('resultado');
        
        if (age >= 18 && age <= 65) {
            resultadoElement.textContent = 'Está compreendida entre 18 e 65 anos.';
        } else {
            resultadoElement.textContent = 'Não está compreendida entre 18 e 65 anos.';
        }
    });
});
