document.addEventListener('DOMContentLoaded', function() {
    const calcularBtn = document.getElementById('calcularBtn');
    calcularBtn.addEventListener('click', function() {
        const horasNormais = parseFloat(document.getElementById('horasNormais').value);
        let horasExtras = parseFloat(document.getElementById('horasExtras').value);
        const resultadoElement = document.getElementById('resultado');

        const hora = 10.00;
        const horaExtra = 15.00;

        if (horasExtras < 0) {
            horasExtras = 0; // Define horasExtras como 0 se for um número negativo
        }

        const valorHorasNormais = horasNormais * hora;
        const valorHorasExtras = horasExtras * horaExtra;
        const totalGanho = valorHorasNormais + valorHorasExtras;
        const poupanca = totalGanho * 0.08;

        resultadoElement.innerHTML = `
            <hr>
            <p>Valor de horas normais: R$ ${valorHorasNormais.toFixed(2)}</p>
            <p>Valor de horas extras: R$ ${valorHorasExtras.toFixed(2)}</p>
            <p>Total de ganho no ano: R$ ${totalGanho.toFixed(2)}</p>
            <p>Valor a guardar na poupança: R$ ${poupanca.toFixed(2)}</p>
            <hr>
        `;
    });
});
