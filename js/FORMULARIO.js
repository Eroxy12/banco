const btnSignIn=document.getElementById("sign-in"),
      btnSignUp=document.getElementById("sign-up");
      formRegister=document.querySelector(".register"),
      formLogin=document.querySelector(".login");

btnSignIn.addEventListener("click", e =>{ /*la e significa de esta forma*/
    formRegister.classList.add("hide")
    formLogin.classList.remove("hide")
}) 

btnSignUp.addEventListener("click", e =>{
    formLogin.classList.add("hide")
    formRegister.classList.remove("hide")
})

    
// Clase para definir un usuario
class Usuario {
    constructor(nombre, correo, contraseña) {
      this.nombre = nombre;
      this.correo = correo;
      this.contraseña = contraseña;
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

  function botonRetirar (){
    window.location.href="retirar.html"
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
    window.location.href = "login.html"
  }





 
