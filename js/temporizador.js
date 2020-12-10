/**
 *  Funcion donde empezara la cuenta atras y lo mostrara en el elemento indicado
 *  @param {Number} time Tiempo del temporizador
 *  @param {String} elementId Id del elemento que vamos a mostrar los datos
 *  @param {Number} intervalo Tiempo que en segundos, donde manda el tiempo que tardara en cambiar numero a numero 
 * 
 */
function temporizador(counter, elementId, intervalo) {

    let elemento = document.getElementById(elementId);
    elemento.innerHTML = counter;

    if (counter == 0) {
        elemento.innerHTML = "Final";
    } else {
        counter--;
        let intervaloAux = intervalo * 1000;

        setTimeout(() => {
            temporizador(counter, elementId, intervalo)
        }, intervaloAux);
    }
}

/** 
 *  Funcion de cabecera donde se ejecutara el temporizador con el tiempo y elemento donde se mostrara el tiempo. 
 *  @param {Number} time Tiempo del temporizador
 *  @param {String} elementId Id del elemento que vamos a mostrar los datos
 *  @param {Number} intervalo Tiempo que en segundos, donde manda el tiempo que tardara en cambiar numero a numero 
 */

export async function cuenta(time = 60, elementId = "body", intervalo = 1) {
    await temporizador(time, elementId, intervalo);

}