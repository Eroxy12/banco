const btnSignIn = document.getElementById("sign-in");
const btnSignUp = document.getElementById("sign-up");
const formRegister = document.querySelector(".register");
const formLogin = document.querySelector(".login");

let intentosFallidos = 0;
const maxIntentos = 3;
const contrasenaCorrecta = "miContraseñaSecreta";
const usuarios = [];

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
    console.log("Inicio de sesión exitoso. Bienvenido, " + usuario.nombre);
    intentosFallidos = 0; // Restablecer el contador de intentos fallidos en caso de inicio de sesión exitoso.
  } else {
    intentosFallidos++;
    console.log("Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.");

    if (intentosFallidos >= maxIntentos) {
      console.log("La cuenta ha sido bloqueada.");
      // Puedes agregar aquí código adicional para bloquear la cuenta, como deshabilitar los campos de inicio de sesión.
    }
  }

  
  // Array para almacenar la información de usuarios (simulación de una base de datos)
  const usuarios = [];
  
  // Función para registrar un nuevo usuario
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
  
  // Función para iniciar sesión
  function iniciarSesion() {
    const correo = document.getElementById("correo-login").value;
    const contrasena = document.getElementById("contraseña-login").value;
  
    const usuario = usuarios.find((usuario) => usuario.correo === correo);
  
    if (usuario && usuario.contraseña === contrasena) {
      console.log("Inicio de sesión exitoso. Bienvenido, " + usuario.nombre);
    } else {
      console.log("Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
  }

}


function botonRetirar() {
  window.location.href = "retirar.html";
}


  function botonConsularSaldo (){
    window.location.href="consultarSaldo.html"
  }
  
  function botonConsignar (){
    window.location.href=""
  }

  function botonCambiarClave (){
    window.location.href = "FORMULARIOS.html"
  }
  
  function botonConsultarMovimiento (){
    window.location.href=""
  }

  function botonSalir (){
    window.location.href = "FORMULARIOS.html"
  }
