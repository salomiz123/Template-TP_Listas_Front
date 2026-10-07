/*
    Cargar comidas en memoria desde el JSON
*/
fetch('./data/comidas.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);    
    comidas = data;                   // Asignar el JSON a la variable comidas
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });

let comidas = [];


const container = document.getElementById('comidaContainer');






mostrarComidaConforeach()


const agregarComidaform = document.getElementById("agregarComidaForm")


agregarComidaform.addEventListener("submit", (event) => (


alert("Comida agregada" +  event.target.nombre.value)


))


let nuevacomida = {
  nombre: event.target.nombre.value
  categoria:event.target.categoria.value
  provincia: event.target.provincia.value
  ingredientes: event.target.ingredientes.value
}


comidas.push(nuevacomida)
mostrarComidaConforeach()
agregar server
fetch(api de donde se saca la info)
.then(response => response.json())
.then(data =>{
console.log('comidas cargadas de json')
console.log(data)
comidas = data;
mostrarComidaConforeach)}

.catch(error  => {
console.log('error al leer el archivo json,error')


})
let  comidas =[];

const comidaContainer = document.getElementById("comida cocntainer")

function mostrarComidaConforeach (){

}
mostrarComidaConforeach()

const agregarComidaForm = document.getElementById('aregarcomidaform')

agregarComidaForm.addEventListener("submit,(event" =>{
  
}
  
)






