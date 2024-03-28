document.addEventListener('DOMContentLoaded', function() {
    const calcularBtn = document.getElementById('calcularBtn');
    calcularBtn.addEventListener('click', function() {
        const horasDia1 = parseFloat(document.getElementById('dia1').value);
        const horasDia2 = parseFloat(document.getElementById('dia2').value);
        const horasDia3 = parseFloat(document.getElementById('dia3').value);
        const horasDia4 = parseFloat(document.getElementById('dia4').value);
        const horasDia5 = parseFloat(document.getElementById('dia5').value);
        const resultadoElement = document.getElementById('resultado');
        
        const mediaHorasTrabalhadas = (horasDia1 + horasDia2 + horasDia3 + horasDia4 + horasDia5) / 5;
        
        resultadoElement.textContent = `A média de horas trabalhadas é de: ${mediaHorasTrabalhadas.toFixed(1)} horas por dia.`;
    });
});
