/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
   // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.
   // Tu código:
<<<<<<< HEAD
   function usuario(usuario,nombre,email,password) {
      this.usuario=usuario;
      this.nombre=nombre;
      this.email=email;
      this.password=password;
      this.saludar =function (){
            return "Hola, mi nombre es "+this.nombre
      }
   }
=======
   function Usuario (usuario, nombre, email, password){
      this.usuario = usuario;
      this.nombre = nombre;
      this.email = email;
      this.password = password
      this.saludar = function (){
         return "Hola, mi nombre es " +this.nombre;
      }
   }
   return Usuario;
>>>>>>> fccfe4616364c2f7c173078b86b164d4686285f9
}

function agregarMetodoPrototype(Usuario) {
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
   // Tu código:
<<<<<<< HEAD
   Usuario.prototype.reverse =function() {
      var palabra = [];
      for (let i = 0; i < array.length; i++) {
         palabra.unshift([i]);
      }
=======
   Usuario.prototype.saludar = function(){
      return "Hello World!"
>>>>>>> fccfe4616364c2f7c173078b86b164d4686285f9
   }
}

function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".
   String.prototype.reverse = function(){
<<<<<<< HEAD
      var palabra =[];
      for (let i = 0; i < this.length; i++){
         palabra.unshift(this[i]);
=======
      //let const var
      var palabra = [];
      for (let i = 0; i < this.length; i++) {
         //push pop anshift shift
         palabra.unshift(this[i]);  
>>>>>>> fccfe4616364c2f7c173078b86b164d4686285f9
      }
      return palabra.join("")
   }
}
   
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};
