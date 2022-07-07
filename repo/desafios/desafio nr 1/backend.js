class Usuario {
    constructor(nombre, apellido, libros, mascotas){
    this.nombre= nombre,
    this.apellido= apellido,
    this.libros= [],
    this.mascotas= [] 
    }
    getFullName = function(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    addMascota = function(mascota){
        this.mascotas.push(mascota)
        console.log(`Mi(s) mascota(s) se llama(n):`)
        console.log(this.mascotas)
    }
    countMascotas(){
        console.log(`Tienes ${this.mascotas.length} mascota(s)`)
    }
    addBook = (nombre, autor) => {
        this.libros.push({
            nombre: nombre,
            autor: autor
        })
    }
    getBookNames = () => {
        return this.libros.map( (item) => {return item.nombre;});
    }
}
let user1 = new Usuario("Sebastian", "Peralta", [], [] )
user1.getFullName()
user1.addMascota('Tito')
user1.countMascotas()
user1.getBookNames()