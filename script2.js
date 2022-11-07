// Mayuscula super heores array map


let arreglo =['Capitan America', 'Iron Man', 'Pantera Negra', 'Hulk', 'Spaiderman'];

for (let i=0; i < arreglo.length; i++){
       
         arreglo[i] = arreglo[i].toUpperCase();
        
    }

console.log(arreglo[0]);

const marvel = arreglo.map(element => {
    return element.toUpperCase();
});
console.log(marvel);


// Retornar los pokemos de fuego array filter

let pokemones = [
    {
    nombre: 'Pikachu',
    tipo: 'Electrico'
    },
    {
    nombre: 'Charmander',
    tipo: 'Fuego',
    },
    {
    nombre: 'Bulbasaur',
    tipo: 'Planta'
    },
    {
    nombre: 'Squirtle',
    tipo: 'Agua'
    },
    {
    nombre: 'Charmeleon',
    tipo: 'Fuego'
    },
    {
    nombre: 'Weedle',
    tipo: 'bicho'
    },
    {
    nombre: 'Charizard',
    tipo: 'Fuego'
    }
   ]

   //Vista de Pokemosn
   console.log(pokemones);
   

   var resultado = pokemones.filter(tipo => tipo.tipo == 'Fuego');    
   // resultado por filtro
   console.log(resultado);
