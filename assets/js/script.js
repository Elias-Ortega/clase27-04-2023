/* ARREGLOS */
/* Son una lista de datos
/* tienen un largo dinamico */
/*  Se recorren con un for o cualquier ciclo*/
/* Se definen entre corchetes y cada elemento va separado por coma */
/* tienen una posicion, la posicion parte en 1 y el  indice parte en 0 */
/* Pueden tener un subelemento o mas */
/* Podemos guardar funciones, objetos o distintas estructuras de datos */
/* Atributo largo = length  (tienen atributos)*/
/* Tienen métodos(funciones) = representan acciones o procesos */

/* Métodos de arreglos */
/* Push: agrega un elemento a la última posicion del arreglo */
/* Unshift: agrega un elemento a la primera posición del arreglo */
/* Shift: elimina un elemento a la primera posicion del arreglo */
/* Pop: elimina un elemento a la última posición del arreglo */
/* Splice: elimina un elemento o varios desde un elememnto indicado */


/* Endpoint https://pokeapi.co/api/v2pokemon */

function consumoDeAPI() {

    $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon",
        success: function (response) {
            console.log(response);
        }
    });

}

consumoDeAPI();

