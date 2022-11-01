
// Desarrollo
// primera prueba de Fibonacci con 0, 1, y solo llegar hasta el 1000


function SerieFibonacci(limit){

    const Fibonacci = [0,1];
    for(let i = 2; i < limit; i++){
        Fibonacci [i] = Fibonacci[i-1] + Fibonacci[i-2];

    }
    return Fibonacci;
}

const serieFibonacci= SerieFibonacci(1001);
console.log(serieFibonacci);


function Pares(){


}

function impar(){

}