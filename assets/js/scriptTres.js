/* https://pokeapi.co/api/v2/pokemon */

function consumoDeAPI() {
    var arregloPokemones = [];
    $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon",
        dataType: "json",
        async: false,
        success: function (response) {
            arregloPokemones = consumoDeAPIPorPokemon(response.results);
        }
    });
    return arregloPokemones
}

function consumoDeAPIPorPokemon(arregloPokemonURL) {
    var arregloPokemonesInfoCompleta = [];
    arregloPokemonURL.forEach(function (pokemon) {
        $.ajax({
            type: "get",
            url: pokemon.url,
            dataType: "json",
            async: false,
            success: function (response) {
                arregloPokemonesInfoCompleta.push(response);
            }
        });
    });
    return arregloPokemonesInfoCompleta;
}

console.log(consumoDeAPI());


/* Filter */
function filtrarPorBaseExperiencia(arregloPokemones) {
    var arregloFiltrado = arregloPokemones.filter(function (pokemon) {
        return pokemon.base_experience > 100;

    });
    console.log(arregloFiltrado);
}

var arregloPokemones = consumoDeAPI();
filtrarPorBaseExperiencia(arregloPokemones);

/* Map */
function aumentarBaseExperiencia(arregloPokemones) {
    var arregloNuevo = arregloPokemones.map(function (pokemon) {
        return pokemon.base_experience * 1.2;
    });
    console.log(arregloNuevo);
}

function aumentarBaseExperienciaNuevoAtributo(arregloPokemones) {
    arregloPokemones.map(function(pokemon) {
        return pokemon.base_experience_aumentado = pokemon.base_experience * 1.2;
    });
    return arregloPokemones;
}


aumentarBaseExperiencia(arregloPokemones);
var arregloConNuevoAtributo = aumentarBaseExperienciaNuevoAtributo(arregloPokemones);
console.log(arregloConNuevoAtributo);

