function entregaJS(){
function Usuario(nombre, edad, altura, mascotas) {
    this.nombre= nombre,
    this.edad= edad,
    this.altura= altura ,
    this.mascotas= mascotas
}
let nuevoUser = new Usuario(nombre="Sebastian",edad= 23, altura= 175, mascotas= true)
nuevoUser
console.log(Usuario.nombre)
console.log(Usuario.edad)
console.log(Usuario.altura)
if (Usuario.mascotas == true) {
    console.log(`${Usuario.nombre} tiene mascotas`)
} else {
    console.log(`${Usuario.nombre} no tiene mascotas`)
}
}
entregaJS()