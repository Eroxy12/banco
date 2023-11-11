let balance = 1000;
let transactions = [];

function updateBalance() {
  document.getElementById('balance').innerText = balance;
}

function withdraw() {
  const amount = parseFloat(document.getElementById('amount').value);
  if (amount && amount > 0 && amount <= balance) {
    balance -= amount;
    transactions.push({ type: 'Retiro', amount, date: new Date() });
    updateBalance();
    alert(`Retiraste ${amount} USD. Nuevo saldo: ${balance} USD`);
  } else {
    alert("Cantidad no válida o saldo insuficiente");
  }
}

function checkBalance() {
  alert(`Tu saldo actual es: ${balance} USD`);
}

function deposit() {
  const amount = parseFloat(document.getElementById('amount').value);
  if (amount && amount > 0) {
    balance += amount;
    transactions.push({ type: 'Consignación', amount, date: new Date() });
    updateBalance();
    alert(`Consignaste ${amount} USD. Nuevo saldo: ${balance} USD`);
  } else {
    alert("Cantidad no válida");
  }
}

function changePassword() {
  // Aquí puedes implementar la lógica para cambiar la clave
  alert("Función Cambiar Clave aún no implementada");
}

function showTransactions() {
  let transactionHistory = "Historial de Transacciones:\n";
  transactions.forEach(transaction => {
    transactionHistory += `${transaction.type} de ${transaction.amount} USD - ${transaction.date}\n`;
  });
  alert(transactionHistory);
}

// Inicializar el saldo al cargar la página
window.onload = updateBalance;


function botonSalir() {
    window.location.href = "FORMULARIOS.html";
  }

  function botonCambiarClave() {
    window.location.href = "FORMULARIOS.html";
  }