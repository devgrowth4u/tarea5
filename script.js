/*
    0, 1, 1, 2, 3, 5, 8, 13...
    fn = f(n - 1) + f(n - 2)
    cuando n >= 2


addEventListener('load', function() {
    ejecutarPrograma();
    function ejecutarPrograma() {
        let n = parseInt(prompt('Cantidad de número:'));
        if (Number.isInteger(n) && n > 0) {
            let arrayFibonacci = generarFibonacci(n);
            imprimirArray(arrayFibonacci);
            /*generarFibonacci(n);
        } else {
            console.log('El número ingresado no es un entero > 0');
        }
    }

    function generarFibonacci(n) {
        /*let f0 = 0;
        let f1 = 1;
        let fn = null;
        let fn = [0, 1];
        if (n <= 1) {
            /*console.log(f0);
            console.log(f1);
            return;
            return fn;
        }
        /*console.log(f0);
        console.log(f1);
        for (let i = 2; i <= n; i++) {
            fn[i] = fn[i - 1] + fn[i - 2];
            /*fn = f1 + f0;
            f0 = f1;
            f1 = fn;
            console.log(fn);
            
        }
        return fn;
    }

    function imprimirArray(array) {
        for(let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }
});
*/

// Desarrollo
// primera prueba de Fibonacci con 0, 1, y solo llegar hasta el 1000


function SerieFibonacci(limit){

    const Fibonacci = [0,1];
    for(let i = 2; i < limit; i++){
        Fibonacci [i] = Fibonacci[i-1] + Fibonacci[i-2];

    }
    return Fibonacci;
}

const serieFibonacci= SerieFibonacci(1000);
console.log(serieFibonacci);


function Par(){

}

function impar(){

}