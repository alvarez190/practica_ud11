// Variable a comparar
let time = 5;

/**
 *  Genero una variable del objeto Promise llamada 'promesa' donde el objeto tiene como parametros 
 *  resolve = si la tarea relacionada finaliza con exito
 *  reject = si la tarea no finaliza o no cumple  
 */

let promesa = new Promise((resolve, reject) => {

    // Genereo un elemento 'p' donde mostrare el resultado de la promesa
    let elemento = document.createElement('p');

    /**
     *  Hago cronometro dependiendo del resultado de la comparacion si es cumplida donde pasara 5 segundos
     *  y lanzara el 'resolve' que tiene dentro una funcion que agrega el resultado al elemento creado antes
     *  y lo añade al cuerpo de la pagina para ser vista de igual forma se hizo si la comparacion no se cumple.
     */

    if (time == 5) {
        setTimeout(() => {
            resolve(() => {
                elemento.appendChild(document.createTextNode('Tiempo concluido'));
                document.body.insertBefore(elemento, null);
            })
        }, 5000);

    } else {
        setTimeout(() => {
            reject(() => {
                elemento.appendChild(document.createTextNode('El tiempo no va bien'));
                document.body.insertBefore(elemento, null);
            })
        }, 10000);
    }
});

/**
 *  Llamamos al metodo 'then' y 'catch' que se activan cuando la tarea ha sido exitosa o no 
 *  then - se activa si fue exitosa y catch cuando no.
 */

promesa.then(res => {
        res();
    })
    .catch(error => {
        error();
    });