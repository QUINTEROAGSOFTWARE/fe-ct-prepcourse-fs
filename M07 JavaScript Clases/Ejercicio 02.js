/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
   constructor(nombre, apellido, edad, domicilio){
<<<<<<< HEAD
      this.nombre=nombre;
      this.apellido=apellido;
      this.edad=edad;
      this.domicilio=domicilio;
      this.detalle=function(){
         return{
            nombre: this.nombre,
            apellido:apellido,
            edad:this.edad,
            domicilio:this.domicilio
=======
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad =  edad;
      this.domicilio = domicilio;
      this.detalle = function () {
         retutn {
            nombre: this.nombre;
            apellido: this.apellido
            edad: this.edad
            domicilio: this.domicilio
>>>>>>> fccfe4616364c2f7c173078b86b164d4686285f9
         }
      }
   }
}

function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:
<<<<<<< HEAD
   const persona=new Persona('maxi','fonseca',27,'callefalsa123')
   return persona;
=======
   const persona = new Persona("maxi","fonseca", 27"callefalsa123")
   retutn  persona;
>>>>>>> fccfe4616364c2f7c173078b86b164d4686285f9
}

function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:
<<<<<<< HEAD
   Persona.prototype.datos=function(){
      return this.nombre + ', '+this.edad+'años'
=======
   persona.prototype.datos = function () {
      retutn   this. nombre + ", " this.edad + " años";
      
>>>>>>> fccfe4616364c2f7c173078b86b164d4686285f9
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
