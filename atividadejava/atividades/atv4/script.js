document.addEventListener('DOMContentLoaded', function() {
    const calcularBtn = document.getElementById('calcularBtn');
    calcularBtn.addEventListener('click', function() {
        const altura = parseFloat(document.getElementById('altura').value);
        const sexo = document.getElementById('sexo').value;
        const resultadoElement = document.getElementById('resultado');
        const numPessoasElement = document.getElementById('num_pessoas');
        let numPessoas = parseInt(numPessoasElement.textContent || 0);

        if (altura > 0) {
            numPessoas++;
            let resp;
            if (sexo === 'M') {
                resp = (72.7 * altura) - 58;
            } else {
                resp = (62.1 * altura) - 44.7;
            }
            resultadoElement.textContent = `Seu peso ideal é de: ${resp.toFixed(2)} kg`;
        } else {
            resultadoElement.textContent = '';
        }

        numPessoasElement.textContent = `${numPessoas} participantes.`;
    });
});
