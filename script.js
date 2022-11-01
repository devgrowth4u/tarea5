
// Desarrollo
//Mostrar en consola la secuencia de Fibonacci:
    //a. Entre los números 0 y 1000.
    //b. Números pares entre 0 y 1000.
    //c. Números impares entre 0 y 1000.

function SerieFibonacci(limit){

    const Fibonacci = [0,1];
    for(let i = 2; i < limit; i++){
        Fibonacci [i] = Fibonacci[i-1] + Fibonacci[i-2];

    }
    return Fibonacci;
}

const serieFibonacci= SerieFibonacci(10);
console.log(serieFibonacci);

function ParesFibonnaci(limit){

const Fibonacci = [0,1];
    for(let i = 2; i < limit; i++){
        Fibonacci [i] = Fibonacci[i-1] + Fibonacci[i-2];
        if (Fibonacci[i]%2===0){

            console.log("El número par es: " + Fibonacci[i]);
        }
        
    }
    return Fibonacci;

}

const serieFibonaccipar= ParesFibonnaci(10);
console.log(serieFibonaccipar);

function imparesFibonacci(limit){
    
        const Fibonacci = [0,1];
            for(let i = 2; i < limit; i++){
                Fibonacci [i] = Fibonacci[i-1] + Fibonacci[i-2];
                if (Fibonacci[i]%2!==0){
        
                    console.log("El número impar es: " + Fibonacci[i]);
                }
        
            }
            return Fibonacci;
        
        }
const serieFibonacciimpar= imparesFibonacci(10);
console.log(serieFibonacciimpar);
        
