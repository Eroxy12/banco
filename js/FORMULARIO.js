const btnSignIn = document.getElementById("sign-in");
const btnSignUp = document.getElementById("sign-up");
const formRegister = document.querySelector(".register");
const formLogin = document.querySelector(".login");

let intentosFallidos = 0;
const maxIntentos = 3;
const contrasenaCorrecta = "miContraseñaSecreta";
const usuarios = []; //Array que se usa como base de datos para los usuarios

btnSignIn.addEventListener("click", (e) => {
  formRegister.classList.add("hide");
  formLogin.classList.remove("hide");
});

btnSignUp.addEventListener("click", (e) => {
  formLogin.classList.add("hide");
  formRegister.classList.remove("hide");
});

class Usuario {
  constructor(nombre, correo, contraseña) {
    this.nombre = nombre;
    this.correo = correo;
    this.contraseña = contraseña;
  }
}

function registrarUsuario() {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo-registro").value;
  const contrasena = document.getElementById("contraseña-registro").value;

  const usuarioExistente = usuarios.find((usuario) => usuario.correo === correo);

  if (usuarioExistente) {
    console.log("El correo ya está en uso. Por favor, elige otro.");
  } else {
    const nuevoUsuario = new Usuario(nombre, correo, contrasena);
    usuarios.push(nuevoUsuario);
    console.log("Registro exitoso. Ahora puedes iniciar sesión.");
  }
}

function iniciarSesion() {
  const correo = document.getElementById("correo-login").value;
  const contrasena = document.getElementById("contraseña-login").value;

  const usuario = usuarios.find((usuario) => usuario.correo === correo);

  if (usuario && usuario.contraseña === contrasena) {
    alert("Inicio de sesión exitoso. Bienvenido, " + usuario.nombre);
    // Redirigir a la página principal después del inicio de sesión exitoso.
    window.location.href = "Main.html";

    intentosFallidos = 0; // Restablecer el contador de intentos fallidos en caso de inicio de sesión exitoso.
  } else {
    intentosFallidos++;
    alert("Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.");

    if (intentosFallidos >= maxIntentos) {
      alert("La cuenta ha sido bloqueada.");
    }
  }
}

function botonRetirar() {
  window.location.href = "retirar.html";
}

function botonConsularSaldo() {
  window.location.href = "consultarSaldo.html";
}

function botonConsignar() {
  window.location.href = "consignar.html";
}

function botonCambiarClave() {
  window.location.href = "FORMULARIOS.html";
}

function botonConsultarMovimiento() {
  window.location.href = "consultarMovimiento.html";
}

function botonSalir() {
  window.location.href = "FORMULARIOS.html";
}
