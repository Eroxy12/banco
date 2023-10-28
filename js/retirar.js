let saldoActual = 478546;

function realizarRetiro() {
    const montoRetiroInput = document.getElementById('monto-retiro');
    const montoRetiro = parseFloat(montoRetiroInput.value);

    if (!isNaN(montoRetiro) && montoRetiro > 0) {
        if (montoRetiro <= saldoActual) {
            saldoActual -= montoRetiro;

            
            const saldoActualElement = document.getElementById('saldo-actual');
            saldoActualElement.textContent = `Saldo: $${saldoActual.toFixed(2)}`;

            
            alert(`Retiro exitoso. Nuevo saldo: $${saldoActual.toFixed(2)}`);
        } else {
            alert('El monto a retirar no puede ser mayor al saldo actual.');
        }
    } else {
        alert('Por favor, ingrese un monto válido para el retiro.');
    }

    
    montoRetiroInput.value = '';
}
