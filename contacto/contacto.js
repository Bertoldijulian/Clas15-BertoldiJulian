class Personas {
    constructor(nombre, apellido, edad, email, celular){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.celular = celular;
    }
}

let arrayPersonas = [];

if(localStorage.getItem(`personas`)) {
    arrayPersonas = JSON.parse(localStorage.getItem(`personas`))
} else {
    localStorage.setItem(`personas`, JSON.stringify(arrayPersonas))
}

let formulario = document.getElementById("formContacto");
let divFormulario = document.getElementById("idFormulario")


formulario.addEventListener(`submit`, (e) => {
    e.preventDefault(); 
    
    let nombre = document.getElementById(`idNombre`).value
    let apellido = document.getElementById(`idApellido`).value
    let edad = document.getElementById(`idEdad`).value
    let email = document.getElementById(`idEmail`).value
    let celular = document.getElementById(`idTelefono`).value
    
    console.log(nombre)
    console.log(apellido)
    console.log(edad)
    console.log(email)
    console.log(celular)
    
    const usuario = new Personas(nombre, apellido, edad, email, celular)
    arrayPersonas.push(usuario)
    localStorage.setItem(`personas`, JSON.stringify(arrayPersonas))
    function resetForm(){
        formulario.reset()
    }
    

})

