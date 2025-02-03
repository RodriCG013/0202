// Reto 1: Suma de Elementos
function sumarElementos(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar la suma de todos los elementos del arreglo
    return arreglo.reduce((suma, elemento)=> suma + elemento, 0);
};

// Reto 2: Número Mayor
function encontrarMayor(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar el número más grande del arreglo
    return Math.max(...arreglo);
};

// Reto 3: Filtrar Pares
function filtrarPares(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo solo con los números pares
    return arreglo.filter(num => num % 2 === 0);
};

// Reto 4: Contar Vocales
function contarVocales(texto) {
    // Los estudiantes implementarán esta función
    // Debe retornar el número de vocales en el texto
    const vocales = "aeiouAEIOU";
    return[...texto].filter(letra => vocales.includes(letra)).length;
}

// Reto 5: Invertir Arreglo
function invertirArreglo(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo con los elementos en orden inverso
    return [...arreglo].reverse();
}

// Reto 6: Promedio de Notas
function calcularPromedio(notas) {
    // Los estudiantes implementarán esta función
    // Debe retornar el promedio de las notas
    if (notas.length === 0) return 0;
    const suma = notas.reduce((total, num) => total + num, 0);
    return suma / notas.length;
}

// Reto 7: Contador de Letras
function contarLetra(texto, letra) {
    // Los estudiantes implementarán esta función
    // Debe retornar cuántas veces aparece la letra en el texto
    texto = texto.toLowerCase();
    letra = letra.toLowerCase();
    return [...texto].filter(caracter => caracter === letra).length;
}

// Reto 8: Elementos Únicos
function obtenerUnicos(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo sin elementos duplicados
    return [...new Set(arreglo)];
}

// Reto 9: Palíndromo
function esPalindromo(texto) {
    // Los estudiantes implementarán esta función
    // Debe retornar true si el texto es un palíndromo, false si no
    const textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, ""); 
    return textoLimpio === [...textoLimpio].reverse().join("");
}